const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const api = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
let html = ``

async function currency() {
    const result = await fetch(api)
    console.log(result)
    const data = await result.json()
    console.log(data)
    const key = Object.keys(data)
    console.log(key)

    key.map(item => {
        return html += `<option value= ${item}>${item}</option>`
    })

    // console.log(html)

    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html
    }
}

currency()