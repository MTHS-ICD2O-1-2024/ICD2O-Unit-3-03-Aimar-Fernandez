// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Mar 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)
  //process
  const volume = 4/3*Math.PI*radius**3
  // output
  document.getElementById("answer").innerHTML =
    "Volume is: " + volume.toFixed(2) + " mm³"
}
