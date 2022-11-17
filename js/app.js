//! banner carousel scripts
$(".owl-one").owlCarousel({
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// ----------------
$(".owl-two").owlCarousel({
  loop: true,
  margin: 10,
  // padding:20,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 6,
    },
    1200: {
      items: 8,
    },
  },
});


//! MODAL SCRIPT
// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("markDiv")[0];

// When the 3 seconds after, open the modal
setTimeout(() => {
  modal.style.display = "block";
}, 3000);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const allDepart = document.querySelector('#all-depart')
const allDepartDiv = document.querySelector('#all-depart-div')
const fashionLi = document.querySelector('#fashion-li')

allDepart.addEventListener('click',()=>{
  allDepartDiv.style.display = "block";
})

window.onclick = function (event) {
  if (event.target == allDepartDiv) {
    allDepartDiv.style.display = "none";
  }
};

