let button = document.querySelector(".menu")

let sidebar = document.querySelector(".sidebar")

let content = document.querySelector(".home-content")

let search = document.getElementById("search")

let dashboard = document.getElementById("dashboard")

let pets = document.getElementById("pets")

let customers = document.getElementById("customers")

let vets = document.getElementById("vets")

let settings = document.getElementById("settings")

let logOut = document.querySelector(".log-out")

button.onclick = function Button() {
    sidebar.classList.toggle("active")
    content.classList.toggle("active")
}

search.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}

dashboard.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}

pets.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}

customers.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}

vets.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}

settings.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}

logOut.onclick = function() {
    sidebar.classList.remove("active")
    content.classList.remove("active")
}
