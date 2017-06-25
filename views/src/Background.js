var AllBlock;

function CreateCollunm(XLeft)
{
    var InitialText = '<div style="color:#80FF80; text-shadow:1px 1px 8px #30FF30,-1px -1px 8px #30FF30;font-family: \'Courier\';z-index:__ZINDEX__;font-size:__SIZE__px;line-height: 100%;top:0px;left:__LEFT__px;position:fixed">__TEXT__</div>';
    var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    var InsideText="";
    var Xsize = Math.floor(Math.random()*25) + 5;   
    var DivText = InitialText.replace("__SIZE__", Xsize); 
    var Zindex = -30 - Xsize;
    DivText = DivText.replace("__ZINDEX__", Zindex);
    Xsize*=2;
    var MaxHeight = $(window).height()
    var MaxWidth = $(window).width()
    var NumOfCol = MaxHeight/Xsize*2 > 50 ?  MaxHeight/Xsize*2: 50;
    
    var Left = XLeft;
    DivText = DivText.replace("__LEFT__", Left);
    for (i = 0 ; i < NumOfCol; i ++){
        InsideText += IncludeText.charAt(Math.floor(Math.random()*IncludeText.length)) + "</br>";
    } 
    DivText = DivText.replace("__TEXT__",InsideText )
    $("#BackGround").prepend(DivText);
    return Xsize + Left
}



function ShowDeleteButton()
{
    console.log("pressed");
}


$( window ).resize(function() {
    
    $("#BackGround").empty()
    var i = 0 ;
    var Xleft = -1;
    var MaxWidth = $(window).width()
    while( Xleft < MaxWidth + 5){
        Xleft = CreateCollunm(Xleft);
    }
    
    var BlockWidth = $("#BlockContain").width();
    var AddButtonWidth = $("#AddButton").width();
    var BlockRealWidth = BlockWidth - 2*AddButtonWidth
    $("#BlockName").width(BlockRealWidth + "px")
    var BackGround = document.getElementById("BackGround").childNodes
    BackGround[0].innerHTML.split("<br>").length
    var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    var NumOfCol;
});

$(document).ready(function(){
    var i = 0 ;
    var Xleft = -1;
    var MaxWidth = $(window).width()
    while( Xleft < MaxWidth + 5){
        Xleft = CreateCollunm(Xleft);
    }
    
    var BlockWidth = $("#BlockContain").width();
    var AddButtonWidth = $("#AddButton").width();
    var BlockRealWidth = BlockWidth - 2*AddButtonWidth
    $("#BlockName").width(BlockRealWidth + "px")
    var BackGround = document.getElementById("BackGround").childNodes
    BackGround[0].innerHTML.split("<br>").length
    var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    var NumOfCol;
    
    // window.setInterval(function() {
    //     for(i=0;i < BackGround.length - 1; i++)
    //     {
    //         var InsideText="";
    //         NumOfCol = BackGround[i].innerHTML.split("<br>").length
    //         for (j = 0 ; j < NumOfCol; j ++)
    //         {
    //             InsideText += IncludeText.charAt(Math.floor(Math.random()*IncludeText.length)) + "</br>";
    //         }
    //         NumOfCol = BackGround[i].innerHTML = InsideText
    //     }
    // }, 50);
}); 