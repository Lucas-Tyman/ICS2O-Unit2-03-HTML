// Created by: Lucas Tyman
// Created on: Mar 2022
// This file contains the JS functions for index.html


function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}
