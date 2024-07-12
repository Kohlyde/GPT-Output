<!-- <style>
    body,
    html {
      width: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background-color: #121212;
      color: #E0E0E0;
    }

    .navbar-main {
      width: 100%;
      background-color: #1B1B1B;
    }
/* left ide */
    .coding-pad {
      padding: 10px;
      padding-left:20px;
      height: auto ;
      
      /* calc(100vh - 20px); */
      overflow-y: auto;
      background-color: #1E1E1E;
      color: #FFFFFF;
      border: none;
    }
  /* right side */
    .receipt-display {
      padding: 10px;
      height: calc(100vh - 00px);
      overflow-y: auto;
      background-color: #1E1E1E;
      color: #FFFFFF;
      border: none;
    }
    .coding-pad {
      border-right: 1px solid #666666;
    }

    .receipt-display:hover {
      background-color: #1E1E1E !important ;
      white-space: pre-wrap;
    }

    button {
      background-color: #0D47A1;
      color: #FFFFFF;
      border: 1px solid #666666;
    }

    button:hover {
      background-color: #1565C0;
    }

    textarea {
      width: 100%;
      height: 85%;
      background-color: #1e1e1e;
      color: #777;
      border: 1px solid #9999;
    }

    .svg-upload-container {
      background-color: #1E1E1E;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .svg-upload-input {
      width: 20%;
      height :80%;
      margin: 15px 0 0 0;
      margin-top:20;
    }
    .svg-upload-btn {
      width: 20%;
      margin-top: 0px;
      margin: 15px 0;
     Padding:20px;
    }

    .svg-display-flex {
      display: flex;
      justify-content: space-between;
    
    
    }

    .svg-display-area {
      width: 80mm;
      height: calc(85vh - 40px);
      background-color: #1E1E1E;
      border: 1px solid #666;
      padding: 10px;
      box-sizing: border-box;
      overflow-y: auto;
    }

    .svg-display-title {
      margin-bottom: 10px;

    }
  </style>
  <script>
    function uploadAndDisplaySVG() {
      const fileInput = document.getElementById('svgUpload');
      const file = fileInput.files[0];

      if (!file) {
        alert('Please select a file.');
        return;
      }

      if (file.type !== 'image/svg+xml') {
        alert('Please upload a valid SVG file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(e.target.result, "image/svg+xml");
        const svg = svgDoc.documentElement;

        if (!svg || svg.nodeName !== 'svg') {
          alert('The uploaded file is not a valid SVG document.');
          return;
        }

        document.getElementById('svgDisplay1').innerHTML = svg.outerHTML;
        document.getElementById('svgDisplay2').innerHTML = svg.outerHTML;
      };

      reader.readAsText(file);
    }

    function executeCode() {
      try {
        const code = document.getElementById('codeInput').value;
        const result = Function('"use strict";return (' + code + ')')();
        document.getElementById('receiptOutput').innerText = result;
      } catch (e) {
        document.getElementById('receiptOutput').innerText = 'Error: ' + e.message;
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('uploadBtn').addEventListener('click', function () {
        const fileInput = document.getElementById('svgUpload');
        const file = fileInput.files[0];

        if (!file) {
          alert('No file selected.');
          return;
        }

        if (file.type !== 'image/svg+xml') {
          alert('Please upload a valid SVG file.');
          return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(e.target.result, "image/svg+xml");
          const svg = svgDoc.documentElement;

          const svgWidth = svg.width.baseVal.valueInSpecifiedUnits;
          const svgHeight = svg.height.baseVal.value;

          if (svgWidth !== 80 || svgHeight < 100) {
            alert('SVG does not meet the size requirements. Width must be exactly 80mm and height at least 100px.');
            return;
          }

          const requiredTags = ['title'];
          let tagsValid = requiredTags.every(tag => svg.querySelector(tag));

          if (!tagsValid) {
            alert('SVG does not contain all required tags.');
            return;
          }

          document.getElementById('svgDisplay1').innerHTML = svg.outerHTML;
          document.getElementById('svgDisplay2').innerHTML = svg.outerHTML;
        };
        reader.readAsText(file);
      });
    });
  </script> -->