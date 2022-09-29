let pop = document.querySelector('.popup');
let flip = document.querySelector(".flip");
let currentDiv = document.getElementById("div1");

let Library = [];

let libs = []

let classes = ["title10", "name10", "pages10"]

let thunder = 0;

let i = 0;

let q = 0;

let up = 0;

let size = "Read";

let weight = "Not Read";

function Read() {
  this.putty = size;
}

function NotRead() {
  this.putty = weight;
}

let e = 0;
let pk;

document.getElementsByClassName('center')[0]
        .addEventListener('click', function (event) {
          pop.classList.remove("popup");
          pop.classList.add("popup-open");
        });

function siv() {
          let bl = 0;
          let lb = 0;
          let first = document.getElementById("hi1").value;
          let second = document.getElementById("hi2").value;
          let third = document.getElementById("hi3").value;

          for(pk = 0; pk < i; pk++) {
            let r = document.querySelector(".card");
            r.remove()
          }
          pop.classList.remove("popup-open");
          pop.classList.add("popup");
          
          Library[i] = ["Book Name: " + first, "Author Name: " + second, "Number of Pages: " + third, putty]
          q=0;
          i++;
          for(let b = 0; b < i; b++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("card");
            if(putty = "Read"){
              if(classes[3] == "wrong10" || classes[3] == "wrong11"){
                classes[3] = "wrong10";
              }
              else{
                classes[3] = "wrong10";
              }
            }
            else {
              if(classes[3] == "wrong10" || classes[3] == "wrong11"){
                classes.splice(3,0,"wrong11");
              }
              else{
                classes.splice(3,0,"wrong11");
              }
            }
            flip.appendChild(newDiv);
            for(let c = 0; c < 4; c++){
              let newDiv1 = document.createElement("div");
              newDiv1.classList.add(classes[c]);
              newDiv.appendChild(newDiv1);
              newDiv1.innerHTML = Library[b][c]
              if(c==3){
                newDiv1.setAttribute('onclick',`reverse(${bl})`)
              }
            }
            let newDiv5 = document.createElement("img");
            newDiv5.classList.add("imge");
            newDiv5.setAttribute('onclick',`handleDelete(${bl});`)
            bl++;
            lb++;
            newDiv5.classList.add(`${e}`);
            e++;
            newDiv5.src = "close-box-outline.png";
            newDiv.appendChild(newDiv5);
            q++;

          }
          document.getElementById("hi1").value = "";
          document.getElementById("hi2").value = "";
          document.getElementById("hi3").value = "";
          document.getElementById("secret").checked = false;
          document.getElementById("secret1").checked = false;
        

        };

let v;
let opo;
let york;
let c;

function reverse(york){
  v = 0;
  let first = document.getElementsByClassName("card")[york];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
  bl = 0;
  lb = 0;
  let flip = document.getElementsByClassName('flip');
  c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete(${v});`)
    v++;
  }
}


function handleDelete(opo){
      v = 0;
      let first = document.getElementsByClassName("card")[opo];
      first.remove();
      i--;
      thunder--;
      let flip = document.getElementsByClassName('flip');
      c = flip[0].childElementCount;
      while(v<c) {
        first = document.getElementsByClassName("card")[v];
        let second = first.lastChild;
        second.setAttribute('onclick',`handleDelete(${v});`)
        second = first.lastChild.previousElementSibling;
        second.setAttribute('onclick',`reverse(${v});`)
        v++;
      }

    }


function Book(){

}

function addBookToLibrary() {

}