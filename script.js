let url = 'https://owen-wilson-wow-api.herokuapp.com/wows/ordered/1-10'




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
        posterImg.id = "modal-target"
        posterImg.src = `${filteredRes[i].poster}`
        posterImg.setAttribute('data-modal-target', '#modal')

        posterDiv.appendChild(posterImg)

        document.querySelector('.parent-div').appendChild(posterDiv)

        openModalButtons = document.querySelectorAll('[data-modal-target]')
        let closeModalButtons = document.querySelectorAll('[data-close]')
        let overlay = document.getElementById('overlay')
        openModalButtons.forEach(button => {
          button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            console.log('hello')
            openModal(modal)

            closeModalButtons.forEach(button => {
              button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal)
              })
            })
          })
        })
      }
      createList();
    }
  })


let openModalButtons


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}