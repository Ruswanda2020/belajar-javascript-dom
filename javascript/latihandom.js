//latihan dom

const btn = document.querySelector("button");
// const body = document.querySelector("body");

// btn.addEventListener("click", function() {
//     document.body.classList.toggle("biru-muda");
//  });

// btn.addEventListener("mouseenter", function() {
//    document.body.style.backgroundColor = "lightblue";
// });

// btn.addEventListener("mouseleave", function() {
//     document.body.style.backgroundColor = "white";
//  });

const btn2 = document.createElement("button");
btn2.textContent = "acak warna";
btn2.setAttribute("type", "button");

const newButton = document.body.appendChild(btn2);
btn.after(newButton);

 btn2,addEventListener("click",function(){

    const r= Math.round(Math.random()*25+3);
    const g= Math.round(Math.random()*125+5);
    const b= Math.round(Math.random()*140+6);

    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
 });

const smerah = document.querySelector("input[name=smerah]");
const shijau = document.querySelector("input[name=shijau]");
const sbiru = document.querySelector("input[name=sbiru]");

// smerah.addEventListener("input", function () {
//   const r = smerah.value;
//   const g = shijau.value;
//   const b = sbiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + " , " + g + " , " + b + ")";
// });

// shijau.addEventListener("input", function () {
//   const r = smerah.value;
//   const g = shijau.value;
//   const b = sbiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + " , " + g + " , " + b + ")";
// });

// sbiru.addEventListener("input", function () {
//   const r = smerah.value;
//   const g = shijau.value;
//   const b = sbiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + " , " + g + " , " + b + ")";
// });

// Function to handle color change
        function changeBackgroundColor() {
            const r = smerah.value;
            const g = shijau.value;
            const b = sbiru.value;
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }

        // Attach event listeners to each input element
        smerah.addEventListener("input", changeBackgroundColor);
        shijau.addEventListener("input", changeBackgroundColor);
        sbiru.addEventListener("input", changeBackgroundColor);


    document.body.addEventListener("mousemove",function(event){
        
        const xpos = Math.round((event.clientX/window.innerWidth)*255);

        const ypos = Math.round((event.clientY/window.innerHeight)*255);

        document.body.style.backgroundColor = `rgb(${xpos}, ${ypos}, 100)`;
        
        
    });