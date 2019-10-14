const root1El = document.getElementById('root1');
console.dir(root1El);

const root2El = document.getElementById('root2');
console.dir(root2El);

const root3El = document.getElementById('root3');
console.dir(root3El);                                             // ПЕРЕСМОТРЕТЬ НЕОБХОДИМОСТЬ!!!!!!!!!!!!!!!!!!!!!!!!!

const photo = {
    id: 111,
    content: 'Компания Audi расширяет линейку моделей RS: на автосалоне в Детройте производитель из Ингольштадта официально представил спортбек RS 7. Самой важной частью новинки стал, безусловно, её двигатель. Под капотом Audi RS 7 расположился 4,0-литровый битурбированный мотор TFSI, обладающий мощностью 560 л.с. и пиковым крутящим моментом 750 Н∙м.',
    sourceUrl: 'http://www.audi200-club.com/wp-content/uploads/2013/01/383725153.jpg',
    likes: 0,
    dislikes: 0,
    iconUrl: null,
};

const video = {
    id: 123,
    content: 'VW Golf GTI TCR 290HP | 0-260km/h ACCELERATION & DRAGY GPS Data by AutoTopNL',
    sourceUrl: 'https://www.youtube.com/embed/_Y7IvF9CIoc?rel=0',
    likes: 0,
    dislikes: 0,
    iconUrl: null,
};

const audio = {
    id: 128,
    content: 'Звук выхлопа AMG V12',
    sourceUrl: 'https://ru.ringtones.mob.org/go/72236/http%3A%2F%2Fahandfulof.me%2Ffail%2Fzvuk-dvigatelya-mercedes-amg-v12.mp3',
    likes: 0,
    dislikes: 0,
    iconUrl: 'https://img.mobigama.net/app/7379-music_player_audio_player/1_music_player_audio_player.png',
};

const photoEl = document.createElement('photo'); // пост с рисунком начало
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
likesEl.onclick = function () {
    photo.likes = photo.likes + 1;
    likesEl.textContent = '👍🏼  ' + photo.likes;
};
photoButtEl.appendChild(likesEl);

const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-dark ';
dislikesEl.textContent = '👎🏻  ' + photo.dislikes;
dislikesEl.onclick = function () {
    photo.dislikes = photo.dislikes + 1;
    dislikesEl.textContent = '👎🏻  ' + photo.dislikes;
};
photoButtEl.appendChild(dislikesEl);

root1El.appendChild(photoEl); // пост с рисунком конец

const videoBodyEl = document.createElement('div');
videoBodyEl.className = 'card';

const videoEl = document.createElement('div');
videoEl.className = 'embed-responsive embed-responsive-16by9';
videoEl.controls = true;
videoBodyEl.appendChild(videoEl);

const videoMatEl = document.createElement('iframe');
videoMatEl.className = 'embed-responsive-item';
videoMatEl.src = video.sourceUrl;
videoEl.appendChild(videoMatEl);

const videoContentEl = document.createElement('p');
videoContentEl.textContent = video.content;
videoBodyEl.appendChild(videoContentEl);

const videoButtEl = document.createElement('div');
videoButtEl.className = 'btn-group';
videoBodyEl.appendChild(videoButtEl);

const vlikesEl = document.createElement('button');
vlikesEl.className = 'btn btn-info';
vlikesEl.textContent = '👍🏼  ' + video.likes;
vlikesEl.onclick = function () {
    video.likes = video.likes + 1;
    vlikesEl.textContent = '👍🏼  ' + video.likes;
};
videoButtEl.appendChild(vlikesEl);

const vdislikesEl = document.createElement('button');
vdislikesEl.className = 'btn btn-dark';
vdislikesEl.textContent = '👎🏻  ' + video.dislikes;
vdislikesEl.onclick = function () {
    video.dislikes = video.dislikes + 1;
    vdislikesEl.textContent = '👎🏻  ' + video.dislikes;
};
videoButtEl.appendChild(vdislikesEl);

root2El.appendChild(videoBodyEl);

const audioEl = document.createElement('div');
audioEl.className = "card";

const audioIconEl = document.createElement('img')
audioIconEl.className = 'card-img-top';
audioIconEl.src = audio.iconUrl;
audioEl.appendChild(audioIconEl);

const audioPEl = document.createElement('audio');
audioPEl.className = 'Audio';
audioPEl.src = audio.sourceUrl;
audioPEl.controls = true;


audioEl.appendChild(audioPEl);

const audioContentEl = document.createElement('p');
audioContentEl.textContent = audio.content;
audioEl.appendChild(audioContentEl);

root3El.appendChild(audioEl);