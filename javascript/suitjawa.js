function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.64) return "orang";
  return "semut";
}

function getHasilSuit(player, comp) {
  if (player === comp) return "Seri";
  if (player == "gajah") return comp == "orang" ? "Menang!" : "Kalah";
  if (player == "semut") return comp == "orang" ? "kalah" : "menang";
  if (player == "orang") return comp == "semut" ? "menang" : "kalah";
}

// const pGajah = document.querySelector(".gajah");

// pGajah.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasilSuit(pilihanPlayer, pilihanKomputer);

//   const imgkomputer = document.querySelector(".img-komputer");
//   imgkomputer.setAttribute("src", "../img/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");

// pOrang.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasilSuit(pilihanPlayer, pilihanKomputer);

//   const imgkomputer = document.querySelector(".img-komputer");
//   imgkomputer.setAttribute("src", "../img/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");

// pSemut.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasilSuit(pilihanPlayer, pilihanKomputer);

//   const imgkomputer = document.querySelector(".img-komputer");
//   imgkomputer.setAttribute("src", "../img/" + pilihanKomputer + ".png");
//   console.log("../img/ " + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// })

function putar() {
  const imgkomputer = document.querySelector(".img-komputer");

  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  const interval = setInterval(function () {
    imgkomputer.setAttribute("src", "../img/" + gambar[i++] + ".png");

    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval(interval);

      return;
    }

    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}


const pilihanPlayer = document.querySelectorAll("li img");

pilihanPlayer.forEach((pilihan) => {
  pilihan.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = this.className;
    const hasil = getHasilSuit(pilihanPlayer, pilihanKomputer);

    putar();

    setTimeout(function () {
      const imgkomputer = document.querySelector(".img-komputer");
      imgkomputer.setAttribute("src", "../img/" + pilihanKomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
