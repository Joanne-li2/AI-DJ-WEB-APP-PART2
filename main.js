song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("Harmless_Swing_Lynn.mp3");
    song2 = loadSound("Experience.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}