document.addEventListener("DOMContentLoaded", init)

function init() {
  // target the form
  const newJokeForm = document.getElementById("new-joke-form")
  const button1 = document.getElementById("button-1")
  // now what?
  // add a listener for the form to submit!
  newJokeForm.addEventListener("submit", addJokeToDOM)
  button1.addEventListener("click", addJokeToDOM)
}

function addJokeToDOM(event) {
  event.preventDefault()
  console.log("form submit!", event)
  const titleInput = document.getElementById("joke-title-input")
  const title = titleInput.value
  const contentInput = document.getElementById("joke-content-input")
  const content = contentInput.value
  const jokeList = document.getElementById("jokes-list")
  jokeList.innerHTML += `<li>${title} - ${content}</li>`
  titleInput.value = ""
  contentInput.value = ""
}


// when a user fills out the form, add the joke to the page
// when we mouseover, make a click happen
// console.log(newJokeForm)
