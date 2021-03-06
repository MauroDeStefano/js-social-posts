const container = document.getElementById("container");

const posts = [
  {
      "id": 1,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/300?image=171",
      "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
      },
      "likes": 80,
      "created": "2021-06-25"
  },
  {
      "id": 2,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=112",
      "author": {
          "name": "Sofia Perlari",
          "image": "https://unsplash.it/300/300?image=10"
      },
      "likes": 120,
      "created": "2021-09-03"
  },
  {
      "id": 3,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=234",
      "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
      },
      "likes": 78,
      "created": "2021-05-15"
  },
  {
      "id": 4,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=24",
      "author": {
          "name": "Luca Formicola",
          "image": null
      },
      "likes": 56,
      "created": "2021-04-03"
  },
  {
      "id": 5,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=534",
      "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
      },
      "likes": 95,
      "created": "2021-03-05"
  }
];

console.log(posts);

function createPost(object){
  for (let i in object){

    if(object[i].author.image === null){
      object[i].author.image = "https://www.cdcvillamaria.it/wp-content/uploads/2016/09/default-user-image.png";
    }

    container.innerHTML += `
    <div class="post">
      <div class="post__header">
        <div class="post-meta">                    
          <div class="post-meta__icon"> 
            <img class="profile-pic" src="${object[i].author.image}" alt="${object[i].name}">                    
            </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${object[i].author.name}</div>
            <div class="post-meta__time">${reverseDate(object[i].created)}</div>
          </div>                    
        </div>
      </div>
      <div class="post__text">${object[i].content}</div>
      <div class="post__image">
        <img src="${object[i].media}" alt="">
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button  js-like-button" data-postid="${object[i].id}">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span></a>
              </div>
            <div class="likes__counter">
              Piace a <b id="like-counter-1" class="js-likes-counter">${object[i].likes}</b> persone
            </div>
        </div> 
      </div>      
    `;


  }

}

createPost(posts);


for (let i in posts){
  console.log(posts);
  
  const dataId = document.querySelector(`[data-postid="${posts[i].id}"]`);
  let counter = document.querySelectorAll(".likes__counter");
  
  console.log(dataId);
  dataId.addEventListener("click", function(){

    

    if(!dataId.classList.contains("like-button--liked")){
    
    posts[i].likes += 1;

    dataId.classList.add("like-button--liked");
    
    counter[i].innerHTML = `
    <div class="likes__counter">
    Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
    </div>`
    ;

    }
    
  });
}
  

function reverseDate(dateToChange) {
  dateToChange = dateToChange.split("-").reverse().join("-");
  return dateToChange;
}