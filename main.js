
document
.querySelector("#inject-html button")
.addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document
.querySelector("#double button")
.addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var numToDouble = parseInt(answerPTagWithValue.textContent)
  answerPTagWithValue.textContent = numToDouble * 2


})


document
.querySelector("#color-circle button")
.addEventListener('click',function(){
  // TASK #3
  var circleColor = document.querySelector('#circle-bw')
  var readCircleColor = window.getComputedStyle(circleColor)

  if (readCircleColor.backgroundColor === 'rgb(255, 255, 255)') {
    circleColor.style.backgroundColor= "rgb(0, 0, 0)"
    return
  }

  if (readCircleColor.backgroundColor==='rgb(0, 0, 0)') {
     circleColor.style.backgroundColor = "rgb(255, 255, 255)"
     return
  }
})

document
.querySelector("#blow-up button")
.addEventListener('click',function(){
  // TASK #4}
  var redCircleSelector = document.querySelector('.circle-red')
  var redCircleStyle = window.getComputedStyle(redCircleSelector)
  var blowUpWidth = parseInt(redCircleStyle.width)


  console.log(blowUpWidth)
  if (blowUpWidth < 320) {
    redCircleSelector.style.width = (blowUpWidth*2)+"px"
    redCircleSelector.style.height = (blowUpWidth*2)+"px"

  }
  else {
    redCircleSelector.style.width = "40px"
    redCircleSelector.style.height = "40px"

  }

})

document
.querySelector("#remove button")
.addEventListener('click',function(){
  // TASK #5
var inactiveUsers = [...document.querySelectorAll('.inactive')]

for (var i = 0; i < inactiveUsers.length; i++) {
  inactiveUsers[i].style.display = 'none'
}

})


document
.querySelector("#reverse-squares button")
.addEventListener('click',function(){
  // TASK #6
  var allTheSquaresEl = [...document.querySelectorAll('.answer-box .square')]
  var reverseSquares = allTheSquaresEl.reverse()

  var containerEl = document.querySelector("#reverse-squares .answer-box")
  containerEl.innerHTML = ''

  reverseSquares.forEach( function(colorEl){
    containerEl.appendChild(colorEl)
  })
  // console.log(typeof reverseSquares)

})

document
.querySelector("#pig-latin button")
.addEventListener('click',function(){
  // TASK #7
  var listContentEl = document.querySelectorAll('#tasks li')
  var listContentArr = [...listContentEl]

  for (var i = 0; i < listContentArr.length; i++) {

  var stringSplit = listContentArr[i].textContent.split("")
  var stringReverse = stringSplit.reverse()
  var stringRevNoCommas = stringReverse.join("")
  listContentArr[i].textContent = stringRevNoCommas
  }

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
