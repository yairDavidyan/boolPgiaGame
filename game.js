let arrComputer = [];

while (arrComputer.length < 4) {
  var r = Math.floor(Math.random() * 8) + 1;
  if (arrComputer.indexOf(r) === -1) arrComputer.push(r);
}
console.log(arrComputer);

let num1, num2, num3, num4;
let bollH1 = document.getElementById("bool");
let kliaH1 = document.getElementById("klia");
let table = document.getElementById("table");
let winner = document.getElementById("winner");
let tableDiv = document.querySelector(".tableDiv");

console.log("arrComputer: ", arrComputer);
let bool = 0;
let klia = 0;

function check() {
  bool = 0;
  klia = 0;
  num1 = document.getElementById("num1");
  num2 = document.getElementById("num2");
  num3 = document.getElementById("num3");
  num4 = document.getElementById("num4");

  let arrUser = [
    parseInt(num1.value),
    parseInt(num2.value),
    parseInt(num3.value),
    parseInt(num4.value),
  ];
  console.log("arrUser: ", arrUser);

  for (let numUser = 0; numUser < 4; numUser++) {
    for (let numComputer = 0; numComputer < arrComputer.length; numComputer++) {
      if (arrUser[numUser] === arrComputer[numComputer]) {
        if (numUser === numComputer) {
          bool++;
        } else {
          klia++;
        }
      }
    }
  }
  console.log("bool is:", bool);
  console.log("klia is:", klia);

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  var boolTable = document.createTextNode(bool);
  var kliaTable = document.createTextNode(klia);

  td1.appendChild(boolTable);
  td2.appendChild(kliaTable);

  td3.style.backgroundColor = num1.options[num1.selectedIndex].className;
  td4.style.backgroundColor = num2.options[num2.selectedIndex].className;
  td5.style.backgroundColor = num3.options[num3.selectedIndex].className;
  td6.style.backgroundColor = num4.options[num4.selectedIndex].className;

  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);

  num1.value = "";
  num2.value = "";
  num3.value = "";
  num4.value = "";
  num1.className = num1.options[num1.selectedIndex].className;
  num2.className = num2.options[num2.selectedIndex].className;
  num3.className = num3.options[num3.selectedIndex].className;
  num4.className = num4.options[num4.selectedIndex].className;
  //   num1.selectedIndex = num1.value;

  if (bool === 4) {
    console.log("you winner");
    winner.innerHTML = "ניצחת!!! כל הכבוד";
    tableDiv.appendChild(winner);
    document.body.style.backgroundImage = "url('wow.gif')";
  }
}
