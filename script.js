let url = 'https://owen-wilson-wow-api.herokuapp.com/wows/ordered/1-20'

let openModalButtons


fetch(url)
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      const check = {}
      let filteredRes = response.filter((res) => {
        if (!check[res.movie]) {
          check[res.movie] = 1
          return check[res.movie]
        }
      })
      function createList() {

        let posterDiv = document.createElement('div')
        posterDiv.className = "poster-div"

        let posterImg = document.createElement('img')
        posterImg.className = "poster-image"
        posterImg.id = `modal-target-${filteredRes[i].movie}`
        posterImg.src = `${filteredRes[i].poster}`
        posterImg.setAttribute(`data-modal-target`, '#modal')

        posterDiv.appendChild(posterImg)
        document.querySelector('.parent-div').appendChild(posterDiv)

        let modalDiv = document.createElement('div')
        modalDiv.className = "modal"
        modalDiv.id = `${filteredRes[i].movie} - modal`

        let modalImg = document.createElement('img')
        modalImg.className = "modal-image"
        modalImg.id = "modal-image"
        modalImg.src = `${filteredRes[i].poster}`

        let closeButton = document.createElement('button')
        closeButton.className = "close"
        closeButton.setAttribute('data-close', '#close')
        closeButton.innerHTML += 'close'

        let modalHeader = document.createElement('div')
        modalHeader.className = "modal-header"
        modalHeader.innerHTML += `${filteredRes[i].movie} `

        let modalBody = document.createElement('div')
        modalBody.className = "modal-body"
        modalBody.innerHTML += `Realeased: ${filteredRes[i].release_date}`

        // let modalAudio = document.createElement('audio')
        // modalAudio.className = "modal-audio"
        // modalAudio.id = `${filteredRes[i].movie} - audio`
        // modalAudio.src = `${filteredRes[i].audio}`
        // modalAudio.setAttribute('type', 'audio/mpeg')
        // modalAudio.setAttribute(`data-audio-target`, '#audio')

        let modalAudioInfo = `
        <audio controls class="modal-audio" id="${filteredRes[i].movie} - audio" src="${filteredRes[i].audio}" >
          
        </audio>
      `


        document.querySelector('.parent-div').appendChild(modalDiv)
        modalDiv.appendChild(closeButton)
        modalDiv.appendChild(modalHeader)
        modalDiv.appendChild(modalImg)
        modalDiv.appendChild(modalBody)
        // modalDiv.appendChild(modalAudio)
        modalDiv.insertAdjacentHTML("beforeend", modalAudioInfo)


        openModalButtons = document.querySelectorAll(`[data-modal-target]`)
        closeModalButtons = document.querySelectorAll('[data-close]')
        modalAudio = document.querySelectorAll(`[data-audio-target]`)
        let overlay = document.getElementById('overlay')


        openModalButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            openModal(e.target)
            modalAudio()
          })

          closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = button.closest('.modal')
              closeModal(modal)
            })
          })

          function openModal(modal) {
            if (modal == null) return
            if (modal.id === posterImg.id) {
              modalDiv.classList.add('active')
              overlay.classList.add('active')
            }
          }

          function closeModal(modal) {
            if (modal == null) return
            modalDiv.classList.remove('active')
            overlay.classList.remove('active')
          }

          function modalAudio() {
            let audioPlay = document.getElementById(`${filteredRes[i].movie} - audio`)
            audioPlay.play()
          }

        })

      }
      createList();
    }
  })
