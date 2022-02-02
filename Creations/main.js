document.getElementById("rebirthButton").style.display = "none"
document.getElementById("matterButton").style.display = "none"
document.getElementById("rebirthCreationButton").style.display = "none"
document.getElementById("rebirthText").style.display = "none"
var gameData = {
    creationPoints: 0,
    creationPointsPerClick: 1,
    creationPointsPerClickCost: 10,
    normalCreationAmount: 0,
    rebirthPoints: 0,
    rebirthCreationAmount: 0,
    rebirthAmount: 0,
    matter: 0,
}
function buyCreationPointsPerClick(){
    if (gameData.creationPoints>= gameData.creationPointsPerClickCost){
        gameData.creationPoints-=gameData.creationPointsPerClickCost
        gameData.creationPointsPerClick*= 1.5
        gameData.creationPointsPerClickCost*= 2.2
        gameData.creationPointsPerClick= Math.round(gameData.creationPointsPerClick)
        gameData.creationPointsPerClickCost= Math.round(gameData.creationPointsPerClickCost)
        gameData.normalCreationAmount+= 1
        document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points (Your current Creation Points per click:"+ gameData.creationPointsPerClick + ")"
        document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") (Cost: " + gameData.creationPointsPerClickCost + "Creation Points)"
        
    }
}
function createCreationPoint() {
    gameData.creationPoints += gameData.creationPointsPerClick
    document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points (Your current Creation Points per click:"+ gameData.creationPointsPerClick + ")"
    document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") (Cost: " + gameData.creationPointsPerClickCost + "Creation Points)"
    gameData.creationPoints= Math.round(gameData.creationPoints)
    gameData.creationPointsPerClick= Math.round(gameData.creationPointsPerClick)
    gameData.creationPointsPerClickCost= Math.round(gameData.creationPointsPerClickCost)
    document.getElementById("rebirthText").innerHTML= gameData.rebirthPoints +" Rebirth Points"
}
function rebirth() {
    if(gameData.creationPoints>=10000){
    gameData.creationPoints=0
    gameData.creationPointsPerClick=1
    gameData.creationPointsPerClickCost=10
    gameData.normalCreationAmount=0
    gameData.rebirthPoints+=1
    gameData.rebirthAmount+=1
    document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points (Your current Creation Points per click:"+ gameData.creationPointsPerClick + ")"
    document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") (Cost: " + gameData.creationPointsPerClickCost + "Creation Points)"
    document.getElementById("rebirthText").innerHTML= gameData.rebirthPoints +" Rebirth Points"
    }
}
function createrMatter() {
    
}
var mainGameLoop=window.setInterval(function() {
    if(gameData.creationPoints>=10000){
        document.getElementById("rebirthButton").style.display="inline-block"
    }
    if(gameData.rebirthAmount>=1){
        document.getElementById("rebirthText").style.display="inline-block"
        document.getElementById("rebirthCreationButton").style.display="inline-block"
        document.getElementById("matterButton").style.display="inline-block"
        document.getElementById("rebirthButton").style.display="inline-block"
    }
}, 500)
var savegame = JSON.parse(localStorage.getItem("creationsSave"))
if (savegame !== null){
    gameData=savegame
}
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("creationsSave", JSON.stringify(gameData))
}, 15000)
function clearSave() {
    localStorage.removeItem("creationsSave")
}