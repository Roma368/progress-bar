// let valueOfRange = document.getElementById('myRange').value
// let element = document.querySelector('#circle')
// let computedStyle = getComputedStyle(element)
// let backgroundStyledOfCircle = computedStyle.backgroundImage
// console.log(backgroundStyledOfCircle)

let inputValue = document.getElementById('myRange').value
let element = document.querySelector('#circle').style.background
let backgroundValue = 'conic-gradient(#922c8a 0 ' + inputValue + '%, #27282b ' +inputValue + '% 100%);'
console.log(element)
console.log(backgroundValue)

function getValue (){
    inputValue = document.getElementById('myRange').value
    document.getElementById('circle-text').innerHTML = inputValue
    backgroundValue = 'conic-gradient(#922c8a 0 ' + inputValue + '%, #27282b ' +inputValue + '% 100%);'
    document.getElementById('circle').style.background = backgroundValue
    console.log(document.getElementById('circle').style.background)
}

$('.slider').mousemove(function () {
    getValue()
})

