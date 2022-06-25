let url = 'https://owen-wilson-wow-api.herokuapp.com/wows/ordered/1-85'

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
        posterImg.src = `${filteredRes[i].poster}`

        posterDiv.appendChild(posterImg)

        document.querySelector('.parent-div').appendChild(posterDiv)
      }
      createList();
    }
  })