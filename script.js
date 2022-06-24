let url = 'https://owen-wilson-wow-api.herokuapp.com/wows/ordered/1-50'

fetch(url)
  .then(response => response.json())
  .then(response => {

    for (let i = 0; i < response.length; i++) {
      function createList() {
        let posterDiv = document.createElement('div')
        posterDiv.className = "poster-div"

        let posterImg = document.createElement('img')
        posterImg.className = "poster-image"
        posterImg.src = `${response[i].poster}`

        posterDiv.appendChild(posterImg)

        document.querySelector('.parent-div').appendChild(posterDiv)
      }
      createList();
    }
  })