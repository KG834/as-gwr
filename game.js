class Game {
    constructor() {
        
    }
    start() {
       form.title.hide(); 
       var resetButton = createSprite(1000, 200, 50, 50);
       if(mousePressedOver(resetButton)){
        console.log("hi")
        database.ref("/").set({
           
            playerCount: 0,
            gameState: 0,
            players: {},
       });
       window.location.reload();
    }
        var C = createSprite(width/2-600, height/2, 100, 400);
        C.shapeColor = "grey";
  
       
        var D = createSprite(width/2-495, height/2, 100, 400);
        D.shapeColor = "grey";


      
        var E = createSprite(width/2-390, height/2, 100, 400);
        E.shapeColor = "grey";
      

        var F = createSprite(width/2-285, height/2, 100, 400);
        F.shapeColor = "grey";
        

        
        var G = createSprite(width/2-180, height/2, 100, 400);
        G.shapeColor = "grey";
     

        
        var A = createSprite(width/2-75, height/2, 100, 400);
        A.shapeColor = "grey";
       

        
        var B = createSprite(width/2+30, height/2, 100, 400);
        B.shapeColor = "grey";
   

        
        var Cs = createSprite(width/2-550, height/2-100, 50, 200);
        Cs.shapeColor = "black";
      

        var Ds = createSprite(width/2-445, height/2-100, 50, 200);
        Ds.shapeColor = "black";
       

        //var Es = createSprite(width/2-340, height/2-100, 50, 200);
       // Es.shapeColor = "black";
        var Fs = createSprite(width/2-235, height/2-100, 50, 200);
        Fs.shapeColor = "black";
       
        var Gs = createSprite(width/2-130, height/2-100, 50, 200);
        Gs.shapeColor = "black";
       

        var As = createSprite(width/2-25, height/2-100, 50, 200);
        As.shapeColor = "black";
       

        
    
var c = new Notes(100, 40, 20, 20, cKey);
var d = new Notes(150, 40, 20, 20, dKey);
var e = new Notes(200, 40, 20, 20, eKey);
var f = new Notes(250, 40, 20, 20, fKey);
var g = new Notes(300, 40, 20, 20, gKey);
var a = new Notes(350, 40, 20, 20, aKey);
var b = new Notes(400, 40, 20, 20, bKey);
var cs = new Notes(450, 40, 20, 20, csKey);
var ds = new Notes(500, 40, 20, 20, dsKey);
var fs = new Notes(550, 40, 20, 20, fsKey);
var gs = new Notes(600, 40, 20, 20, gsKey);
var as = new Notes(200, 40, 20, 20, asKey);
var r1 = Math.round(random(90, 100))
var r2 = Math.round(random(70, 100))
var r3 = Math.round(random(80, 150))
var r4 = Math.round(random(90, 120))
var r5 = Math.round(random(83, 110))
var r6 = Math.round(random(100, 130))
var r7 = Math.round(random(95, 125))
var r8 = Math.round(random(77, 109))
var r9 = Math.round(random(101, 111))
var r10 = Math.round(random(95, 120))
var r11 = Math.round(random(80, 170))
var r12 = Math.round(random(100, 130))





        if(frameCount%r1 ===0){
            cstate = true
        }
        if(frameCount%r2 === 0){
            dstate= true
        }
        if(frameCount%r3 === 0){
            estate= true
        }
        if(frameCount%r4 === 0){
            fstate= true
        }
        if(frameCount%r5 === 0){
            gstate= true
        }
        if(frameCount%r6 === 0){
            astate= true
        }
        if(frameCount%r7 === 0){
            bstate= true
        }
        if(frameCount%r8 === 0){
            csstate= true
        }
        if(frameCount%r9 === 0){
            dsstate= true
        }
        if(frameCount%r10 === 0){
            fsstate= true
        }
        if(frameCount%r11 === 0){
            gsstate= true
        }
        if(frameCount%r12 === 0){
            asstate= true
        }
        if(cstate === true){
            c.display();
        } 


        if(dstate === true){
            d.display();
        }
        if(estate === true){
            e.display();
        }
        if(fstate === true){
            f.display();
        }
        if(gstate === true){
            g.display();
        }
        if(astate === true){
            a.display();
        }
        if(bstate === true){
            b.display();
        }
       
        if(csstate === true){
            cs.display();
        }
        if(dsstate === true){
            ds.display();
        }
        if(fsstate === true){
            fs.display();
        }
        if(gsstate === true){
            gs.display();
        }
        if(asstate === true){
            as.display();
        }
        
        if(mousePressedOver(C)&& cstate){
            cstate = false;
            C.shapeColor = "green"; 
            player.score += 1;         
        }
        if(mousePressedOver(D)&& dstate){
            dstate = false;
            D.shapeColor = "green"; 
            player.score += 1;         
         
        }
        if(mousePressedOver(E)&& estate){
            estate = false;
            E.shapeColor = "green";          
            player.score += 1;         

        }
        if(mousePressedOver(F)&& fstate){
            fstate = false;
            F.shapeColor = "green";     
            player.score += 1;         
     
        }
        if(mousePressedOver(G)&& gstate){
            gstate = false;
            G.shapeColor = "green";  
            player.score += 1;         
        
        }
        if(mousePressedOver(A)&& astate){
            astate = false;
            A.shapeColor = "green"; 
            player.score += 1;         
         
        }
        if(mousePressedOver(B)&& bstate){
            bstate = false;
            B.shapeColor = "green";  
            player.score += 1;         
        
        }
        if(mousePressedOver(Cs)&& cstate){
            csstate = false;
            Cs.shapeColor = "green"; 
            player.score += 1;         
         
        }
        if(mousePressedOver(Ds)&& dsstate){
            dsstate = false;
            Ds.shapeColor = "green";     
            player.score += 1;         
     
        }
        if(mousePressedOver(Fs)&& fsstate){
            fsstate = false;
            Fs.shapeColor = "green";    
            player.score += 1;     


        }
        if(mousePressedOver(Gs)&& gsstate){
            gsstate = false;
            Gs.shapeColor = "green";   
                       player.score += 1;               
        }
        if(mousePressedOver(As)&& asstate){
            asstate = false;
            As.shapeColor = "green";   
            player.score += 1;         
       
        }
        player.updateScore(player.score);
        text("score: "+player.score, 650, 40)
    console.log(player.score)
    
    }
    getState() {
        database.ref("gameState").on("value", (data)=>{
            gamestate = data.val()
        })
    }
    updateState(state) {
        database.ref("/").update({
            gameState : state
        })
    }
    end() {

    }
}