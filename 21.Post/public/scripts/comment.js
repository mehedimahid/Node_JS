window.onload = function () {
    const commentHolder = document.getElementById('commentHolder')

    commentHolder.addEventListener('keypress', function (e) {
        if (commentHolder.hasChildNodes(e.target)) {
            if (e.key === 'Enter') {
                let commentId = e.target.dataset.comment
                let value = e.target.value
                if (value) {
                    let data = {
                        body: value
                    }
                    let req = generateRequest(`/api/comments/replies/${commentId}`, 'POST', data)
                    fetch(req)
                        .then(res => res.json())
                        .then(data => {
                            let replyElement = createReplyElement(data)
                            let parent = e.target.parentElement
                            parent.previousElementSibling.appendChild(replyElement)
                            e.target.value = ''
                        })
                        .catch(e => {
                            console.log(e)
                            alert(e.message)
                        })
                } else {
                    // console.log(e)
                    alert('Please Enter A Valid Reply')
                }
            }
        }
    })
}

function generateRequest(url, method, body) {
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


function createReplyElement(reply) {
    let innerHTML = `
    <img 
        style="width: 40px;"
        src="${reply.profilePics}"
        class="aling-self-start mr-3 rounded-circle">
    <div class="media-body">
        <p>${reply.body}</p>
    </div>
    `
    let div = document.createElement('div')
    div.className = 'media mt-3'
    div.innerHTML = innerHTML

    return div
}