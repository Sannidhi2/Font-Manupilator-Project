difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,450);
    canvas.position (750,110);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#f57dab');
    textSize(difference);
    fill('white')
    text('Sannidhi',50,400)
    document.getElementById("font_size").innerHTML="Font size of the text will be="+difference+"px";
}
function modelLoaded(){
    console.log('PoseNet Is Intialized!');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
       
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}