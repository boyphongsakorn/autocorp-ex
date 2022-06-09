import React from 'react';

//create a function to calculate the sum of the numbers
function calculate() {
  //var num1 = document.getElementById("start").value;
  //var num2 = document.getElementById("end").value;
  //var result = parseInt(num1) + parseInt(num2);
  //document.getElementById("result").innerHTML = result;
  fetch('http://127.0.0.1:4000/?start=' + document.getElementById("start").value + '&end=' + document.getElementById("end").value)
    .then(response => response.text())
    .then(text => {
      document.getElementById("result").innerHTML = text;
    });
}
  
const Home = () => {
  return (
    <div>
      <h1>Welcome to GeeksforGeeks</h1>
      <input type="number" placeholder="Enter your number" min="10" max="1000" id="start" />
      <input type="number" placeholder="Enter your number" min="10" max="1000" id="end" />
      <button onClick={calculate}>Calculate</button><br></br>
      <a href="/hc">History Calculate</a>
      <p id="result"></p>
    </div>
  );
};
  
export default Home;