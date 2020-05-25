var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location"
    },
    {
      type: "input",
      message: "Bio information:",
      name: "bio"
    },
    {
        type: "input",
        message: "What is linkedin profile:",
        name: "linkedin"
    },
    {
        type: "input",
        message: "What is gitHub profile:",
        name: "github"
    }
  ]).then(function(data) {
    

   
      
  
      let personDetails = `
      <div class="person">
         <h2>Name :
             ${data.name}
         </h2>
         <p class="location">Location :${data.location}</p>
         <p class="bio">Bio :${data.bio}</p>
         <p class="linkedin">Linkedin :${data.linkedin}</p>
         <p class="gitHb">GitHub :${data.github}</p>
      </div>
     `; 
     fs.writeFile("index.html", personDetails, function(err) {
  
        if (err) {
            return console.log(err);
          }
          else console.log("Succesfully Writing into the html file");
    });
  
  }); 
    

 
  

 
  
       
    
    

  
  

  



 