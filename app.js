const elements = document.querySelectorAll(".container .elements"),
  container = document.querySelector(".elements");

elements.forEach(el => {
  ranTop = Math.round(Math.random() * 90 + 1) + "%";
  ranLeft = Math.round(Math.random() * 90 + 1) + "%";
  el.style.top = ranTop;
  el.style.left = ranLeft;
  elMove(el, rand(20));
});
function elMove(el, rm) {
  el.style.transition = "3s linear";
  let corI = rm,
    n = 1;
  setInterval(() => {
    if (n % 2 == 0) {
      if (n % 2 == 0) {
        el.style.transform = `translate(${rand(corI)}px, ${rand(corI)}px`;
        n++;
      } else {
        el.style.transform = `translate(${rand(corI)}px, ${-rand(corI)}px)`;
        n++;
      }
    } else {
      if (n % 2 == 0) {
        el.style.transform = `translate(${-rand(corI)}px, ${rand(corI)}px)`;
        n++;
      } else {
        el.style.transform = `translate(${-rand(corI)}px, ${-rand(corI)}px)`;
        n++;
      }
    }
  }, 3000);
}
function rand(n) {
  return Math.round(Math.random() * n + 1);
}

//text animation

const text = document.querySelector(".text .p");
let typeStts = "done";

function runType(allText) {
  let alL = allText.length,
    i = 0;
  setInterval(() => {
    if (typeStts == "done") {
      typeStts = "on";
      if (i < alL) {
        type(allText[i]);
        i++;
      } else {
        i = 0;
        typeStts = "done";
      }
    }
  }, 100);
}

function type(textType) {
  let tx = [...textType],
    txL = tx.length,
    delay = 2,
    n = 0,
    tt = [];
  setInterval(() => {
    if (n < txL) {
      tt.push(tx[n]);
      txx = tt.join("");
      text.innerHTML = txx;
    } else if (n == txL) {
      tt.push(`<span class="cur"> |</span>`);
      txx = tt.join("");
      text.innerHTML = txx;
    } else {
      setTimeout(() => {
        if (txL >= 0) {
          tt[txL] = "";
          txx = tt.join("");
          text.innerHTML = txx;
        } else if (txL == -1) {
          tt.push(`<span class="cur"> |</span>`);
          txx = tt.join("");
          text.innerHTML = txx;
        } else if (txL == -delay) {
          setTimeout(() => {
            typeStts = "done";
          }, delay * 1000);
        }
        txL--;
      }, delay * 1000);
    }
    n++;
  }, 150);
}

// Theme
const h1 = document.querySelector(".container .text h1"),
  h2 = document.querySelector(".container .text h2"),
  p = document.querySelector(".container .text .p");

window.setTimeout("waktu()", 0);
function waktu() {
  let waktus = new Date();
  setTimeout("waktu()", 1000);
  let jam = waktus.getHours();
  let menit = waktus.getMinutes();

  if (menit < 10 && jam < 10) {
    h1.innerHTML = "0" + jam + "." + "0" + menit;
  } else if (menit < 10) {
    h1.innerHTML = jam + "." + "0" + menit;
  } else if (jam < 10) {
    h1.innerHTML = "0" + jam + "." + menit;
  } else {
    h1.innerHTML = jam + "." + menit;
  }
  let kata;
  if (jam <= 10) {
    if (jam <= 2) {
      kata = [
        "Tidur woee tidurr",
        "Jangan begadang mulu zzz",
        "Inget jaga kesehatan mu"
      ];
    } else if (jam > 2 && jam <= 6) {
      kata = [
        "Masih terlalu pagi",
        "Nyaman ya suasana pagi",
        "Apalagi kalo sambil tidur"
      ];
    } else {
      kata = [
        "Selamat pagi Neng",
        "Ada kegiatan apa aja nih",
        "Semangat beraktivitas!"
      ];
    }
    h2.innerHTML = "Pagi Ayu";
  } else if (jam > 10 && jam <= 13) {
    if (jam <= 11) {
      kata = [
        "Udah dapet makan?",
        "Inget makan!",
        "Kalo bisa tidur siang"
      ];
    } else {
      kata = [
        "Udah makan kan ya",
        "Lagi sibuk kegiatan ya?",
        "Semangat kaka"
      ];
    }
    h2.innerHTML = "Siang Pirda";
  } else if (jam > 13 && jam <= 19) {
    if (jam <= 16) {
      kata = [
        "Wih udah sore nih",
        "Masih sibuk ya?",
        "Jangan lupa mandi..."
      ];
    } else {
      kata = [
        "Inget makannyaa",
        "Sama istirahat bentar",
        "Mandi juga jangan lupa"
      ];
    }
    h2.innerHTML = "Sore Ayu";
  } else {
    if (jam <= 20) {
      kata = [
        "Dah malem",
        "Lagi sibuk apa nih",
        "Jangan lupa istirahat"
      ];
    } else {
      kata = [
        "Pasti lagi banyak kerjaan yaa wkwkw",
        "Jangan begadang yahh",
        "Jangan lupa banyakin minum..."
      ];
    }
    h2.innerHTML = "Malem Pirda";
  }
  return kata;
}
runType(waktu());
