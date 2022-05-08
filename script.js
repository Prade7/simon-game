$("#level-title").on("click",function(){
    alert("ok da deii")
})

var gamePattern=[];
var userChoosenColor;
var started=false;
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"]


var level=0;
$(document).keypress(function(){
    if(!started){
    $("h1").text("Level-"+level);
    nextSequence();
    started=true;
    }
})

$(".btn").click(function(){
    userChoosenColor=$(this).attr("id")
    
    userClickedPattern.push(userChoosenColor)
    console.log(userClickedPattern)
    playSound(userChoosenColor);
animatePress(userChoosenColor);
checkAnswer(userClickedPattern.length-1)

// 9865563797
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){    
    

    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            nextSequence()
        },1000)
    }
}
else{
    console.log("failed");
    playSound("wrong");
    $("body").addClass(".game-over");

    $("h1").text("Game Over ,Press any key to Restart");


    setTimeout(function(){
        $("body").removeClass(".game-over")
    },400)
    
    startOver();
}
}

function nextSequence(){
   
    userClickedPattern=[];
    level+=1;
    $("h1").text("Level-"+level);

    var randomNumber;
        randomNumber=Math.random();
        randomNumber=(randomNumber*4);
        randomNumber=Math.floor(randomNumber);
        
        var randomChoosenColour=buttonColours[randomNumber]
        
        
        gamePattern.push(randomChoosenColour)
        // console.log(gamePattern)
        // console.log(randomChoosenColour)
        
        $("#"+randomChoosenColour).fadeOut(100).fadeIn(100);
        
        
       
        
        playSound(randomChoosenColour)
        
    }
    
    
 


    function animatePress(currentColor){
        $("#"+currentColor).addClass("pressed");

        setTimeout(function(){
            $("#"+currentColor).removeClass("pressed")
        },100);

           
    }


function playSound(name){
        var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
    }  

function startOver(){
        level=0;
        gamePattern=[];
        started=false;
    }

    

    








