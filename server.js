var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var CodeGeass={
    title:'Code Geass',
    heading:'Code Geass',
    content:` 
        <p>
            Code Geass: Lelouch of the Rebellion often referred to as simply 
            Code Geass, is a Japanese anime series created by Sunrise, 
            directed by Gorō Taniguchi, and written by Ichirō Ōkouchi, with        
            original character designs by manga authors Clamp. Set in an 
            alternate timeline, the series focuses on how the 
            former prince Lelouch vi Britannia obtains a power known as Geass 
            and decides to use it to obliterate the Holy Britannian Empire, a 
            superpower that has been conquering various countries.
        </p> `
}

function createTemplate(data) {
var htmlTemplate=`
<html>
  <head>
    <title>
      ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" /> 
    </head>
     <body>
        <div class="container">
            <div>
                <h1> ${heading} </h1>
            </div>
          <div>
                 ${content}
            </div>
        </div>
    </body>  
</html>
`;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/page2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/page3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
