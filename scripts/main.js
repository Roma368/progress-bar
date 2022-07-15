

let inputValue = document.getElementById('myRange').value

function getValue (){
    inputValue = document.getElementById('myRange').value
    document.getElementById('circle-text').innerHTML = inputValue
    document.getElementById('circle').style.background = 'conic-gradient(#922c8a 0 '+inputValue+'%, #27282b '+inputValue+'% 100%)'
}

$('.slider').mousemove(function () {
    getValue()
})

