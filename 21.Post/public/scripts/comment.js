window.onload = function () {
    const comment = document.getElementById('comment')
    const commentHolder = document.getElementById('commentHolder')

    comment.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (e.target.value) {
                let postId = comment.dataset.post
                let data = {
                    body: e.target.value
                }
                let req = genarateRequest(`/api/comments/${postId}`, 'POST', data)
                fetch(req)
                    .then(res => res.json())
                    .then(data => {
                        let commentElement = createComment(data)
                        commentHolder.insertBefore(commentElement, commentHolder.children[0])
                    })
                    .catch(e => {
                        console.log(e)
                        alert(e.message)
                    })

            } else {
                alert('Please Enter A Valid Comment')
            }
        }
    })
}

function genarateRequest(url, method, body) {
    let headers = new Headers()
    headers.append('Accept', 'Application/JSON')
    headers.append('Content-type', 'Application/JSON')

    let req = new Request(url, {
        method,
        mode: "cors",
        headers,
        body: JSON.stringify(body)
    })

    return req
}

function createComment(comment) {

    let innerHtml = `
    <img 
        src="${comment.user.profilePics}" 
        class="rounded-circle mx-3 my-3 aling-self-start" 
        style="width: 40px;">
    <div class="media-body my-3">
       <p>${comment.body}</p>

        <div class="my-3">
            <input type="text" 
                name="reply" 
                class="form-control" 
                placeholder="Press Enter To Reply" 
                data-comment=${comment._id}
            >
        </div>
    </div>
    `
    let div = document.createElement('div')
    div.className = 'media border'
    div.innerHTML = innerHtml

    return div
}