// local reviews data, we consider having such a data like this
// usually getting this data via API
const reviews = [
     {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
          text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
     },
     {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
          text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
     },
     {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
          text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
     },
     {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
          text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
     },
];

// access elements
let author = document.querySelector('#author');
let job = document.querySelector('#job');
let info = document.querySelector('#info');
let img = document.querySelector('#person-img');

const nextArrow = document.querySelector('.next-btn');
const prevArrow = document.querySelector('.prev-btn');
const randomArrow = document.querySelector('.random-btn');

// set starting item
let currentIndex = 0;

// load initial item when page loaded
window.addEventListener('DOMContentLoaded', function () {
     showReview(currentIndex);
});


function showReview(person) {
     const item = reviews[person];
     img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
}

// show next review (person)
nextArrow.addEventListener('click', function () {

     currentIndex++;
     currentIndex > reviews.length - 1 ? currentIndex = 0 : currentIndex;
     showReview(currentIndex);
});

// show previous reveiw (person)
prevArrow.addEventListener('click', function () {

     currentIndex--;
     currentIndex < 0 ? currentIndex = reviews.length - 1 : currentIndex;
     showReview(currentIndex);
});

// show random reveiw
randomArrow.addEventListener('click', function () {

     currentIndex = Math.floor(Math.random() * reviews.length);
     showReview(currentIndex);
});