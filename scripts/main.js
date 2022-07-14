// let valueOfRange = document.getElementById('myRange').value
// let element = document.querySelector('#circle')
// let computedStyle = getComputedStyle(element)
// let backgroundStyledOfCircle = computedStyle.backgroundImage
// console.log(backgroundStyledOfCircle)

let inputValue = document.getElementById('myRange').value
let element = document.querySelector('#circle').style.background
let getBackgroundValue = document.getElementById('circle').style.background
console.log(document.getElementById('circle').style.background)

function getValue (){
    inputValue = document.getElementById('myRange').value
    document.getElementById('circle-text').innerHTML = inputValue
    getBackgroundValue = 'conic-gradient(rgb(146, 44, 138) 0deg, rgb(146, 44, 138) ' + inputValue + '%, rgb(39, 40, 43) ' + inputValue + '%, rgb(39, 40, 43) 100%);'
    document.getElementById('circle').style.background = getBackgroundValue
    console.log(document.getElementById('circle').style.background)
}

$('.slider').mousemove(function () {
    getValue()
})

