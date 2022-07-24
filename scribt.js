var myIconArr = document.getElementsByClassName("icon");
var myCardArr = document.getElementsByClassName("card");
var openedList;
//Order Cards Rundomly
function rundom() {
  var arr = [];
  while (arr.length < 12) {
    var randomNum = Math.floor(Math.random() * 12);
    if (arr.indexOf(randomNum) == -1) arr.push(randomNum);
  }
  var cardsArr = document.getElementsByClassName("card");
  for (var i = 0; i < cardsArr.length; i++) {
    cardsArr[i].style.order = arr[i];
  }
}
rundom();
//Show All Cards
function showAll() {
  for (i = 0; i < myIconArr.length; i++) {
    myIconArr[i].style.visibility = "visible";
  }
}
//Hide All Cards
function hideAll() {
  for (i = 0; i < myIconArr.length; i++) {
    myIconArr[i].style.visibility = "hidden";
  }
}
//Hint Counter
var counter = 0;
//Hint Button Click (Can Show All Cards for 1 second Only 3 Times)
document.getElementById("hint").onclick = function () {
  counter++;
  if (counter < 3) {
    showAll();
    setTimeout(hideAll, 1000);
    var heart = document.getElementsByClassName("heart");
    heart[counter - 1].style.visibility = "hidden";
  } else if (counter == 3) {
    showAll();
    setTimeout(hideAll, 1000);
    var heart = document.getElementsByClassName("heart");
    heart[counter - 1].style.visibility = "hidden";
    document.getElementById("hint").disabled = true;
    document.getElementById("hint").style.opacity=0.5;
  }
};
//Start Game
document.getElementById("start").onclick = function () {
  location.reload();
};
//Add Event Listener To Cards
for (var i = 0; i < myCardArr.length; i++) {
  myCardArr[i].addEventListener("click", showItem);
}
//Show Clicked Card
function showItem(e) {
  if (e.target.children[0].style.display != "none") {
    e.target.children[0].style.visibility = "visible";
    e.target.children[0].classList.add("opendCard");
    openedList = document.getElementsByClassName("opendCard");
    checkMaching();
  }
}
//Check If Cards Are Matched Or Not
function checkMaching() {
  if (openedList.length == 2) {
    if (openedList[0].innerHTML == openedList[1].innerHTML) {
      setTimeout(mached, 500);
    } else {
      setTimeout(notMached, 500);
    }
  }
}
//Matched Cards
function mached() {
  while (openedList.length != 0) {
    openedList[0].parentElement.style.backgroundColor = "#042d7b";
    openedList[0].style.display = "none";
    openedList[0].classList.add("mached");
    openedList[0].classList.remove("opendCard");
    if (document.getElementsByClassName("mached").length == 12) {
      setTimeout(function () {
        alert("Congratulations! you win");
        location.reload();
      }, 100);
    }
  }
}
//Not Matched Cards
function notMached() {
  while (openedList.length != 0) {
    openedList[0].style.visibility = "hidden";
    openedList[0].classList.remove("opendCard");
  }
}
