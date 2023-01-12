
async function checkTime() {
  let response = await fetch("api/getTime")
  let resultText = await response.text()
  document.getElementById('time-results').innerHTML = resultText
}


async function pluralize() {
  let inputWord = document.getElementById("wordInput").value
  let response = await fetch("pluralize?word=" + inputWord)
  let resultText = await response.text()
  document.getElementById('pluralize-results').innerHTML = resultText
}