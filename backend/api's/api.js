const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const formidable = require("formidable");
const { exec } = require("child_process");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const e = require("express");
const app = express();
const prisma = new PrismaClient();
app.use(express.json());


// Enable CORS for all origins (or specify your frontend URL)    tahts amiddlware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true // If you're using cookies/auth
}));
app.use(express.json()); // Middleware to parse JSON bodies

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
      age,
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

app.get("/api/patients/:id", async (req, res) => {
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