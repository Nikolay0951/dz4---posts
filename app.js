const rootEl = document.getElementById('root');
console.dir(rootEl);

const photo = {
    id: 111,
    type: 'photo',
    content: 'Компания Audi расширяет линейку моделей RS: на автосалоне в Детройте производитель из Ингольштадта официально представил спортбек RS 7. Самой важной частью новинки стал, безусловно, её двигатель. Под капотом Audi RS 7 расположился 4,0-литровый битурбированный мотор TFSI, обладающий мощностью 560 л.с. и пиковым крутящим моментом 750 Н∙м.',
    sourceUrl: 'http://www.audi200-club.com/wp-content/uploads/2013/01/383725153.jpg',
    likes: 0,
    dislikes: 0,
};

const video = {
    id: 111,
    type: 'video',
    content: 'пост с видео',
    sourceUrl: 'ввhttp://www.audi200-club.com/wp-content/uploads/2013/01/383725153.jpg',
    likes: 10,
};

const audio = {
    id: 111,
    type: 'audio',
    content: 'пост с аудиозаписью',
    sourceUrl: '333http://www.audi200-club.com/wp-content/uploads/2013/01/383725153.jpg',
    likes: 10,
};

const photoEl = document.createElement('div');
photoEl.className = 'card';

const imgEl = document.createElement('img');
imgEl.src = photo.sourceUrl;
imgEl.className = 'card-img-top';
photoEl.appendChild(imgEl);

const photoBodyEl = document.createElement('div');
photoBodyEl.className = 'card-body';
photoEl.appendChild(photoBodyEl);

const photoContentEl = document.createElement('p');
photoContentEl.textContent = photo.content;
photoEl.appendChild(photoContentEl);

const photoButtEl = document.createElement('div');
photoButtEl.className = 'btn-group';
photoEl.appendChild(photoButtEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-info';
likesEl.textContent = '👍🏼  ' + photo.likes;
likesEl.onclick = function (){
    photo.likes = photo.likes + 1;
    likesEl.textContent = '👍🏼  ' + photo.likes;
};
photoButtEl.appendChild(likesEl);

const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-dark';
dislikesEl.textContent = '👎🏻  ' + photo.likes;
dislikesEl.onclick = function (){
    photo.dislikes = photo.dislikes + 1;
    dislikesEl.textContent = '👎🏻  ' + photo.dislikes;
};
photoButtEl.appendChild(dislikesEl);




rootEl.appendChild(photoEl);
