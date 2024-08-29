function setup() {
    createCanvas(600, 600);
   background("purple");
  }
  function draw() {
   
  
    str("blue");
    fill("gold");
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  