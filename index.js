const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

main.addEventListener('click', (event) => {
  //alert('Weeeeee! I was clicked!')
})

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = 'yellow'
  console.log('You clicked the p!')
})