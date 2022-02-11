document.getElementById("matterButton").style.display = "none"
document.getElementById("rebirthCreationButton").style.display = "none"
document.getElementById("rebirthText").style.display = "none"
document.getElementById("rebirthCreationResetButton").style.display = "none"
document.getElementById("matterText").style.display = "none"
document.getElementById("ascensionText").style.display="none"
document.getElementById("ascensionTitle").style.display="none"
document.getElementById("rebirthTitle").style.display="none"
document.getElementById("ascendedCreationButton").style.display="none"
document.getElementById("energyCells").style.display="none"
document.getElementById("ascensionText").style.display="none"
document.getElementById("ascensionButton").style.display="none"
document.getElementById("createEnergyCellButton").style.display="none"
document.getElementById("creatorModuleUpgradeButton").style.display="none"
document.getElementById("creatorBoosterModuleUpgradeButton").style.display="none"
document.getElementById("normalCreationModuleUpgrade").style.display="none"
document.getElementById("machineTitle").style.display="none"
document.getElementById("resetMachineSetupButton").style.display="none"
document.getElementById("creationWarning").style.display="none"
document.getElementById("machineWarning").style.display="none"
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
    ascensionAmount: 0,
    ascensionPointAmount: 0,
    energyCellAmount: 0,
    creatorModuleAmount: 0,
    creatorBoosterModuleAmount: 0,
    normalCreationModuleAmount: 0,
    rebirthPointsPerRebirth: 1,
    ascensionCreationAmount: 0,
    ascensionCreationCost: 1,
    update: 2,
    //remember to do the update thingy everytime you add a new number
}
function buyCreationPointsPerClick(){
    if (gameData.creationPoints>= gameData.creationPointsPerClickCost){
        gameData.creationPoints-=gameData.creationPointsPerClickCost
        gameData.creationPointsPerClick*= 1.5
        gameData.creationPointsPerClickCost*= 1.8
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
    gameData.rebirthPoints+=gameData.rebirthPointsPerRebirth
    gameData.rebirthAmount+=1
    gameData.matterCreationCost=30
    gameData.matterCreationCostMultiplier=1.5
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
function ascend() {
    if(gameData.creationPoints>=150000) {
    gameData.creationPoints= 0
    gameData.creationPointsPerClick= 1
    gameData.creationPointsPerClickCost= 10
    gameData.normalCreationAmount= 0
    gameData.rebirthPoints= 0
    gameData.rebirthCreationAmount= 0
    gameData.rebirthCreationCost = 1
    gameData.ascensionAmount+=1
    gameData.ascensionPointAmount+=1
    }
}
function createAscendedCreation() {
    if(gameData.ascensionPointAmount>=gameData.ascensionCreationCost){
        gameData.ascensionPointAmount-=gameData.ascensionCreationCost
        gameData.rebirthPointsPerRebirth+=1
        gameData.ascensionCreationAmount+=1
        gameData.ascensionCreationCost*=1.5
        gameData.ascensionCreationCost= Math.round(gameData.ascensionCreationCost)
    }
}
function createEnergyCell() {
    if(gameData.matter>=50) {
        gameData.matter-=50
        gameData.energyCellAmount+=1
    }
}
function creatorModuleUpgrade() {
    if(gameData.energyCellAmount>=1){
        gameData.energyCellAmount-=1
        gameData.creatorModuleAmount+=1
    }
}
function creatorBoosterModuleUpgrade(){
    if(gameData.energyCellAmount>=1){
        gameData.energyCellAmount-=1
        gameData.creatorBoosterModuleAmount+=1
}}
function normalCreationModuleUpgrade(){
    if(gameData.energyCellAmount>=1){
        if(gameData.normalCreationModuleAmount<50){
    gameData.energyCellAmount-=1
    gameData.normalCreationModuleAmount+=1}
}}
function resetMachineLayout(){
    if(gameData.rebirthPoints>=1){
        gameData.energyCellAmount+= gameData.creatorModuleAmount
        gameData.energyCellAmount+= gameData.creatorBoosterModuleAmount
        gameData.energyCellAmount+= gameData.normalCreationModuleAmount
        gameData.creatorModuleAmount=0
        gameData.creatorBoosterModuleAmount=0
        gameData.normalCreationModuleAmount=0
    }
}
var mainGameLoop=window.setInterval(function() {
    if(gameData.ascensionAmount>=1){
        document.getElementById("ascensionText").style.display="inline-block"
document.getElementById("ascensionTitle").style.display="inline-block"
document.getElementById("rebirthTitle").style.display="inline-block"
document.getElementById("ascendedCreationButton").style.display="inline-block"
document.getElementById("energyCells").style.display="inline-block"
document.getElementById("ascensionText").style.display="inline-block"
document.getElementById("ascensionButton").style.display="inline-block"
document.getElementById("createEnergyCellButton").style.display="inline-block"
document.getElementById("creatorModuleUpgradeButton").style.display="inline-block"
document.getElementById("creatorBoosterModuleUpgradeButton").style.display="inline-block"
document.getElementById("normalCreationModuleUpgrade").style.display="inline-block"
document.getElementById("machineTitle").style.display="inline-block"
document.getElementById("resetMachineSetupButton").style.display="inline-block"
document.getElementById("machineWarning").style.display="inline-block"
    }
    if(gameData.rebirthAmount>=1){
        document.getElementById("ascensionButton").style.display="inline-block"
    }
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
        document.getElementById("rebirthTitle").style.display="inline-block"
        document.getElementById("creationWarning").style.display="inline-block"
    }
    document.getElementById("creationPointAmount").innerHTML = gameData.creationPoints + " Creation Points (Your current Creation Points per click: "+ gameData.creationPointsPerClick + ")"
    document.getElementById("perClickUpgrade").innerHTML="Create a Normal Creation (You currently have " + gameData.normalCreationAmount+ ") (Cost: " + gameData.creationPointsPerClickCost + " Creation Points)"
    document.getElementById("rebirthText").innerHTML= gameData.rebirthPoints +" Rebirth Points (Your current Rebirth Points per Rebirth: "+ gameData.rebirthPointsPerRebirth+ ")"
    document.getElementById("matterText").innerHTML= gameData.matter+ " Matter"
    document.getElementById("rebirthCreationButton").innerHTML = "Create a Reborn Creation (You currently have " + gameData.rebirthCreationAmount+ ") (Cost: " + gameData.rebirthCreationCost + " Rebirth Points)"
    document.getElementById("ascensionText").innerHTML = gameData.ascensionPointAmount + " Ascension Points"
    document.getElementById("energyCells").innerHTML = gameData.energyCellAmount + " Energy Cells"
    document.getElementById("ascendedCreationButton").innerHTML = "Create an Ascended Creation (You currently have " + gameData.ascensionCreationAmount+ ") (Cost: "+gameData.ascensionCreationCost+")"
    document.getElementById("creatorModuleUpgradeButton").innerHTML = "Automatic Creator Module (Energy Cell Amount: "+ gameData.creatorModuleAmount+ ")"
    document.getElementById("creatorBoosterModuleUpgradeButton").innerHTML = "Manual Creator Booster Module (Energy Cell Amount: "+ gameData.creatorBoosterModuleAmount+ ")"
    document.getElementById("normalCreationModuleUpgrade").innerHTML = "Normal Creation Creator Module (Energy Cell Amount: "+ gameData.normalCreationModuleAmount+ ")"
    if(gameData.matter<0){
        gameData.matter=0
    }
    if(gameData.creationPointsPerClickCost<0){
        gameData.creationPointsPerClickCost=0
    }
    if(gameData.matterCreationCostMultiplier<1.01) {
        gameData.matterCreationCostMultiplier=1.01
    }
}, 100)
var moduleLoop=window.setInterval(function() {
    if(gameData.matter>=1){
    if(gameData.normalCreationModuleAmount>=1) {
        if(gameData.creationPointsPerClickCost>=30000){
        gameData.creationPointsPerClickCost-=300*gameData.normalCreationModuleAmount
        gameData.matter-=gameData.normalCreationModuleAmount}
    }}
    if(gameData.creatorBoosterModuleAmount>=1) {
        gameData.creationPointsPerClick+=100*gameData.creatorBoosterModuleAmount
        gameData.matter-=gameData.creatorBoosterModuleAmount}
}, 15000)
var automaticCreatorLoop=window.setInterval(function(){
    if(gameData.creatorModuleAmount>=1){
        gameData.creationPoints+=gameData.creationPointsPerClick*gameData.creatorModuleAmount
}}, 5000)
var savegame = JSON.parse(localStorage.getItem("creationsSave"))
if (savegame !== null){
    if(savegame.update !== gameData.update){
        if (typeof savegame.update == "undefined") savegame.update = gameData.update;
        if (typeof savegame.rebirthCreationCost == "undefined") savegame.rebirthCreationCost = gameData.rebirthCreationCost;
        if (typeof savegame.ascensionAmount == "undefined") savegame.ascensionAmount = gameData.ascensionAmount;
        if (typeof savegame.ascensionCreationAmount == "undefined") savegame.ascensionCreationAmount = gameData.ascensionCreationAmount;
        if (typeof savegame.ascensionCreationCost == "undefined") savegame.ascensionCreationCost = gameData.ascensionCreationCost;
        if (typeof savegame.rebirthPointsPerRebirth == "undefined") savegame.rebirthPointsPerRebirth = gameData.rebirthPointsPerRebirth;
        if (typeof savegame.energyCellAmount == "undefined") savegame.energyCellAmount = gameData.energyCellAmount;
        if (typeof savegame.creatorModuleAmount == "undefined") savegame.creatorModuleAmount = gameData.creatorModuleAmount;
        if (typeof savegame.creatorBoosterModuleAmount == "undefined") savegame.creatorBoosterModuleAmount = gameData.creatorBoosterModuleAmount;
        if (typeof savegame.normalCreationModuleAmount == "undefined") savegame.normalCreationModuleAmount = gameData.normalCreationModuleAmount;
        if (typeof savegame.ascensionPointAmount == "undefined") savegame.ascensionPointAmount = gameData.ascensionPointAmount;
    }
    gameData=savegame
}
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("creationsSave", JSON.stringify(gameData))
}, 15000)
function clearSave() {
    localStorage.removeItem("creationsSave")
}
function fixCreationPointsPerClick(){
    gameData.creationPointsPerClick = 1
    gameData.creationPointsPerClickCost = 10
    gameData.normalCreationAmount = 0
}