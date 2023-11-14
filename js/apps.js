document.querySelector("input").addEventListener('input', test);


function test(){
    let info = document.querySelector ("input")
    document.querySelector('button').innerText = info.value;
}
let unbtn = document.querySelector('#unbtn')
let inbtn = document.querySelector('#inbtn')
let input = document.querySelector('#put')

unbtn.addEventListener('click', function(){
    if (input.value > 1)
    input.value--;
});
inbtn.addEventListener('click', function(){
    if (input.value < 10)
    input.value++;
});

setInterval( function(){
  
        let red = Math.round(Math.random()*255);
        let blue = Math.round(Math.random()*255);
        let green = Math.round(Math.random()*255);
        
        console.log(red, blue, green);
    
        document.body.style.background = `rgb(${red},${green},${blue}`;
    
}, 500);