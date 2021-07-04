soundtrack_1="";
soundtrack_2="";
leftwrist_x=0;
leftwrist_y=0;
rightwrist_x=0;
rightwrist_y=0;
function preload() {
    soundtrack_1=loadSound("music.mp3");
    soundtrack_2=loadSound("music2.mp3")
}
function setup() {
    video=createCapture(VIDEO);
    video.hide();
    canvas=createCanvas(800,600);
    canvas.center();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose',getResults);
}
function draw() {
    image(video, 0,0,800,600);
}


function getResults(results) {
    if (results.length>0) {
        console.log(results);
        leftwrist_x=results[0].pose.leftWrist.x;
       leftwrist_score=results[0].pose.keypoints[9].score;
        leftwrist_y=results[0].pose.leftWrist.y;
        rightwrist_x=results[0].pose.rightWrist.x;
        rightwrist_y=results[0].pose.rightWrist.y;
    }
}

function modelLoaded() {
    console.log("PoseNet Initialized");
}

function draw() {
    image(video, 0,0,800,600);
      
    if (leftwrist_score>0.2) {
        circle(leftwrist_x, leftwrist_y,10);
        leftwrist_number=Number(LeftWristY);

    leftwrist_number_no_decimal=floor(leftwrist_number);
    vol=leftwrist_number_no_decimal/500;
    document.getElementById("volume").innerHTML="Volume= " + volume;
    }
}





    

