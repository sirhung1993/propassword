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
    Initialize();
});

function Initialize(){
    var i = 0 ;
    var Xleft = -1;
    var MaxWidth = $(window).width();
    while( Xleft < MaxWidth + 5){
        Xleft = CreateCollunm(Xleft);
    }
    var BlockWidth = $("#BlockContain").width();
    var AddButtonWidth = $("#AddButton").width();
    var BlockRealWidth = BlockWidth - 2*AddButtonWidth
    $("#BlockName").width(BlockRealWidth + "px")
    $("#BlockFilter").width(BlockRealWidth + "px")
    var position = $("#BlockName").position()
    var Top = 2*$("#BlockName").height() + position.top;
    console.log(Top)

    
    //$("#BlockFilter").position().left($("#BlockName").position().left + "px")
    $("#BlockFilter").css('top', Top + 'px');
    var BackGround = document.getElementById("BackGround")
    var BackGround = document.getElementById("BackGround").childNodes
    BackGround[0].innerHTML.split("<br>").length
    var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    var NumOfCol;
}

$(document).ready(function(){
   Initialize();
    // $("#BlockName").focusout(function(){
    //     $("#BlockFilter").hide()
    // })
    $("#BlockName").focusin(function(){
        $("#BlockFilter").show()
    })
    if ($("#BlockFilter").height() > 300){
        $("#BlockFilter").height("300px")
    }
    else{
        $("#BlockFilter").height("")
    }
    // $.get('blockchain/getAllBlockNames', (data, status) => {
    // if(data.OK) {
    //   var allBlockNames = data.OK.msg

    //   var blockFilter = document.getElementById('blockFilter')
    //   var firstBlockName = blockFilter.firstElementChild
    //   for (var i in allBlockNames) {
    //     var clone = firstBlockName.cloneNode(false)
    //     clone.innerHTML = allBlockNames[i]
    //     blockFilter.appendChild(clone)
    //   }
    // } else {
    //   console.log('Cannot get data from servers! Please check your internet connection!')
    // }
})

function filterFunction(cb) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("BlockName");
    filter = input.value.toUpperCase();
    div = document.getElementById("BlockFilter");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
    
    if ($("#BlockFilter").height() > 300){
        $("#BlockFilter").height("300px")
    }
    else{
        $("#BlockFilter").height("")
    }
    if(typeof cb === "function") {
      cb()
    }
}

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
//}); 

function selectABlockname(currentElement) {
 // dropFunction()
    console.log(currentElement)
   // emptyASector('keySector')
    var choosenBlock = currentElement.innerHTML
    $("#BlockName").val(choosenBlock)
    $("#BlockFilter").hide();
//   $.post('blockchain/getHintsOfABlock', 
//   {
//     blockname: choosenBlock
//   }, (data, status) => {
//     if(data.OK) {
//       var hints = data.OK.msg
//       var keySector = document.getElementById('keySector')
//       var firstHintDiv = keySector.firstElementChild

//       var firstHint = firstHintDiv.firstElementChild
//       firstHint.innerHTML = 
//       (choosenBlock !== 'defaultblock') ? hints[0] : 'Keyword 1'
//       for(var i = 1; i < hints.length; i++) {
//         var clone = firstHintDiv.cloneNode(true)
//         clone.firstElementChild.innerHTML = (hints[i]) ? hints[i] : 'Keyword ' + (++i)
//         keySector.appendChild(clone)
//       }
//     } else {
//       console.log('Cannot get data from servers! Please check your internet connection!')
//     }
//   })
}