function preload()
{
song = loadSound("music.mp3");
song = loadSound("Fifty-Fifty-Cupid-Twin-Version-(Gospeljingle.com).mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}