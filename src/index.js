import './less/index.less'

// Your code goes here!
// 10 things it should do:
/**
 * 7.rightclick to view menu
 *  
 * 10. double click for random coordaintes 
 * 1.resize over the bus and make the bus picture bigger (currently a mouse down message in console)
 * 5.unload pop up message are you sure you want to leave message(written maybe working needs a message to escape from to test)
 * 3.escape key to close the pop up message
 * 2.sign me up to open a pop up message
 * 9.mouse out of section adds it back
 * 8.hover to show name
 * 6.message in console on click
 * 4.onload randomly choose the background color
 */

 const head = document.querySelector('header')
document.addEventListener('keydown', (evt) => {
    console.log(evt.key)

    if (evt.key === "F9"){
    console.log('you have selected F9')
    }
})


function ran (number) {
    return Math.floor(Math.random() * (number+1));
  }
addEventListener('load', (body) => {
    const rndCol = `rgb(${ran(255)}, ${ran(255)}, ${ran(255)})`;
    document.body.style.backgroundColor = rndCol;
    console.log(body);
  }
)

addEventListener('beforeunload', (event) => { 
    modal.classList.toggle('off')
    event.preventDefault
});
// onbeforeunload = ('beforeunload') => { };
const modal = document.createElement('div')
modal.classList.add("off")
modal.classList.add("modal")
modal.style.width = "50 vw"
modal.style.position = "absolute"
modal.style.display = "none"
const modalPara = document.createElement('p')
modalPara.innerText = "Are you Sure"
console.log(modal)
modal.appendChild(modalPara)
// need to add the modal to the page so it tiggers on unload and make it hidden but it broke the page when I tried to add it to the body?
const yesButton = document.createElement('button')
const noButton = document.createElement('button')
yesButton.innerText = 'Yes'
noButton.innerText = 'No'
modal.appendChild(yesButton)
modal.appendChild(noButton)

head.append(modal)

modal.addEventListener('beforunload',(event) => {
    modal.style.display = 'block'
    event.preventDefault()
})

// sign up modal for sign up button at the bottom, need to add to other 2
const signUpModal = document.createElement('div')
const signUpBut = document.querySelector(".destination .btn")
signUpBut.append(signUpModal)
signUpModal.append(modal)
signUpBut.addEventListener('click', (evt) =>{
    modal.classList.remove('off')
    modal.style.display = 'block'
})

// escape key from modals
function escKey(event) {
    if(event.key === "Escape"){
        modal.classList.add("off");
        modal.style.display ="none"
    }
}
document.addEventListener("keydown", escKey);

// adding counter in console to counter at footer
const divCounter = document.createElement('div')
const counter = document.createElement('button')
counter.innerText = 'Add 1 to the Count'
divCounter.append(counter)
const foot = document.querySelector('footer')
foot.append(divCounter)

counter.addEventListener("click", function(evt){
    console.log('you have clicked')
})

// Name of boaty showing on hove over section
const destination = document.querySelector('.content-destination')
const pick = document.querySelector('.content-pick')
const content = document.querySelector('.inverse-content')
const comment = document.createElement('p')
destination.append(comment)
comment.innerText = "This is Boaty McBoat"
comment.style.display = 'none'
destination.addEventListener('mouseover', function(evt){
    comment.style.display = 'block'
})
pick.addEventListener('mouseover', function(evt){
    comment.style.display = 'none'
})
content.addEventListener('mouseover', function(evt){
    comment.style.display = 'none'
})
// Tired this and the toggle didn't work
// comment.innerText = "This is Boaty McBoat"
// comment.classList.add('hidden')
// hidden.style.display = 'none'
// destination.addEventListener('mouseover', function(evt){
//     comment.toggle('hidden')
// })

// mouse down on bus picture
const headPic = document.querySelector('.intro img')
console.log(headPic)
headPic.classList.add("newWidth")
headPic.addEventListener('mousedown', function(){
    console.log("the mousedown hase registered")
})


// Random location generator on doubleclick
const genLocat = document.querySelector(".text-content h2")
genLocat.addEventListener('dblclick', ()=>{
    console.log('youve clicked')
    const link = document.createElement('a')
    link.innerText = "click me"
    link.setAttribute('href', 'https://perchance.org/geographic-location')
    link.setAttribute('target', "_blank")
    genLocat.append(link)
})
