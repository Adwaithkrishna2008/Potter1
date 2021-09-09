class Game{

    constructor(){}
    
    
    getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data)
    {
        gameState=data.val()
    })
    }
    
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    
    
    async start(){
        
        
    if(gameState===0){
        player= new Player()
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount=playerCountref.val();
            player.getCount();
        }
      form= new Form()
        form.display()}
    
        voldermort=createSprite(1100, 300, 50, 50);
        voldermort.addImage(voldermort_img);
        voldermort.scale=0.30;
      
        potter=createSprite(160, 300, 50, 50);
        potter.addImage(potter_img);
        potter.scale=0.85;
        }
    
    play(){
        form.hide()
        Player.getPlayerInfo()
    }
    
    
    
    end(){
        console.log("End");
    }}