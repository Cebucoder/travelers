let menuCont = document.getElementById('menu-content');
let menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', () => {
    menuCont.classList.toggle('show-menuCont');
});

let showVideo = document.getElementById('showVideo');
let video = document.getElementById('video-container');
let closeVideo = document.getElementById('closeVideo');
let videoWrite = document.getElementById('video');


showVideo.addEventListener('click', () => {
    video.style.display = 'flex';
    addVideo(); //add the video back
});
closeVideo.addEventListener('click', () => {
    video.style.display = 'none';
    removeVideo() //remove the video
});
function removeVideo() {
    videoWrite.innerHTML = ""; // Remove the video element
}
function addVideo(){
    // add the video back and put it in the id name videowrite
    let videoSource = '<iframe width="903" height="464" src="https://www.youtube.com/embed/fEErySYqItI" title="Into The Nature - Cinematic Travel Video | Sony a6300" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    videoWrite.innerHTML = videoSource;
}


