const values = [
  {
    name: "Innowacyjność",
    src: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Nowoczesność",
    src: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    name: "Przyszłość",
    src: "https://images.unsplash.com/photo-1758874383719-7c801adb7e5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032"
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
  src.src = values[index].src
}
