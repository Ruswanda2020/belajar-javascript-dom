//events hendler

// const p3 = document.querySelector(".p3");

// function ubahWarnaP3() {
//     p3.style.backgroundColor = "blue";
// }

// function ubahWarnaP2() {
//     p2.style.backgroundColor = "blue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const section = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teks = document.createTextNode("item baru");

//   liBaru.appendChild(teks);

//   section.appendChild(liBaru);
// });

const p3 = document.querySelector(".p3");

// p3.onclick =function(){
//     p3.style.backgroundColor = "lightblue";
// }

// p3.onclick =function(){
//     p3.style.fontSize = "50px";
// }


// p3.addEventListener("click",function(){
//     p3.style.backgroundColor = "lightblue";
// });

// p3.addEventListener("click",function(){
//    p3.style.fontSize = "50px";
// });


// p3.addEventListener("dblclick",function(){
//     p3.style.backgroundColor = "lightblue";
// });

// p3.addEventListener("dblclick",function(){
//    p3.style.fontSize = "50px";
// });

p3.addEventListener("mouseenter",function(){
    p3.style.backgroundColor = "lightblue";
});

p3.addEventListener("mouseleave",function(){
    p3.style.backgroundColor = "green";
});