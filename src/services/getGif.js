const apiKey = 'dQcAXqSlMONgyEy5D9F3aSpt3Fd85K9G'

export default function getGif (keyword = 'koala') {

    const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${keyword}&rating=R`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const {data} = response
      const gif = {id : data.id, title : data.title, url : data.images.downsized_large.url }
      return gif
    })
}