window.onload = function () {
   const likeBtn = document.getElementById('likeBtn')
   const dislikeBtn = document.getElementById('dislikeBtn')

   likeBtn.addEventListener('click', function (e) {
      let postId = likeBtn.dataset.post

      reqlikeDislike('likes', postId)
         .then(res => res.json())
         .then(data => {
            let likeText = data.liked ? 'Liked' : 'Like'
            likeText = likeText + ` (${data.totalLikes})`

            let disLiketext = `Dislike (${data.totalDislikes})`

            likeBtn.innerHTML = likeText
            dislikeBtn.innerHTML = disLiketext
         })
         .catch(e => {
            console.log(e)
            alert(e.response.data.error)
         })
   })

   dislikeBtn.addEventListener('click', function (e) {
      let postId = likeBtn.dataset.post
      reqlikeDislike('dislikes', postId)
         .then(res => res.json())
         .then(data => {
            let dislikeText = data.disliked ? 'Disliked' : 'Dislike'
            dislikeText = dislikeText + ` (${data.totalDislikes})`

            let liketext = `Like (${data.totalLikes})`

            likeBtn.innerHTML = liketext
            dislikeBtn.innerHTML = dislikeText
         })
         .catch(e => {
            console.log(e)
            alert(e.response.data.error)
         })
   })


   function reqlikeDislike(type, postId) {
      let headers = new Headers()
      headers.append('Accept', 'Application/JSON')
      headers.append('Content-type', 'Application/JSON')
   
      let req = new Request(`/api/${type}/${postId}`, {
         method: 'GET',
         mode: "cors",
         headers
      })
   
      return fetch(req)
      
   }
   
}
