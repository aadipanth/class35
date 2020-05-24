var database;
var form;


function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
form=new Form();

  
}

function draw(){
  form.display();
     
  
}

