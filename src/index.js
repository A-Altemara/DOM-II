import './less/index.less'

// Your code goes here!
// 10 things it should do:
/**
 * 1.resize over the bus and make the bus picture bigger
 * 2.sign me up to open a pop up message
 * 3.escape key to close the pop up message
 * 5.unload pop up message are you sure you want to leave message
 * 7.rightclick to view menu
 * 9.mouse out of section adds it back
 * 
 * 10. 
 * 8.hover to show instructions
 * 6.message in console on click
 * 4.onload randomly choose the background color
 */


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
// need to add the modal to the page and make it hidden but it broke the page when I tried to add it to the body?
const yesButton = document.createElement('button')
const noButton = document.createElement('button')
yesButton.innerText = 'Yes'
noButton.innerText = 'No'
modal.appendChild(yesButton)
modal.appendChild(noButton)
const head = document.querySelector('header')
head.append(modal)


function escKey(event) {
    if(event.key === "Escape"){
        modal.classList.add("off");
    }
}
document.addEventListener("keydown", escKey);

const divCounter = document.createElement('div')
const counter = document.createElement('button')
counter.innerText = 'Add 1 to the Count'
divCounter.append(counter)
const foot = document.querySelector('footer')
foot.append(divCounter)

counter.addEventListener("click", function(evt){
    console.log('you have clicked')
})

const destination = document.querySelector('.content-destination')
const comment = document.createElement('p')
destination.append(comment)
comment.innerText = "This is Boaty McBoat"
comment.style.display = 'none'
destination.addEventListener('mouseover', function(evt){
    comment.style.display = 'block'
})


// comment.innerText = "This is Boaty McBoat"
// comment.classList.add('hidden')
// hidden.style.display = 'none'
// destination.addEventListener('mouseover', function(evt){
//     comment.toggle('hidden')
// })