var gameData = {
    creationPoints: 0,
    creationPointsPerClick: 1,
    creationPointsPerClickCost: 10,
    normalCreationAmount: 1,
    update: 0
}
//remember to change the update variable and do the thing for save loading every update
function buyCreationPointsPerClick(){
    if (gameData.creationPoints>= gameData.creationPointsPerClickCost){
        gameData.creationPoints-=gameData.creationPointsPerClickCost
        gameData.creationPointsPerClick*= 1.5
        gameData.creationPointsPerClickCost*= 2.2
        gameData.creationPointsPerClick= Math.round(gameData.creationPointsPerClick)
        gameData.creationPointsPerClickCost= Math.round(gameData.creationPointsPerClickCost)
        gameData.normalCreationAmount+= 1
        document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points"
    document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") Cost: " + gameData.creationPointsPerClickCost + "Creation Points"
        
    }
}
function createCreationPoint() {
    gameData.creationPoints += gameData.creationPointsPerClick
    document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points"
    document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") Cost: " + gameData.creationPointsPerClickCost + "Creation Points"
    gameData.creationPoints= Math.round(gameData.creationPoints)
    gameData.creationPointsPerClick= Math.round(gameData.creationPointsPerClick)
    gameData.creationPointsPerClickCost= Math.round(gameData.creationPointsPerClickCost)
}
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