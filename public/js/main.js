const dataElement = document.querySelector('#data')
const loadingElement = document.querySelector('#loading')

let loading = false

const getDataFromBackend = async() => {
    loading = true
    const res = await fetch('http://localhost:8000/data')
    const data = await res.json()
    loading = false
    return data
}

const addDataToDOM = async() => {
    const data = await getDataFromBackend()
    if (!loading) {
        loadingElement.innerHTML = ''
    }

    data.forEach(d => {
        const div = document.createElement('div')
        div.className = 'data'
        div.innerHTML = `
            <h3>${data.title}</h3>
        `
        dataElement.appendChild(div)
    })
}

addDataToDOM()
