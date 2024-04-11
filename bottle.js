img = "";
status1 = "";

function preload() {
    img = loadImage("bottle.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
if(error) {
    console.log(error);
}
console.log(results);
}

function draw() {
    function draw(){
        image(img, 0, 0, 750, 420);
        fill("#FF0000");
        text("Dog", 45, 75);
        noFill();
        stroke("#FF0000");
        rect(30, 60, 450, 350);
        fill("#FF0000");
        text("Cat", 320, 120);
        noFill();
        stroke("#FF0000");
        rect(300, 90, 270, 320);
    }
}