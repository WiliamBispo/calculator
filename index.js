const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const allowedKeys = ["/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", " "]


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})


document.body.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
        calculate()
    }
    if (ev.key === "Delete")
        input.value = ""
})


document.getElementById("clear").addEventListener("click", function () {
    input.value = ""
})


document.getElementById("clearOne").addEventListener("click", function () {
    input.value = input.value.slice(0, -1)
})


document.getElementById("equal").addEventListener("click", calculate)

function calculate() {
    if (input.value === "" ) {
        input.value = ""
    } else {
        const result = eval(input.value)
        input.value = result 
    }
    
}

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark"){
        root.style.setProperty("--bg-color", "#e6e6e6")
        root.style.setProperty("--font-color", "#35352b")
        root.style.setProperty("--bg-color-input", "#eeeeee")
        root.style.setProperty("--bg-color-keys", "#d3cdcd")
        root.style.setProperty("--bg-color-button", "#e5e4e0")
        root.style.setProperty("--font-color-button", "#303028")
        root.style.setProperty("--bx-shadow-button", "#a69e90")
        root.style.setProperty("--bg-color-button-hover", "#ffffff")
        root.style.setProperty("--bg-color-button-item4", "#388187")
        root.style.setProperty("--bx-shadow-button-item4", "#196165")
        root.style.setProperty("--bg-color-button-item18", "#c85401")
        root.style.setProperty("--bx-shadow-button-item18", "#8e3700")
        root.style.setProperty("--bg-color-button-item4-hover", "#62b5bd")
        root.style.setProperty("--bg-color-button-item18-hover", "#ff8b38")
        root.style.setProperty("--font-color-button-item4", "#ffffff")

        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#3b4664")
        root.style.setProperty("--font-color", "#feffff")
        root.style.setProperty("--bg-color-input", "#181f32")
        root.style.setProperty("--bg-color-keys", "#252d44")
        root.style.setProperty("--bg-color-button", "#eae3db")
        root.style.setProperty("--font-color-button", "#434957")
        root.style.setProperty("--bx-shadow-button", "#b6a499")
        root.style.setProperty("--bg-color-button-hover", "#ffffff")
        root.style.setProperty("--bg-color-button-item4", "#647299")
        root.style.setProperty("--bx-shadow-button-item4", "#414d75")
        root.style.setProperty("--bg-color-button-item18", "#d13f30")
        root.style.setProperty("--bx-shadow-button-item18", "#992416")
        root.style.setProperty("--bg-color-button-item4-hover", "#a2b3e1")
        root.style.setProperty("--bg-color-button-item18-hover", "#f96c5b")
        root.style.setProperty("--font-color-button-item4", "#feffff")

        main.dataset.theme = "dark"
    }
})

