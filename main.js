nose_x = 0;
nose_y = 0;

function preload() {
    clown_nose = loadImage ('https://i.postimg.cc/d110P4np/48-484018-clown-nose-png-clipart-removebg-preview-1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(825, 250);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    
    image(clown_nose, nose_x, nose_y, 30, 30);

}

function take_snapshot() {
    save('LINCOLN.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
           nose_x = results[0].pose.nose.x;
           nose_y = results[0].pose.nose.y;
            console.log("nose x =" + nose_x);
        console.log("nose y= " + nose_y);
    }
}
