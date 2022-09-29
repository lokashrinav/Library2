let pop = document.querySelector('.popup');
let flip = document.querySelector(".flip");
let currentDiv = document.getElementById("div1");

const handleClick = () => {
  alert('was clicked');
}

let Library = [];
let classes = ["title10", "name10", "pages10"]

let thunder = 0;

let i = 0;

let q = 0;

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

document.getElementsByClassName('enter')[0]
        .addEventListener('click', function (event) {
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
          alert(Library[i])
          i++;
          q=0;
          for(let b = 0; b < i; b++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("card");
            if(putty = "Read"){
              if(classes[3] == "wrong10" || classes[3] == "wrong11"){
                classes[3] = "wrong11";
              }
              else{
                classes[3] = "wrong11";
              }
            }
            else {
              if(classes[3] == "wrong10" || classes[3] == "wrong11"){
                classes.splice(3,0,"wrong10");
              }
              else{
                classes.splice(3,0,"wrong10");
              }
            }
            alert()
            flip.appendChild(newDiv);
            for(let c = 0; c < 4; c++){
              let newDiv1 = document.createElement("div");
              newDiv1.classList.add(classes[c]);
              newDiv.appendChild(newDiv1);
              newDiv1.innerHTML = Library[b][c]
            }
            let newDiv5 = document.createElement("img");
            newDiv5.classList.add("imge");
            newDiv5.addEventListener('click', (function(){
            return function(){
                  v=0;
                  let p = 0;
                  let first = document.getElementsByClassName("card")[p];
                  first.remove();
                  let flip = document.getElementsByClassName('flip');
                  var c = flip[0].childElementCount;
                  while(v<c) {
                    first = document.getElementsByClassName("card")[v];
                    let second = first.lastChild;
                    //second.setAttribute('onclick',`handleDelete${v}()`)
                    v++;
                  }
                  thunder--
              }})(),false)
            //newDiv5.setAttribute('onclick',`handleDelete${q}(); hii();`)
            newDiv5.classList.add(`${e}`);
            e++;
            newDiv5.src = "close-box-outline.png";
            newDiv.appendChild(newDiv5);
            newDiv.value = thunder;
            q++;

          }
          thunder++;
        });

lib = []

let ze = 0;

let v;

let obj = {};
//obtain from its second class every iteration
function hii(){
  for(let ze = 0; ze < thunder; ze++) {
    obj['handleDelete' + ze](); {      
      v=0;
      let first = document.getElementsByClassName("card")[ze];
      first.remove();
      let flip = document.getElementsByClassName('flip');
      var c = flip[0].childElementCount;
      while(v<c) {
        first = document.getElementsByClassName("card")[v];
        let second = first.lastChild;
        second.setAttribute('onclick',`handleDelete${v}()`)
        v++;
      }
      thunder--;
    }
  }
  };

function function0(){
  alert('sweet!')
}

function handleDelete(){
      p=0;
      v=0;
      let first = document.getElementsByClassName("card")[p];
      first.remove();
      let flip = document.getElementsByClassName('flip');
      var c = flip[0].childElementCount;
      while(v<c) {
        first = document.getElementsByClassName("card")[v];
        let second = first.lastChild;
        second.setAttribute('onclick',`handleDelete${v}()`)
        v++;
      }
      thunder--;
    }


function Book(){

}

function addBookToLibrary() {

}