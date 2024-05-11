leftWristX = 0;
rightWristX = 0;
diff = 0;


function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(560,100);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background("grey");
    document.getElementById("flb").innerHTML = "Font Size of Your Text Will be : "+diff+"px";
    textSize(diff);
    fill("red");
    text("Alex",100,400);
}

function modelLoaded()
{
    console.log("PoseNet Model Has Succesfully Been Chipi Chipi Chapa Chapa'ed ");

}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            diff = floor(leftWristX - rightWristX);
        }
}
