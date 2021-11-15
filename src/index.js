const imagesAPI= 'https://distinct-vaulted-freesia.glitch.me/image '
let imageData; 

fetch(imagesAPI)
.then((res) => res.json())
.then(json => {
    imageData = json
    renderImage(imageData)
});


document
.getElementById('like-button')
.addEventListener('click', incrementLikes);

document.getElementById('comment-form').addEventListener('submit',addComment);

function renderImage(image) {
    const title = document.getElementById('fg-title')
    title.textContent =image.title

document.getElementById('fg-image').src = image.image
document.getElementById('fg-likes').textContent= `${image.likes} likes`;
 const commentList = document.getElementById('fg-comments')
 commentList.innerHtml= ''
 image.comments.forEach((comment) => {
     const li = document.createElement('li')
     li.textContent= comment.content;
     commentList.append(li);
    })

 }

 function incrementLikes(){
    imageData.likes += 1
    renderImage(imageData)

} 