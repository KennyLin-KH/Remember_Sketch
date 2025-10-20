let points = {};

async function setup() {
  points = await loadJSON('points.json');
  console.log  (points);
  createCanvas(points.canvasSize.w, points.canvasSize.w);
}

function draw() {
  background(220);
  circle (points.points[0].x,points.points[0].y,points.points[0].d);
  points.points.push({x:mouseX,y:mouseY});
}
function keyPressed() {
  saveJSON(points, 'points.json');
}
