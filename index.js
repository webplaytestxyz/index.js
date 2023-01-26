const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
<html>
  <head>
    <title>My Webpage</title>
    <style>
      /* Set styles for the header, content, and sidebar */
      #header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 15%;
        background-color: #ddd;
      }
      
      #container {
        position: absolute;
        top: 15%;
        left: 0;
        width: 100%;
        height: 85%;
        display: flex;
      }
      
      #content {
        flex: 0.75;
        background-color: #eee;
      }
      
      #sidebar {
        flex: 0.25;
        background-color: #ccc;
      }
    </style>
  </head>
  <body>
    <div id="header">
      <h1>Upper Menu</h1>
    </div>
    <div id="container">
      <div id="content">
        <h2>Content Area</h2>
        <p>This is where the main content of the webpage will go.</p>
      </div>
      <div id="sidebar">
        <h2>Sidebar</h2>
        <p>This is where the sidebar content will go.</p>
      </div>
    </div>
  </body>
</html>

  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});