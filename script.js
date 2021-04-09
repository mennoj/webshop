const app = document.getElementById('test')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', `http://127.0.0.1:5000/`, true)
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((product) => {
      const card = document.createElement('button')
      card.setAttribute('class', 'card')

      const kruisje = document.createElement('button')
      kruisje.setAttribute('class', 'kruisje')

      const h1 = document.createElement("h1")
      h1.textContent = product.naam

      const p = document.createElement('p')
      p.textContent = product.beschrijving

      const img = document.createElement('img')
      img.src = product.foto

      container.appendChild(card)
      card.appendChild(kruisje)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(img)

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Het werkt niet...`
    app.appendChild(errorMessage)
  }
}

request.send()