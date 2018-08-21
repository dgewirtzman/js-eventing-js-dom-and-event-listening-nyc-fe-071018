const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

let allTheDivs = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
  this.style.backgroundColor = 'cyan'
}

for (div of allTheDivs) {
  div.addEventListener('click', bubble, true)
}


main.addEventListener('click', (event) => {
  console.log(event)
  alert('Weeeeee! I was clicked!')
})

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = 'yellow'
  console.log('You clicked the p!')
})
