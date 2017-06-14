/*
* Add a new Keyword input
* Input: click event
* Output: clone one element then add to keySector
*/
function addNewAKeyWord() {
  var keySector = document.getElementById("keySector")
  var countKey = keySector.childElementCount
  var currentKey = keySector.firstElementChild.cloneNode(true)
  currentKey.children[0].innerHTML ='Keyword ' + parseInt(countKey + 1)
  currentKey.children[1].children[0].value = ''
  keySector.appendChild(currentKey)
  // console.log(currentKey.children[1].children[0].value)
}

function removeAKeyWord() {
  var keySector = document.getElementById("keySector")
  var countKey = keySector.childElementCount
  var currentKey = keySector.lastElementChild
  if (countKey > 1) {
    keySector.removeChild(currentKey)
  }
}

function showContent(currentKey) {
  var parentNode = currentKey.parentNode.parentNode
  var inputTag = (parentNode.children[1].innerHTML === '<p></p>') ?
  parentNode.children[2].children[0] : parentNode.children[1].children[0]
  var type = inputTag.getAttribute("type")
  if (type === "password") {
    inputTag.setAttribute("type", "text")
  } else {
    inputTag.setAttribute("type", "password")
  }
  // console.log(inputTag)
}

function copyContent(currentNode) {
  var parentNode = currentNode.parentNode.parentNode.children[2].children[0]
  parentNode.setAttribute("type", "text")
  parentNode.select()
  document.execCommand('copy')
  parentNode.setAttribute("type", "password")
  parentNode.select()
  // console.log(parentNode)
}

function generatePassword() {
  var blockname = $("input[name='blockName']").val()
  var keyword = []
  $("input[name='keyword']").each(function() {
      keyword.push($(this).val())
  })

  $.post('passgen', {
    blockname: blockname,
    keyword: keyword
  }, (data, status) => {
    if(data.OK) {
      $("#encryptedPassword").val(data.OK.msg)
    } else {
      console.log(data.err.msg)
    }
  })
}

function letEncryptPassword(eve) {
  console.log(eve.keyCode)
  if (eve.keyCode === 13) {
    generatePassword()
  }
}

function submitNewBlock() {
  var blockname = $("input[name='newBlockName']").val()
  var hint = []
  $("input[name='hint']").each(function() {
      hint.push($(this).val())
  })

  $.post('blockchain', {
    blockname: blockname,
    hint: hint
  }, (data, status) => {
    if(data.OK) {
      console.log('OK')
    } else {
      console.log(data.err.msg)
    }
  })
}

function addOneHint(eve) {

}

function addANewHint() {
  var hintSector = document.getElementById("hintSector")
  var countKey = hintSector.childElementCount
  var currentKey = hintSector.firstElementChild.cloneNode(true)
  currentKey.children[0].innerHTML ='Hint ' + parseInt(countKey + 1 + ':')
  currentKey.children[1].children[0].value = ''
  hintSector.appendChild(currentKey)
}

function removeAHint() {
  var hintSector = document.getElementById("hintSector")
  var countKey = hintSector.childElementCount
  var currentKey = hintSector.lastElementChild
  if (countKey > 1) {
    hintSector.removeChild(currentKey)
  }
}
