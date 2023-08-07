//dom selection 
//1.document.getElemntById() -> mengembalikan element

// const judul=document.getElementById("judul");

// judul.style.color="blue";
// judul.style.backgroundColor="grey";
// judul.innerHTML="Ruswanda";

// // 2.document.getElementByTagName() -> mengembalikan HTMLcolletion

// const p = document.getElementsByTagName("p");
// for(let i=0; i< p.length; i++){
//     p[i].style.backgroundColor="lightblue";
// }

// const h1= document.getElementsByTagName("h1");
// h1[0].style.fontSize="50px";

// //3.document.getElementByClassName() -> mengembalikan HTMLcolettion

// const p1=document.getElementsByClassName("p2")[0];

// p1.innerHTML="ini di ubah dengan javascript";

//4.document.querySelector() -> element

// const p4 =document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize="30px";

// const li2=document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor="blue";


//5.document.querySelectorAll()->nodeList

//const p=document.querySelectorAll("p");


//=======================================//
//manipulasi dom

// const judul =document.getElementById("judul");

// judul.innerHTML=" <em>Ruswanda</em>";

// const judul =document.getElementsByTagName("h1")[0];
// // judul.setAttribute("name","wanda");

// const a = document.querySelector("section#a a");
// a.getAttribute("href");
// a.removeAttribute("href");

const p2=document.querySelector(".p2");

 p2.classList.add("lebel");
 p2.classList.replace("lebel","name");
// p2.classList.item(0);
// p2.classList.contains("lebel");
// p2.classList.remove("lebel");
// p2.classList.toggle("lebel");
// p2.classList.toggle("lebel");

// const body = document.querySelector("body");
// body.classList.toggle("biru-muda");
// body.classList.toggle("biru-muda");







