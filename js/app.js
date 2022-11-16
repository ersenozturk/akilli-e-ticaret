//! banner carousel scripts
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
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

// ------------
// $(document).ready(function () {
//     showPopup();
//   });

//   function showPopup() {
//     if (localStorage.getItem("YesBtn") !== 1) {
//       setTimeout(() => {
//         $("#exampleModal").modal("show");
//         $("#popup-yes").on("click", function () {
//           localStorage.setItem("YesBtn", 1);
//           $("#exampleModal").modal("hide");
//         });
//       }, 2000);
//     }
//   }