let points = [];
function setup() {
  createCanvas(400, 400);
  noStroke();
  fill('black');
}

function draw() {
  background(220);
  circle(mouseX,mouseY,20);
  points.push({x: mouseX,y: mouseY});
}
function keyPressed() {
  if(key === 's') {
  noLoop()
  console.log(points)
}
if (key === 'g') {
  background(220)
  for (let p of points) {
    circle(p.x,p.y,20)
  }
  redraw()
  }
  if (key === 'w') {
   let myWriter = createWriter('points.csv');
   for (let p of points) {
     myWriter.print(`${p.x},${p.y}`);
   }
    myWriter.close();
  }
}
