const values = [
  {
    name: "Innowacyjność",
    src: "innowacyjnosc-obraz.jpg",
    alt: "Innowacyjność"
  },
  {
    name: "Nowoczesność",
    src: "nowoczesnosc-obraz.jpg",
    alt: "Nowoczesność"
  },
  {
    name: "Przyszłość",
    src: "przyszlosc-obraz.jpg",
    alt: "Przyszłość"
  }
]
let index = 0

h = document.getElementById("name")
i = document.getElementById("src")
left = document.getElementById("left")
right = document.getElementById("right")

setData()

left.addEventListener("click", e => {
  if(index == 0) index = values.length - 1
  else index--
  setData()
})

right.addEventListener("click", e => {
  if(index == values.length - 1) index = 0
  else index++
  setData()
})

function setData() {
  h.textContent = values[index].name
  i.src = values[index].src
  i.alt = values[index].alt
}


