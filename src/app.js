/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
let excuseGen = () => {
  let who = [
    "my cousin",
    "my mom",
    "the dog",
    "the cat",
    "my fish",
    "my grandma"
  ];
  var whoExcuse = who[Math.floor(Math.random() * 5)];
  let action = ["ate", "cut", "demolished", "shrink", "managed", "guided"];
  var actionExcuse = action[Math.floor(Math.random() * 5)];
  let what = [
    " the homework",

    "the car",
    "the computer",
    "my shoes",

    "the keys",
    "the code"
  ];
  var whatExcuse = what[Math.floor(Math.random() * 5)];
  let when = [
    "before the gym",
    "before class",
    "after class",
    "on class",
    "right on time",
    "on the weekend"
  ];
  var whenExcuse = when[Math.floor(Math.random() * 5)];

  return whoExcuse + actionExcuse + whatExcuse + whenExcuse;
  console.log(excuseGen);
};
