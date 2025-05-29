const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const formidable = require("formidable");
const { exec } = require("child_process");
const path = require("path");
const fs = require('fs').promises; // Using promises version for better async handling
const { PrismaClient } = require("@prisma/client");
const e = require("express");
const app = express();
const prisma = new PrismaClient();

// Enable CORS for all routes
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
}));

app.use(express.json({ limit: "10mb" })); // Middleware to parse JSON bodies

app.post("/detect", (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(__dirname, "../uploads"),
    keepExtensions: true,
    multiples: false,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(400).json({ error: "Error processing file" });
    }

    const file = Array.isArray(files.image) ? files.image[0] : files.image;

    if (!file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const filePath = file.filepath || file.path;
    if (!filePath) {
      console.error("Uploaded file object:", file);
      return res.status(400).json({ error: "Uploaded file has no valid path" });
    }

    const formattedPath = filePath.replace(/\\/g, "/"); //n3dl fl path

    exec(
      `python predictiontest.py "${formattedPath}"`,
      (error, stdout, stderr) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing Python script" });
        }

        try {
          const resultLines = stdout.trim().split("\n");
          const lastLine = resultLines[resultLines.length - 1];
          const result = JSON.parse(lastLine);
          return res.json(result);
        } catch (parseError) {
          console.error(" JSON parse error:", parseError);
          return res
            .status(500)
            .json({ error: "Error parsing Python script output" });
        }
      }
    );
  });
});

app.post("/create_patient", async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    dateOfBirth,
    medicalHistory,
    email,
  } = req.body;
  const saltRounds = 12; // Work factor (higher = more secure but slower)
  const salt = await bcrypt.genSalt(saltRounds); // Generate a salt for hashing which is a random string 
  // Hash the password with the generated salt
  const password = await bcrypt.hash(req.body.password, salt); // Get the password from the request body : req.body.password
  const newPatient = await prisma.patient.create({
    data: {
      firstName,
      lastName,
      age: parseInt(age, 10),
      dateOfBirth: new Date(dateOfBirth),
      medicalHistory,
      email,
      password,
    },
  });

  res.json(newPatient); // return patient
});


app.post("/create_doctor", async (req, res) => {

  const { id, firstName, lastName, email } = req.body;
  try {
    console.log("Received body:", req.body);
    const saltRounds = 12; // Work factor (higher = more secure but slower)
    const salt = await bcrypt.genSalt(saltRounds); // Generate a salt for hashing which is a random string 
    // Hash the password with the generated salt
    const password = await bcrypt.hash(req.body.password, salt); // Get the password from the request body : req.body.password
    await prisma.doctor.create({
      data: {
        id, // from Supabase
        firstName,
        lastName,
        email,
        password,
      },
    });
    res.json({ message: "Doctor created successfully" });
  } catch (err) {
  console.error("Doctor creation error:", err);
  res.status(500).json({ error: err.message, stack: err.stack });
}
});


app.post("/create_radiologue", async (req, res) => {
  const { firstName, lastName, email,} = req.body;
  const saltRounds = 12; // Work factor (higher = more secure but slower)
  const salt = await bcrypt.genSalt(saltRounds); // Generate a salt for hashing which is a random string 
  // Hash the password with the generated salt
  const password = await bcrypt.hash(req.body.password, salt); // Get the password from the request body : req.body.password
  await prisma.radiologue.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
  res.json("radiologue created successfully");
});


app.get("/get_patients", async (req, res) => {
  try {
    // Fetch patients with all fields from your schema
    const allPatients = await prisma.patient.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        age: true,
        dateOfBirth: true,
        email: true,
        medicalHistory: true,
      },
      orderBy: {
        lastName: 'asc'
      }
    });

    // Format dates to ISO string for consistent frontend handling
    const formattedPatients = allPatients.map(patient => ({
      ...patient,
      dateOfBirth: patient.dateOfBirth.toISOString()
    }));

    res.json({
      success: true,
      data: formattedPatients
    });

  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      // Only show details in development
      details: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        stack: error.stack
      } : undefined
    });
  }
});

app.use(express.json({ limit: '10mb' }))


app.get("/get_doctors", async (req, res) => {
  try {
    const allDoctors = await prisma.doctor.findMany();
    res.json({
      success: true,
      data: allDoctors,
      count: allDoctors.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch doctors'
    });
  }
});

app.get("/get_radiologues", async (req, res) => {
  const allRadiologues = await prisma.radiologue.findMany();
  res.json(allRadiologues);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/login', async (req, res) => {
  const { email, userType } = req.body;

  try {
    if (userType === "doctor") { // lazm nbdl logic ada psq na7it radiobox t3 usertype
      user = await prisma.doctor.findUnique({
        where: { email },
        select: { id: true, firstName: true, lastName: true, email: true },
      });
    } else{
      user = await prisma.radiologue.findUnique({
        where: { email },
        select: { id: true, firstName: true, lastName: true, email: true },
      });
    } // Closing brace for the if-else block

    if (!user) {
      return res.status(404).json({ error: `${userType} profile not found` });
    }

    res.json(user);
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/patients/:id", async (req, res) => {
  try {
    const patient = await prisma.patient.findUnique({
      where: { id: req.params.id }
    });

    if (!patient) {
      return res.status(404).json({ success: false, error: "Patient not found" });
    }

    res.json({ success: true, data: patient });
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).json({ success: false, error: "Failed to fetch patient" });
  }
});




app.post("/create_radio", async (req, res) => {
  console.log(Object.keys(prisma));

  const {
    patient_id,
    radiologue_id,
    doctor_id,
    radio_image,
    title,
    comment,
    type,
  } = req.body;

  try {
    if (!patient_id || !radiologue_id || !doctor_id || !radio_image || !title || !type) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Convert base64 to binary (strip metadata)
    const base64Data = radio_image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const newRadio = await prisma.radio.create({
      data: {
        patient_id,
        radiologue_id,
        doctor_id,
        radio_image: buffer,
        Title: title,
        Comment: comment || null,
        type,
      },
    });

    res.status(201).json({ success: true, data: newRadio });
  } catch (error) {
    console.error("Error saving radio:", error);
    res.status(500).json({ 
      error: "Server error while saving radio",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Cleanup endpoint
app.post("/cleanup-uploads", async (req, res) => {
  console.log("🚀 Cleanup endpoint called");
  const uploadsDir = path.join(__dirname, "../../backend/uploads");
  console.log("📁 Uploads directory path:", uploadsDir);
  
  try {
    // Check if directory exists
    try {
      console.log("🔍 Checking if directory exists...");
      await fs.access(uploadsDir);
      console.log("✅ Directory exists");
    } catch (error) {
      console.log("⚠️ Directory doesn't exist, creating it...");
      console.error("Directory access error:", error);
      await fs.mkdir(uploadsDir, { recursive: true });
      console.log("✅ Directory created");
      return res.json({ message: "No files to clean" });
    }

    // Read directory contents
    console.log("📖 Reading directory contents...");
    const files = await fs.readdir(uploadsDir);
    console.log(`📊 Found ${files.length} files to delete:`, files);

    // Delete each file
    const deletePromises = files.map(async (file) => {
      const filePath = path.join(uploadsDir, file);
      try {
        console.log(`🗑️ Attempting to delete: ${file}`);
        await fs.unlink(filePath);
        console.log(`✅ Successfully deleted: ${file}`);
      } catch (err) {
        console.error(`❌ Error deleting ${file}:`, err);
        console.error("Error details:", {
          code: err.code,
          message: err.message,
          stack: err.stack
        });
      }
    });

    // Wait for all deletions to complete
    console.log("⏳ Waiting for all deletions to complete...");
    await Promise.all(deletePromises);
    console.log("✅ All deletions completed");

    // Verify cleanup
    const remainingFiles = await fs.readdir(uploadsDir);
    console.log(`📊 Files remaining after cleanup: ${remainingFiles.length}`, remainingFiles);

    res.json({ 
      message: "Cleanup completed", 
      filesDeleted: files.length,
      remainingFiles: remainingFiles.length
    });
  } catch (error) {
    console.log("❌ Cleanup error occurred:");
    console.log("log message:", error.message);
    console.log("Error code:", error.code);
    console.log("Error stack:", error.stack);
    console.log("Full error object:", error);
    
    res.status(500).json({ 
      error: "Failed to clean uploads",
      details: {
        message: error.message,
        code: error.code,
        path: uploadsDir
      }
    });
  }
});