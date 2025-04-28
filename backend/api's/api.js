const express = require("express");
const formidable = require("formidable");
const { exec } = require("child_process");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const e = require("express");
const app = express();
const prisma = new PrismaClient();
require("dotenv").config();
app.use(express.json());

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
    password,
  } = req.body;

  await prisma.patient.create({
    data: {
      firstName,
      lastName,
      age,
      dateOfBirth: new Date(dateOfBirth), // convert to Date object
      medicalHistory,
      email,
      password,
    },
  });
  res.json("Patient created successfully");
});

app.post("/create_doctor", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await prisma.doctor.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
  res.json("doctor created successfully");
});

app.post("/create_radiologue", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

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
  const allPatients = await prisma.patient.findMany();
  res.json(allPatients);
});

app.get("/get_doctors", async (req, res) => {
  const allDoctors = await prisma.doctor.findMany();
  res.json(allDoctors);
});

app.get("/get_radiologues", async (req, res) => {
  const allRadiologues = await prisma.radiologue.findMany();
  res.json(allRadiologues);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
