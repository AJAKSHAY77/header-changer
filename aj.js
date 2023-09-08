const heading = document.getElementById("heading")
const button = document.getElementById("btn")
// button.addEventListener("click", () => {
//     heading.style.display = "none"
//     const text = document.createElement("h1")
//     const text2 = text.innerText = "hello aditya bhaiya"
//     document.body.appendChild(text);

// })
button.addEventListener("click", () => {
    if (heading.textContent === "i am akshay bhaiya") {
      heading.textContent="jai shree ram"
    } else {
        heading.textContent = "i am akshay bhaiya";
  }

})
