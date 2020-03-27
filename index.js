document.addEventListener("DOMContentLoaded", init)

function init() {
  // target the form
  const newJokeForm = document.getElementById("new-joke-form")
  // const buttonRed = document.getElementById("button-red")
  // const buttonBlue = document.getElementById("button-blue")
  // const buttonGreen = document.getElementById("button-green")
  // now what?
  // add a listener for the form to submit!
  newJokeForm.addEventListener("submit", addJokeToDOM)
  // buttonRed.addEventListener("click", changeHeaderColor)
  // buttonBlue.addEventListener("click", changeHeaderColor)
  // buttonGreen.addEventListener("click", changeHeaderColor)

  const buttonDiv = document.getElementById("button-div")
  buttonDiv.addEventListener("click", changeHeaderColor)


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

function changeHeaderColor(event) {
  console.log("CLICKED!")
  // find the header
  // change the style of the header
  const header = document.getElementById("main-header")
  let newColor = "black"
  const id = event.target.id
  // debugger
  switch (id) {
    case "button-red":
      newColor = "red"
      break
    case "button-blue":
      newColor = "blue"
      break
    case "button-green":
      newColor = "green"
      break
    default:
      newColor = "yellow"
    }

    header.style.color = newColor
}

// when a user fills out the form, add the joke to the page
// when we mouseover, make a click happen
// console.log(newJokeForm)
