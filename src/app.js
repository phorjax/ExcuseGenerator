/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuseGen = () => {
    let who = [
      "my cousin",
      "my mom",
      "the dog",
      "the cat",
      "my fish",
      "my grandma"
    ];
    let action = ["ate", "cut", "demolished", "shrink", "managed", "guided"];

    let when = [
      "before the gym",
      "before class",
      "after class",
      "on class",
      "right on time",
      "on the weekend"
    ];
    let what = [
      " the homework",
      "the car",
      "the computer",
      "my shoes",
      "the keys",
      "the code"
    ];

    var whoExcuse = who[Math.floor(Math.random() * who.length)];

    var actionExcuse = action[Math.floor(Math.random() * action.length)];

    var whatExcuse = what[Math.floor(Math.random() * what.length)];

    var whenExcuse = when[Math.floor(Math.random() * when.length)];

    return whoExcuse + " " + actionExcuse + " " + whatExcuse + " " + whenExcuse;
  };

  document.querySelector("#excuse").innerHTML = excuseGen();
};
