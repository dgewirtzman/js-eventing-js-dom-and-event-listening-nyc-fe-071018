const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

main.addEventListener('click', (event) => {
  //alert('Weeeeee! I was clicked!')
})

paragraph.addEventListener('click', (event) => {
  console.log('You clicked the p!')
  paragraph.style.backgroundColor = 'yellow'
})