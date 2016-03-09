
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    
     turn: "X",
     player : [],
     jugadas: 0,
    
    Play: function(location, event){
        var evento= event.getCurrentTarget();
        var ubicacion= location.getLocation()
        var x= ubicacion.x;
        var y= ubicacion.y;
        var prox = "O";
        var winner=null;
        
        if(evento.turn=="O"){
            prox="X";
        }else{
            prox="O";
        }
        
        if(x >= 342 && x < 433 && y >= 323 && y < 426 && evento.player[0]==null){
            evento.getPos(385,376,evento.jugadas);
            evento.player[0]=evento.turn;
            evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 433 && x < 526 && y >= 323 && y < 426 && evento.player[1]==null){
            evento.getPos(481,376,evento.jugadas);
            evento.player[1]=evento.turn;
             evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 526 && x < 615 && y >= 323 && y < 426 && evento.player[2]==null){
            evento.getPos(580,376,evento.jugadas);
            evento.player[2]=evento.turn;
             evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 342 && x < 433 && y >= 221 && y < 323 && evento.player[3]==null){
            evento.getPos(385,266,evento.jugadas);
            evento.player[3]=evento.turn;
             evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 433 && x < 526 && y >= 221 && y < 323 && evento.player[4]==null){
            evento.getPos(481,266,evento.jugadas);
            evento.player[4]=evento.turn;
            evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 526 && x < 615 && y >= 221 && y < 323 && evento.player[5]==null){
            evento.getPos(580,266,evento.jugadas);
            evento.player[5]=evento.turn;
             evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 342 && x < 433 && y >= 116 && y < 221 && evento.player[6]==null){
            evento.getPos(385,168,evento.jugadas);
            evento.player[6]=evento.turn;
             evento.turn=prox;
            evento.jugadas++;
        }else if(x >= 433 && x < 526 && y >= 116 && y < 221 && evento.player[7]==null){
            evento.getPos(481,168,evento.jugadas);
            evento.player[7]=evento.turn;
            evento.turn=prox;
             evento.jugadas++;
        }else if(x >= 526 && x < 615 && y >= 116 && y < 221 && evento.player[8]==null){
            evento.getPos(580,168,evento.jugadas);
            evento.player[8]=evento.turn;
            evento.turn=prox;
            evento.jugadas++;
        }
        
        evento.victory(evento);
        
    },
    
   /* victory: function(evento){
        
        if(jugadas===9){
            alert("Ha sido empate");
        }
        if(jugadas===)
    }*/
        
    getPos: function(x, y, turn){
        if(turn%2===0){
            ficha= new cc.Sprite(res.X_png);
        }else{
             ficha= new cc.Sprite(res.O_png);                         
        }
        ficha.setPosition(x,y);
        this.addChild(ficha,1);
    },
    
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
     
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.Play
        }, this);
        

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


