const express = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const multer = require("multer");
const app = express();
const cors = require("cors");
const upload = multer({ dest: "./uploads" });
app.use(cors());
app.post("/convertToPdf", upload.single("file"), (req, res) => {
  const jsonFile = req.file;
  fs.readFile(jsonFile.path, "utf8", (err, jsonData) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error reading JSON file" });
    } else {
      const data = JSON.parse(jsonData);
      const pdf = new PDFDocument({
        layout: "portrait",
        size: "A4",
      });
      pdf.addPage();
      pdf.font("Helvetica");
      pdf.fontSize(24);
      data.forEach((item, index) => {
        pdf.text(`Item ${index + 1}: ${item.name}`, 50, 50 + index * 30);
      });
      const pdfBuffer = [];
      pdf.pipe(fs.createWriteStream("output.pdf"));
      pdf.on("data", (chunk) => {
        pdfBuffer.push(chunk);
      });
      pdf.on("end", () => {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          'attachment; filename="output.pdf"'
        );
        res.send(Buffer.concat(pdfBuffer));
      });
      pdf.end();
    }
  });
});
app.listen(4000, () => {
  console.log("Server started");
});
// const express = require("express");
// const fs = require("fs");
// const multer = require("multer");
// const xlsx = require("xlsx");
// const app = express();
// const cors = require("cors");

// const upload = multer({ dest: "./uploads/" });

// app.use(cors());

// app.post("/convert", upload.single("file"), (req, res) => {
//   const jsonFile = req.file;

//   fs.readFile(jsonFile.path, "utf8", (err, jsonData) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send({ message: "Error reading JSON file" });
//     } else {
//       const data = JSON.parse(jsonData);
//       const wb = xlsx.utils.book_new();
//       const ws = xlsx.utils.json_to_sheet(data);
//       xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
//       const buffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });
//       res.setHeader(
//         "Content-Type",
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//       );
//       res.setHeader(
//         "Content-Disposition",
//         'attachment; filename="output.xlsx"'
//       );
//       res.send(buffer);
//     }
//   });
// });

// // Start the server
// const port = 4000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
