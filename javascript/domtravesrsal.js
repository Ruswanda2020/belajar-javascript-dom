// const card = document.querySelector(".card");

// const close = document.querySelector(".card");

// close.addEventListener("click",function(){
//     card.style.display="none";
// });

//dom traversal

// const close = document.querySelectorAll(".close");

// //const card = document.querySelectorAll(".card");

// // close.forEach(addEventListener("click",function(){
// //     card.style.display = "none";
// // }));

// // for (let i = 0; i < close.length; i++) {
// //   close[i].addEventListener("click", function (event) {
// //     // close[i].parentElement.style.display = "none";
// //     event.target.parentElement.style.display = "none";
// //   });
// // }

// close.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     // Ketika elemen dengan class "close" diklik, kita ingin menyembunyikan elemen parent-nya (class "card").
//     event.target.parentElement.style.display = "none";
//     event.preventDefault();
//     event.stopPropagation();
//   });
// });

// // const nama = document.querySelector(".nama");

// // console.log(nama.previousElementSibling);
// // console.log(nama.parentNode);

// const cards = document.querySelectorAll(".card");

// cards.forEach(function(card){
//   card.addEventListener("click",function(e){
//     alert("ok");
//   });
// });


const container = document.querySelector(".container");

container.addEventListener("click",function(e){
    if(e.target.className == "close"){
      e.target.parentElement.style.display = "none";
      e.preventDefault();
    }
});