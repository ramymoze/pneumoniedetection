const express = require('express');
const formidable = require('formidable');
const { exec } = require('child_process');
const path = require('path');

const app = express();

app.post('/detect', (req, res) => {
    const form = new formidable.IncomingForm({
        uploadDir: path.join(__dirname, '../uploads'),
        keepExtensions: true,
        multiples: false
    });


    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error('Formidable error:', err);
            return res.status(400).json({ error: 'Error processing file' });
        }

        const file = Array.isArray(files.image) ? files.image[0] : files.image;

        if (!file) {
            return res.status(400).json({ error: 'No image file uploaded' });
        }

        const filePath = file.filepath || file.path;
        if (!filePath) {
            console.error("Uploaded file object:", file);
            return res.status(400).json({ error: 'Uploaded file has no valid path' });
        }

        const formattedPath = filePath.replace(/\\/g, '/');//n3dl fl path

        exec(`python predictiontest.py "${formattedPath}"`, (error, stdout, stderr) => {
           

            if (error) {
                return res.status(500).json({ error: 'Error executing Python script' });
            }

            try {
                const resultLines = stdout.trim().split('\n');
                const lastLine = resultLines[resultLines.length - 1];
                const result = JSON.parse(lastLine);
                return res.json(result);
            } catch (parseError) {
                console.error(' JSON parse error:', parseError);
                return res.status(500).json({ error: 'Error parsing Python script output' });
            }
        });
    }); 
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
