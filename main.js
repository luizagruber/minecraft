var canvas = new fabric.Canvas("myCanvas");
imagemBlocoWidth= 30;
imagemBlocoHeight= 30;
playerX= 10;
playerY= 10;
var playerObject="";
var blockImageObject="";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(img){
    playerObject=img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top:playerY, left:playerX
    });
    canvas.add(playerObject);
});
}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function(img){
        blockImageObject=img;
        blockImageObject.scaleToWidth(imagemBlocoWidth);
        blockImageObject.scaleToHeight(imagemBlocoHeight);
        blockImageObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(blockImageObject)
    })
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80'){
        console.log("p e shift pressionadas juntas");
        imagemBlocoWidth= imagemBlocoWidth+ 10;
        imagemBlocoHeight= imagemBlocoHeight +10;
        document.getElementById("larguraDoBloco").innerHTML=imagemBlocoWidth;
        document.getElementById("alturaDoBloco").innerHTML=imagemBlocoHeight;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("m e shift pressionadas juntas");
        imagemBlocoWidth= imagemBlocoWidth- 10;
        imagemBlocoHeight= imagemBlocoHeight -10;
        document.getElementById("larguraDoBloco").innerHTML=imagemBlocoWidth;
        document.getElementById("alturaDoBloco").innerHTML=imagemBlocoHeight;
    }
    if(keyPressed=='38'){
        up();
        console.log("cima");}
    if(keyPressed=='40'){
        down();
        console.log("baixo");
    }
    if(keyPressed=='37'){
        left();
        console.log("esquerda");
    }
    if(keyPressed=='39'){
        right();
        console.log("direita");
    }
    if(keyPressed=='87'){
        newImage('wall.jpg');
        console.log("w");
    }
    if(keyPressed=='71'){
        newImage('ground.png');
        console.log("g");
    }
    if(keyPressed=='76'){
        newImage('light_green.png');
        console.log("l");
    }
    if(keyPressed=='84'){
        newImage('trunk.jpg');
        console.log("t");
    }
    if(keyPressed=='82'){
        newImage('roof.jpg');
        console.log("r");
    }
    if(keyPressed=='89'){
        newImage('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed=='68'){
        newImage('dark_green.png');
        console.log("d");
    }
    if(keyPressed=='85'){
        newImage('unique.png');
        console.log("u");
    }
    if(keyPressed=='67'){
        newImage('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if( playerY>=0){
        playerY= playerY- imagemBlocoHeight;
        console.log("altura da imagem do bloco"+ imagemBlocoHeight);
        canvas.remove(playerObject);
        playerupdate();
    }
}
function down(){
    if( playerY<=500){
        playerY= playerY+ imagemBlocoHeight;
        console.log("altura da imagem do bloco"+ imagemBlocoHeight);
        canvas.remove(playerObject);
        playerupdate();
    }
}
function left(){
    if( playerX>0){
        playerX= playerX- imagemBlocoWidth;
        console.log("largura da imagem do bloco"+ imagemBlocoWidth);
        canvas.remove(playerObject);
        playerupdate();
    }
}
function right(){
    if( playerX<=850){
        playerX= playerX+ imagemBlocoWidth;
        console.log("altura da imagem do bloco"+ imagemBlocoWidth);
        canvas.remove(playerObject);
        playerupdate();
    }
}