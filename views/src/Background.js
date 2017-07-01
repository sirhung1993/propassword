var AllBlock;

function CreateCollunm(XLeft)
{
    var InitialText = '<div style="color:#80EE80; opacity:0.4;text-shadow:1px 1px 8px #30EE30,-1px -1px 8px #30EE30;font-family: \'Courier\';z-index:__ZINDEX__;font-size:__SIZE__px;line-height: 100%;top:0px;left:__LEFT__px;position:fixed">__TEXT__</div>';
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
        InsideText += IncludeText.charAt(Math.floor(Math.random()*IncludeText.length)) + "<br>";
    } 
    DivText = DivText.replace("__TEXT__",InsideText )
    $("#BackGround").prepend(DivText);
    return Xsize + Left
}



function ShowDeleteButton()
{
    
}

function showContent(element)
{
    var Parent = element.parentNode.parentNode;
    var textbox = Parent.children[0];
    
    if(textbox.getAttribute("type") === "password")
    {
        textbox.setAttribute("type","text")  
        element.setAttribute("src", "images/showcontent_red.png") 
    }
    else
    {
        element.setAttribute("src", "images/showcontent.png")
        textbox.setAttribute("type","password")
    }
    
}

// $( window ).resize(function() {
    
//     $("#BackGround").empty()
//     var i = 0 ;
//     var Xleft = -1;
//     var MaxWidth = $(window).width()
//     while( Xleft < MaxWidth + 5){
//         Xleft = CreateCollunm(Xleft);
//     }
    
//     var BlockWidth = $("#BlockContain").width();
//     var AddButtonWidth = $("#AddButton").width();
//     var BlockRealWidth = BlockWidth - 2*AddButtonWidth
//     $("#BlockName").width(BlockRealWidth + "px")
//     var BackGround = document.getElementById("BackGround").childNodes
//     BackGround[0].innerHTML.split("<br>").length
//     var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
//     var NumOfCol;
// });
function IsVisible(div)
{
    var Arr =[];
    for (var i =0; i < div.length; i++)
    {

        if(div[i].style.display === "")
        {
            Arr.push(div[i]);
        }
    }
    return Arr;
}

function filterFunction(event) {
    
    var x = event.which || event.keyCode;
    var input, filter, ul, li, a, i;
    input = document.getElementById("BlockName");
    filter = input.value.toUpperCase();
    div = document.getElementById("BlockFilter");
    a = div.getElementsByTagName("div")
    var VisiableDiv = IsVisible(a);
    var hightlight;
    if (x === 40 )
    {        
        if (VisiableDiv.length > 0)
        {
            hightlight = VisiableDiv[0];
            
            VisiableDiv[VisiableDiv.length - 1].style.color = "white";
            VisiableDiv[VisiableDiv.length - 1].style.background = "black";
            for(i=0; i<VisiableDiv.length - 1; i++)
            {
                if (VisiableDiv[i].style.background.indexOf("white") > -1 )
                {
                    hightlight = VisiableDiv[i + 1];
                    VisiableDiv[i].style.color = "white";
                    VisiableDiv[i].style.background = "black";
                }
            }
            hightlight.style.background = "white";        
            hightlight.style.color = "black";            
        }
    }
    else if (x === 38)
    {
        if (VisiableDiv.length > 0)
        {
            hightlight = VisiableDiv[VisiableDiv.length - 1];
            
            VisiableDiv[0].style.color = "white";
            VisiableDiv[0].style.background = "black";
            for(i=VisiableDiv.length - 1; i > 0; i--)
            {
                if (VisiableDiv[i].style.background.indexOf("white") > -1 )
                {
                    hightlight = VisiableDiv[i - 1];
                    VisiableDiv[i].style.color = "white";
                    VisiableDiv[i].style.background = "black";
                }
            }
            hightlight.style.background = "white";        
            hightlight.style.color = "black";            
        }
    }
    else if (x === 13)
    {
        if (VisiableDiv.length > 0)
        {          
            for(i = 0; i < VisiableDiv.length; i++)
            {
                if (VisiableDiv[i].style.background.indexOf("white") > -1 )
                {
                    hightlight = VisiableDiv[i];
                    
                    VisiableDiv[i].style.color = "white";
                    VisiableDiv[i].style.background = "black";   
                }
            }
            
            selectABlockname(hightlight);
        }
    }
    else
    {
        
        for (i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
            a[i].style.color = "white";
            a[i].style.background = "black"; 
        }  
        VisiableDiv = IsVisible(a);

        if (VisiableDiv.length > 0)
        {
            $("#BlockFilter").show()
            VisiableDiv[0].style.background = "white";
            VisiableDiv[0].style.color = "black"; 
        }      
        if ($("#BlockFilter").height() > 300){
            $("#BlockFilter").height("300px")
        }
        else{
            $("#BlockFilter").height("")
            
            if ($("#BlockFilter").height() > 300){
                $("#BlockFilter").height("300px")
            }
        }
    }
}

$(document).ready(function(){
    var i = 0 ;
    var Xleft = -1;
    var MaxWidth = $(window).width()
    
    if (navigator.userAgent.indexOf("Edge") >= 0 || navigator.userAgent.length === NaN )
    {
        $(".btnShowHidePassword").css("display", "none")
        $("[name='keyword']").css("padding-right","0")
    }
    // $("btnShowHidePassword").Edge
    while( Xleft < MaxWidth + 5){
        Xleft = CreateCollunm(Xleft);
        // i++
    }
   
    // var BackGround = document.getElementById("BackGround").childNodes
    // BackGround[0].innerHTML.split("<br>").length
    // var IncludeText = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM010101';
    // var NumOfCol;
    
//    $.get('https://ezkeytopass.herokuapp.com/blockchain/getAllBlockNames', function(data, status) {
       
//         if(data.OK) {
//             var allBlockNames = data.OK.msg
//             var blockFilter = document.getElementById('BlockFilter')
//             var firstBlockName = blockFilter.firstElementChild
//             for (var i in allBlockNames) {
//                 var clone = firstBlockName.cloneNode(false)
//                 clone.innerHTML = allBlockNames[i]
//                 blockFilter.appendChild(clone)
//             }
//         } 
//         else {
//             console.log('Cannot get data from servers! Please check your internet connection!')
//         }
//    })

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
    // }, 10);
}); 

function DeleteThisHint(element)
{
    var RemoveItem = element.parentNode.parentNode.parentNode.parentNode;
    var AllHintsBlock = document.getElementById("HintsBlock");
    if (AllHintsBlock.children.length > 1){
        AllHintsBlock.removeChild(RemoveItem)
    }
    UpdateHint()
}
function AddNewHintBlock()
{
    var AllHintsBlock = document.getElementById("HintsBlock");
    
    var Item = AllHintsBlock.childNodes[1];
    //var InputText = Item.childNodes[3].childNodes[3].childNodes[1].value = ""
    var CloneItem = Item.cloneNode(true)
    CloneItem.children[2].children[1].children[0].value = ""
    AllHintsBlock.appendChild(CloneItem);
    UpdateHint()
}
function UpdateHint()
{
    $.getJSON("layout/language.json", function(dataresult){
        var lang = "vi";
        if ($("#lang").text() === "English")
        {
            lang = "en";
        }
        var Hint = dataresult[lang].Hint;
        var AllHintsBlock = document.getElementById("HintsBlock");

        for (var i = 0; i < AllHintsBlock.children.length; i++)
        {
            var HintBlock = AllHintsBlock.children[i];
            HintBlock.children[1].children[1].innerHTML = "<span langkey=\"Hint\">" + Hint + "</span>"+" &#35;" + (i+1) + ":";
        }
    })
}
function BackToHome()
{
    $("#NewBlock").hide( function(){
        
        // $.get('https://ezkeytopass.herokuapp.com/blockchain/getAllBlockNames', function(data, status) {
        //     if(data.OK) {
        //         var allBlockNames = data.OK.msg
                
        //         var blockFilter = document.getElementById('BlockFilter')
        //         var firstBlockName = blockFilter.firstElementChild
            
        //         var l = blockFilter.children.length
        //         for (var i = 1; i < l; i++)
        //         {
        //             blockFilter.removeChild(blockFilter.children[1])
        //         }
        //         for (var i in allBlockNames) {
        //             var clone = firstBlockName.cloneNode(false)
        //             clone.innerHTML = allBlockNames[i]
        //             blockFilter.appendChild(clone)
        //         }
        //         $("#MainBlock").show()
        //     } 
        //     else {
        //         $("#MainBlock").show()
        //         console.log('Cannot get data from servers! Please check your internet connection!')
        //     }

        // })
        $("#MainBlock").show();
    })
}
function AddNewBlockOpen()
{
    $("#MainBlock").hide( function(){
        $("#NewBlock").show()
    })
}

function selectABlockname(element)
{
    document.getElementById("BlockName").value = element.innerHTML;
    $('#BlockFilter').toggle();
    var choosenBlock = element.innerHTML
    $.post('https://ezkeytopass.herokuapp.com/blockchain/getHintsOfABlock', 
        {
            blockname: choosenBlock
        }, 
        function(data, status)
        {
            
        
        if(data.OK) {
            var hints = data.OK.msg
            var keySector = document.getElementById('keySector')                
            
            
            var firstHintDiv = keySector.firstElementChild
            //firstHintDiv.style.display = ""
            var len = keySector.children.length
            for (var i = 1; i < len; i++)
            {
                keySector.removeChild(keySector.lastChild);
            }
            if (hints.length > 0)
            {

                for(var i = 1; i < hints.length; i++) {
                    var clone = firstHintDiv.cloneNode(true)
                    var Hint = clone.children[0].children[1]
                    Hint.innerHTML = hints[i];
                    var Input = clone.children[1].children[1].children[0];
                    Input.value = "";
                    keySector.appendChild(clone)
                }
                firstHintDiv.children[0].children[1].innerHTML = hints[0]
                //firstHintDiv.style.display = "none"
            }
            else
            {
                $.getJSON("layout/language.json", function(dataresult){
                    var lang = "vi";
                    if ($("#lang").text() === "English")
                    {
                        lang = "en";
                    }
                    var KEYWORD = dataresult[lang].keyword;
                    firstHintDiv = keySector.firstElementChild
                    firstHintDiv.children[1].children[1].innerHTML = "<span langkey=\"keyword\">"+KEYWORD + ":</span>"
                })
            }  
            if (document.getElementById("BlockName").value == "defaultblock")
            {
                $("#AddKeyword").show("fast")
            }
            else
            {
                $("#AddKeyword").hide("fast")
            }
        } 
        else
        {
            console.log('Cannot get data from servers! Please check your internet connection!')
        }
    })

}

function AddnewKeyword()
{
    var keySector = document.getElementById('keySector')
    var firstHintDiv = keySector.firstElementChild
    var clone = firstHintDiv.cloneNode(true)     
    clone.children[1].children[1].children[0].value = ""
    keySector.appendChild(clone)
    UpdateKeyword()
}
function RemoveLastKeyword()
{
    var keySector = document.getElementById('keySector')
    if (keySector.children.length > 0)
    {
        keySector.removeChild(keySector.lastChild);       
    }
    if (document.getElementById('keySector').children.length > 1)
    {
        UpdateKeyword()
    }
    else
    {
        $.getJSON("layout/language.json", function(dataresult){
            var lang = "vi";
            if ($("#lang").text() === "English")
            {
                lang = "en";
            }
            var KEYWORD = dataresult[lang].keyword;
            keySector.children[1].children[0].children[1].innerHTML = "<span langkey=\"keyword\">"+ KEYWORD + "</span>:"
        })
    }
}
function ReForcusthis(element)
{
    
    div = document.getElementById("BlockFilter");
    a = div.getElementsByTagName("div")
    for (var i = 0; i < a.length; i++)
    {
        a[i].style.background = "black";
        a[i].style.color = "white"; 
    }  
    element.style.background = "white";
    element.style.color = "black"; 
}

function generatePassword() {
    var blockname = $("input[name='blockName']").val()
    
    var keyword = []
    $("input[name='keyword']").each(function() {
        keyword.push($(this).val());
    })
    $.post('https://ezkeytopass.herokuapp.com/passgen', {
        blockname: blockname,
        keyword: keyword
    }, function(data, status) {
        if(data.OK) {
            var z = data.OK.msg;
            $("#hiddenpassbox").text(z);
            slicePassword()

        } else {
        console.log(data.err.msg)
        }
    })
}
function slicePassword()
{
    
    if ($("#quantity").val() < 6 || $("#quantity").val() > 32)
    {
        $("#InvalidNoOfChar").show( function(){
            // setTimeout(function(){
            //      $("#InvalidNoOfChar").hide()
            // },5000 )
        })
        
    }
    else{
        $("#InvalidNoOfChar").hide()
        var z = $("#hiddenpassbox").text()
        $("#encryptedPassword").val(z.slice(0,$("#quantity").val()))
        $("#ContentCopy").show();
    }
}

function UpdateKeyword()
{
    $.getJSON("layout/language.json", function(dataresult){
        var lang = "vi";
        if ($("#lang").text() === "English")
        {
            lang = "en";
        }
        var KEYWORD = dataresult[lang].keyword;
       
        var keySector = document.getElementById('keySector').children
        for (var i = 0; i < keySector.length; i++)
        {
            var Z = "<span langkey=\"keyword\">" + KEYWORD + "</span> &#35;" + (i+1) + ":";
            keySector[i].children[1].children[1].innerHTML = Z;
        }
    })
    
}

function SubmitBlockName()
{
    var blockname = $("input[name='newBlockName']").val()
    var hint = []
    $("input[name='hint']").each(function() {
        hint.push($(this).val())
    })
    $("#modal").show()
    $.post('https://ezkeytopass.herokuapp.com/blockchain', {
        blockname: blockname,
        hint: hint
    }, function (data, status) {
        

        if(data.OK) {
            $("#waiting").hide("fast", function (){
                $("#AddNewlogInfo").slideDown( function(){
                    setTimeout(function() {
                        $("#AddNewlogInfo").hide("fast");
                        $("#waiting").show("fast");
                        $("#modal").hide( function(){
                            BackToHome();
                        })
                        
                    }, 3000);
                })
            })
        } else {
        console.log(data.err.msg)
    }
        $("#modal").hide()
    })

}

function CopyKeyDown()
{
    $("#ContentCopy").css("color", "red");
    $("#encryptedPassword").select();
    document.execCommand("copy")
}

function CopyKeyUp()
{
    $("#ContentCopy").css("color", "white");
    $("#ContentCopy").hide();
}


function OpenBlocFillter(event)
{
    $('#BlockFilter').toggle()
    $('#BlockFilter').toggle()
   // event.stopPropagation(); 
}

$(document).click(function(event) { 
    if(!$(event.target).closest('#BlockFilter').length) {
        if($('#BlockFilter').is(":visible")) {
            $('#BlockFilter').hide();
        }
    }        
})

function ChangeLanguage()
{
    var lang = "en";
    if ($("#lang").text() === "English")
    {
        lang = "vi";
    }
    $.getJSON("layout/language.json", function(dataresult){
         var LangHash = dataresult[lang];
         console.log(LangHash);
         for (var key in LangHash)
         {
            if (key.indexOf("val-") === 0)
            {
                $("[langkey='" + key+ "']").val( LangHash[key]);
            }
            else if(key.indexOf("holder-") === 0)
            {
                $("[langkey='" + key+ "']").attr("placeholder",LangHash[key]);
            }            
            else{
                $("[langkey='" + key+ "']").text( LangHash[key]);
            }
         }
    })
}
