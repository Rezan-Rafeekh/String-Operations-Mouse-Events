// String methods on mouse over

function processString() {
  var str = prompt("Enter a string:");

  // Extract "ITWT"
  var extracted = str.substring(9, 13);

  // Replace ITWT with ITL
  var replaced = str.replace("ITWT", "ITL");

  // Append "All the best"
  var appended = str.concat(" All the best");

  // Last index of character 'a'
  var lastIndex = str.lastIndexOf("a");

  document.getElementById("out1").innerText =
    extracted;

  document.getElementById("out2").innerText =
    replaced;

  document.getElementById("out3").innerText =
    appended;

  document.getElementById("out4").innerText =
    lastIndex;
}
