<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DTC-Calculator™ - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>🧮 DTC-Calculator™</h1>

  <p>
    A simple yet elegant web-based calculator built as a personal learning project using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
    This project helps reinforce DOM manipulation, styling, and basic logic implementation using native web technologies.
  </p>

  <h2>📸 Screenshots</h2>
  <p>Put your screenshots in a folder like <code>/assets/</code> and update these paths:</p>
  <table>
    <tr>
      <th>Desktop View</th>
      <th>Mobile View</th>
    </tr>
    <tr>
      <td><img src="assets/desktop.png" alt="Desktop view"></td>
      <td><img src="assets/mobile.png" alt="Mobile view"></td>
    </tr>
  </table>

  <h2>🎯 Features</h2>
  <ul>
    <li>✅ Perform basic arithmetic operations: <code>+</code>, <code>-</code>, <code>×</code>, <code>/</code>, <code>%</code></li>
    <li>✅ Clear display (<code>AC</code>) and delete input (<code>DEL</code>)</li>
    <li>✅ Click-based interaction (no keyboard input required)</li>
    <li>✅ Responsive layout for mobile devices</li>
    <li>✅ Press animations on button click</li>
  </ul>

  <h2>🧠 How It Works</h2>
  <p>The calculator listens for button clicks and uses JavaScript to update the display and evaluate expressions.</p>
  <pre><code>if(btnValue  === "=" && output !== ""){
    output = eval(output.replace("%", "/100")); 
}</code></pre>

  <h2>🖌️ UI & Animations</h2>
  <p><strong>Layout:</strong> The calculator UI is organized using CSS Grid and styled with box shadows and rounded corners.</p>

  <p><strong>Animations:</strong></p>
  <ul>
    <li><strong>Button Press:</strong> Buttons slightly move down when clicked</li>
    <li><strong>Hover Effects:</strong> Operator buttons have color changes</li>
  </ul>

  <p>Include an animation preview GIF here:</p>
  <p><img src="assets/calc-animation.gif" alt="Calculator Animation"></p>

  <pre><code>button:active {
    transform: translateY(2px);
}</code></pre>

  <h2>📁 Project Structure</h2>
  <pre><code>📁 DTC-Calculator
├── index.html        # Markup layout
├── style.css         # Styling and responsiveness
├── script.js         # Button logic and calculations
└── assets/           # (Optional) Folder for images and GIFs
</code></pre>

  <h2>🚀 Getting Started</h2>
  <ol>
    <li>Download or clone this repository</li>
    <li>Open <code>index.html</code> in your browser</li>
    <li>Start calculating!</li>
  </ol>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Vanilla JavaScript (DOM, <code>eval</code>, event listeners)</li>
  </ul>

  <h2>🙋‍♂️ Author</h2>
  <p><strong>MrDino-Tz</strong><br>
  <a href="https://github.com/MrDino-Tz">GitHub Profile</a></p>

  <h2>📌 Note</h2>
  <p>
    This calculator is built for learning purposes and may not handle complex expressions like parentheses or chained operations.
    For more advanced calculators, consider using React or Vue.
  </p>

</body>
</html>




<h1 align="center">Hi 👋, I'm MrDino</h1>
<h3 align="center">A passionate Software from Tanzania</h3>

- 🌱 I’m currently learning **Spring Boot**

- 💬 Ask me about **Android Studio,Spring Boot**

- 📫 How to reach me **mrdinotz@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://kotlinlang.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> </p>

<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=mrdino-tz&show_icons=true&locale=en&layout=compact" alt="mrdino-tz" /></p>

