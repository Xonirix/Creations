document.getElementById("rebirthButton").style.display = "none"
document.getElementById("matterButton").style.display = "none"
document.getElementById("rebirthCreationButton").style.display = "none"
document.getElementById("rebirthText").style.display = "none"
document.getElementById("rebirthCreationResetButton").style.display = "none"
document.getElementById("matterText").style.display = "none"
var gameData = {
    creationPoints: 0,
    creationPointsPerClick: 1,
    creationPointsPerClickCost: 10,
    normalCreationAmount: 0,
    rebirthPoints: 0,
    rebirthCreationAmount: 0,
    rebirthAmount: 0,
    rebirthCreationCost: 1,
    matter: 0,
    update: 1
    //remember to do the update thingy everytime you add a new number
}
function buyCreationPointsPerClick(){
    if (gameData.creationPoints>= gameData.creationPointsPerClickCost){
        gameData.creationPoints-=gameData.creationPointsPerClickCost
        gameData.creationPointsPerClick*= 1.5
        gameData.creationPointsPerClickCost*= 2.2
        gameData.creationPointsPerClick= Math.round(gameData.creationPointsPerClick)
        gameData.creationPointsPerClickCost= Math.round(gameData.creationPointsPerClickCost)
        gameData.normalCreationAmount+= 1
    }
}
function createCreationPoint() {
    gameData.creationPoints += gameData.creationPointsPerClick
}
function rebirth() {
    if(gameData.creationPoints>=10000){
    gameData.creationPoints=0
    gameData.creationPointsPerClick=1
    gameData.creationPointsPerClickCost=10
    gameData.normalCreationAmount=0
    gameData.rebirthPoints+=1
    gameData.rebirthAmount+=1
    }
}
function buyRebirthCreation() {
    if(gameData.rebirthPoints>=gameData.rebirthCreationCost){
        gameData.rebirthPoints-=gameData.rebirthCreationCost
        gameData.creationPointsPerClick*= 2
        gameData.rebirthCreationCost*= 2
        gameData.rebirthCreationAmount+= 1
        
    }
    
}
function createMatter() {
    if(gameData.creationPointsPerClick>=60){
        gameData.creationPointsPerClick-=60
        gameData.matter+=1
    }
}
function resetRebirthCreation() {
    if(gameData.matter>=5){
        gameData.matter-=5
        gameData.rebirthCreationCost=1
    }
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
        document.getElementById("rebirthCreationResetButton").style.display = "inline-block"
        document.getElementById("matterText").style.display = "inline-block"
    }
    document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points (Your current Creation Points per click:"+ gameData.creationPointsPerClick + ")"
    document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") (Cost: " + gameData.creationPointsPerClickCost + "Creation Points)"
    document.getElementById("rebirthText").innerHTML= gameData.rebirthPoints +" Rebirth Points"
    document.getElementById("matterText").innerHTML= gameData.matter+ " Matter"
    document.getElementById("rebirthCreationButton").innerHTML = "Create a Reborn Creation (You currently have " + gameData.rebirthCreationAmount+ ") (Cost: " + gameData.rebirthCreationCost + " Rebirth Points)"
}, 100)
var savegame = JSON.parse(localStorage.getItem("creationsSave"))
if (savegame !== null){
    if(savegame.update !== gameData.update){
        if (typeof savegame.update == "undefined") savegame.update = gameData.update;
        if (typeof savegame.rebirthCreationCost == "undefined") savegame.update = gameData.update;
    }
    gameData=savegame
}
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("creationsSave", JSON.stringify(gameData))
}, 15000)
function clearSave() {
    localStorage.removeItem("creationsSave")
}