// To this file you will add all the codes unaeza taka(You may want) for the clone
// This ones bellow are just for the starter
// the document.addEventListener("DOMContentLoaded", function () {}) function
// is used to ensure that all the html is loaded before it executes.
// yu can use the function to make your development optimal and fixing some errors
// before they yell at you.....😁

document.addEventListener("DOMContentLoaded", function () {
  // an alert to help you know if the Javascript is working 🦾
  alert("Hello there the script is working....🚀");

  //   getting the elements from the html
  const testBtn = document.querySelector(".testBtn");
  const testCount = document.querySelector(".testCount");

  //   Helper function to be used to update the count
  function UpdateCount(initialCount) {
    return ++initialCount;
  }

  //   handler function for the click event in the HTML button
  function handleClick() {
    // alert(testCount.textContent);
    testCount.innerHTML = UpdateCount(testCount.textContent);
  }

  //   adding a listener to the button for a click event and an Anonymous function
  //   to be invoked on a click event
  testBtn.addEventListener("click", function () {
    handleClick();
  });
});
