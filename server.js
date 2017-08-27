var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var anime ={
    CodeGeass:{
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
    },
    DeathNote: {
        title:'Death Note',
        heading:'Death Note',
        content:` <p>
                Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated 
                by Takeshi Obata. The story follows Light Yagami, a high school student who 
                discovers a supernatural notebook from a Shinigami named Ryuk that grants its 
                user the ability to kill anyone whose name and face he knows. The series 
                centers around Light's attempts to create and rule a world "cleansed of evil" 
                as "God" using the notebook, and the efforts of a detective known as L to stop 
                him.
            </p>`
    },
    TokyoGhoul:{
         title:'Tokyo Ghoul',
        heading:'Tokyo Ghoul',
        content:`
            <p>
            Tokyo Ghoul is set in an alternate reality where ghouls, individuals who 
            can only survive by eating human flesh, live among the normal humans in 
            secret, hiding their true nature to evade pursuit from the authorities. 
            Including enhanced speed, senses, and regenerative ability, a regular 
            ghoul is several times stronger than a normal human, has a skin resistant 
            to ordinary piercing weapons and has at least one special predatory organ 
            called a "Kagune", which it can manifest and use as a weapon during combat
            . Another distinctive trait of ghouls is that when they are excited the 
            color of their sclera in both eyes turns black and their irises red. In 
            the case of a half-ghoul, only one of the eyes undergoes the 
            transformation. A half-ghoul can either be born naturally as a ghoul and a
            human's offspring, or artificially created by transplanting some 
            ghoul organs into a human. In both cases, a half-ghoul is usually much 
            strongerthan a pure-blood ghoul. There is also the case of half-humans, 
            hybrids of ghouls and humans that can feed like normal humans and lack a 
            Kagune while possessing enhanced abilities, but shortened lifespans. To 
            hunt down the ghouls , several government-sponsored organizations around 
            the world were created.
            </p>`
    }

function createTemplate(data) {
    var title= data.title;
    var heading= data.heading;
    var content= data.content;
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
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page1', function (req, res) {
  res.send(createTemplate(CodeGeass));
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
