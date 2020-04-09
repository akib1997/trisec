
// Nav Button Open & Close
let navBtn = document.getElementById('nav-btn')
let navItems = document.getElementById('nav').getElementsByTagName("a");

navBtn.addEventListener('click', () => {
   navBtn.classList.toggle('rotate')


   for (var i = 0; i < navItems.length; i++) {
      navItems[i].style.display = navBtn.classList.contains('rotate') ? "block" : "none"
   }
})


// Hello Button Open Modal & Close

let hello = document.getElementById('hello')
let question = document.getElementById('question')
let closeQuestion = document.getElementById('closeQuestion')


let proposel = document.getElementById('proposel')
let planner = document.getElementById('planner')
let closePlanner = document.getElementById('closePlanner')

hello.addEventListener('click', () => {
   question.style.display = 'block'
})

closeQuestion.addEventListener('click', () => {
   question.style.display = 'none'
})

proposel.addEventListener('click', () => {
   planner.style.display = 'block'
})

closePlanner.addEventListener('click', () => {
   planner.style.display = 'none'
})

// Call Carousel

$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   })
});


// Tab 

let overView, team, overviewBtn, teamBtn

overView = document.getElementById('overviwe')
team = document.getElementById('team')

overviewBtn = document.getElementById('overviewBtn')
teamBtn = document.getElementById('teamBtn')

teamBtn.addEventListener('click', () => {
   teamBtn.classList.add("active")
   overviewBtn.classList.remove('active')
   team.style.display = 'block'
   overView.style.display = 'none'
})

overviewBtn.addEventListener('click', () => {
   teamBtn.classList.remove("active")
   overviewBtn.classList.add('active')
   team.style.display = 'none'
   overView.style.display = 'block'
})


