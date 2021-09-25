// window.onload = function () {
    // const comment = document.getElementById('comment')
    // const commentHolder = document.getElementById('commentHolder')

    // comment.addEventListener('keypress', function (e) {
    //     if (e.key === 'Enter') {
    //         if (e.target.value) {
    //             let postId = comment.dataset.post
    //             // console.log(postId)
    //             let data = {
    //                 body: e.target.value
    //             }
    //             // console.log(data)
    //             let req = generateRequest(`/api/comments/${postId}`, 'POST', data)
    //             // console.log(req.user._id)
    //             fetch(req)
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     let commentElement = createComment(data)
    //                     commentHolder.insertBefore(commentElement, commentHolder.children[0])
    //                     e.target.value = ''
    //                 })
    //                 .catch(e => {
    //                     console.log(e)
    //                     alert(e.message)
    //                 })
    //         } else {
    //             alert('Please Enter A Valid Comment')
    //         }
    //     }
    // })

    // commentHolder.addEventListener('keypress', function (e) {
    //     if (commentHolder.hasChildNodes(e.target)) {
    //         if (e.key === 'Enter') {
    //             let commentId = e.target.dataset.comment
    //             let value = e.target.value
    //             if (value) {
    //                 let data = {
    //                     body: value
    //                 }
    //                 let req = generateRequest(`/api/comments/replies/${commentId}`, 'POST', data)
    //                 fetch(req)
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         let replyElement = createReplyElement(data)
    //                         let parent = e.target.parentElement
    //                         parent.previousElementSibling.appendChild(replyElement)
    //                         e.target.value = ''
    //                     })
    //                     .catch(e => {
    //                         console.log(e)
    //                         alert(e.message)
    //                     })
    //             } else {
    //                 // console.log(e)
    //                 alert('Please Enter A Valid Reply')
    //             }
    //         }
    //     }
    // })
// }

// function generateRequest(url, method, body) {
//     let headers = new Headers()
//     headers.append('Accept', 'Application/JSON')
//     headers.append('Content-type', 'Application/JSON')

//     let req = new Request(url, {
//         method,
//         mode: "cors",
//         headers,
//         body: JSON.stringify(body)
//     })
//     return req
// }

// function createComment(comment) {
//     let innerHTML = `
//     <img 
//         src="${comment.user.profilePics}" class="rounded-circle mx-3 my-3" style="width: 40px;">
//         <div class="media-body my-3">
//             <p>${comment.body}</p>

//             <div class="my-3">
//                 <input type="text" class="form-control" placeholder="Press Enter to Reply" name="reply" data-comment=${comment._id}>
//             </div>
//         </div>
//     `
//     let div = document.createElement('div')
//     div.className = 'media border'
//     div.innerHTML = innerHTML
//     // console.log(comment.user._id)
//     return div
// }

// function createReplyElement(reply) {
//     let innerHTML = `
//     <img 
//         style="width: 40px;"
//         src="${reply.profilePics}"
//         class="aling-self-start mr-3 rounded-circle">
//     <div class="media-body">
//         <p>${reply.body}</p>
//     </div>
//     `
//     let div = document.createElement('div')
//     div.className = 'media mt-3'
//     div.innerHTML = innerHTML

//     return div
// }