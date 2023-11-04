/*****************Reels********************/
// const reels_data = [
//   ['/static/video/video1.mp4',
//   '/static/images/profile_img.jpg',
//   'zineb',
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...',
//   'nameOfMusic',
//   'casablanca',
//   '55.9K',
//   '555',
//   ],
//   ['/static/video/video2.mp4',
//   'https://i.ibb.co/3S1hjKR/account1.jpg',
//   'ikram',
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...',
//   'nameOfMusic',
//   'oujda',
//   '35.9K',
//   '75',
//   ],
//   ['/static/video/video3.mp4',
//   'https://i.ibb.co/8x4Hqdw/account2.jpg',
//   'oumnia',
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...',
//   'nameOfMusic',
//   'rabat',
//   '10.5K',
//   '155',
//   ],
//   ['/static/video/video4.mp4',
//   'https://i.ibb.co/CWbynB2/account3-1.jpg',
//   'Safae',
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis...',
//   'nameOfMusic',
//   'Nador',
//   '705.9K',
//   '750',
//   ],


// ]
function test(counter) {
fetch('/api/posts', {
    "method": "POST",
    "headers": {"Content-Type": "application/json"},
    "body": JSON.stringify({"counter": counter}),
  }).then(response => response.json())
    .then(data => {
      // console.log(data);
      const reels_data0 = data;

const reels_container = document.querySelector(".reels");
const reels_data = []
for(let i=0;i<reels_data0.length;i++){
  reels_data.push([reels_data0[i].video, reels_data0[i].image, reels_data0[i].name, reels_data0[i].bio])
}

if(reels_container){
  for(let i=0;i<reels_data.length;i++){
    console.log(i)
    const reel_div = document.createElement('div');
    reel_div.classList.add("reel");
    if(i==0){
      reel_div.setAttribute("id",'video_play');
      reel_div.innerHTML = `<div class="video">
    <video src="${reels_data[i][0]}" autoplay loop>
    </video>
    <div class="content">
        <div class="sound">
            <img class="volume-up" src="/static/images/volume-up.png" >
            <img class="volume-mute" src="/static/images/volume-mute.png" >
        </div>
        <div class="play">
            <img src="/static/images/play-button-arrowhead.png" >
        </div>
        <div class="info">
            <div class="profile">
                <h4><a href="#">
                        <img src="${reels_data[i][1]}" >
                        ${reels_data[i][2]}
                    </a></h4>
                <span>.</span>
                <button class="follow_text">Follow</button>
            </div>
            <div class="desc">
                <p>${reels_data[i][3]} <span class="show_text">more</span>
                </p>
                <div class="more">
                    <div class="music">
                        <img src="/static/images/music.png" >
                    </div>
                    <div class="position">
                        <img src="/static/images/map.png" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="likes">
    <div class="like">
        <img class="not_loved" src="/static/images/love.png" >
        <img class="loved" src="/static/images/heart.png" >
    </div>
    <div class="messsage">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#message_modal">
            <img src="/static/images/bubble-chat.png" >
        </button>
    </div>
    <div class="send">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#send_message_modal">
            <img src="/static/images/send.png" >
        </button>
    </div>
    <div class="save not_saved">
        <img class="hide saved" src="/static/images/save_black.png" >
        <img class="not_saved" src="/static/images/save-instagram.png" >
    </div>
    <div class="more">
        <img src="/static/images/show_more.png" >
    </div>
    <div class="profile">
        <img src="${reels_data[i][1]}" >
    </div>
</div>`;
    }else{
        reel_div.innerHTML = `<div class="video">
      <video src="${reels_data[i][0]}" loop>
      </video>
      <div class="content">
          <div class="sound">
              <img class="volume-up" src="/static/images/volume-up.png" >
              <img class="volume-mute" src="/static/images/volume-mute.png" >
          </div>
          <div class="play">
              <img src="/static/images/play-button-arrowhead.png" >
          </div>
          <div class="info">
              <div class="profile">
                  <h4><a href="#">
                          <img src="${reels_data[i][1]}" >
                          ${reels_data[i][2]}
                      </a></h4>
                  <span>.</span>
                  <button class="follow_text">Follow</button>
              </div>
              <div class="desc">
                  <p>${reels_data[i][3]} <span class="show_text">more</span>
                  </p>
                  <div class="more">
                      <div class="music">
                          <img src="/static/images/music.png" >
                      </div>
                      <div class="position">
                          <img src="/static/images/map.png" >
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="likes">
      <div class="like">
          <img class="not_loved" src="/static/images/love.png" >
          <img class="loved" src="/static/images/heart.png" >
      </div>
      <div class="messsage">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#message_modal">
              <img src="/static/images/bubble-chat.png" >
          </button>
      </div>
      <div class="send">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#send_message_modal">
              <img src="/static/images/send.png" >
          </button>
      </div>
      <div class="save not_saved">
          <img class="hide saved" src="/static/images/save_black.png" >
          <img class="not_saved" src="/static/images/save-instagram.png" >
      </div>
      <div class="more">
          <img src="/static/images/show_more.png" >
      </div>
      <div class="profile">
          <img src="${reels_data[i][1]}" >
      </div>
  </div>`;
    }
    
    reels_container.appendChild(reel_div);
  }
}

/**************************video**************************/
//play video onscroll
const videos = document.querySelectorAll("video");
const reels = document.querySelector(".reels");
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY + window.innerHeight;
  videos.forEach((video,index)=> {
    reels.children[index].removeAttribute("id");
    const videoPosition = video.getBoundingClientRect().top + video.offsetHeight / 2;
    if (scrollPosition > videoPosition && videoPosition>0 && videoPosition<= video.offsetHeight) {
      video.play();
      reels.children[index].setAttribute("id", "video_play");
    } else {
      video.pause();
    }
  });
});

//play && pause && mute video
let video_container = document.querySelectorAll(".video");
video_container.forEach( function(item){
  let video = item.children[0];
  //if the user click on the video pause it 
  let button_play = item.children[1].children[1];
  item.addEventListener("click", function(){
    if(button_play.classList.contains("opac_1")){
      video.play();
    }else{
      video.pause();
    }
    button_play.classList.toggle("opac_1");
  });
  //if the user click the mute btn make the video mute
  let mute_btn = item.children[1].children[0];
  let volum_up = mute_btn.children[0];
  let volum_mute = mute_btn.children[1];
  mute_btn.addEventListener("click", function(e){
    e.stopPropagation();
    if(!video.muted){
      video.muted = true;
      volum_up.classList.add("hide_img");
      volum_mute.classList.add("display");
    }else{
      video.muted=false;
      volum_up.classList.remove("hide_img");
      volum_mute.classList.remove("display");
    }
  });
  //change the text follow ==> following and the opposite
  let follow = item.children[1].children[2].children[0].children[2];
  follow.addEventListener("click", function(e){
    e.stopPropagation();
    follow.classList.toggle("following");
    if(follow.classList.contains("following")){
      follow.innerHTML= "Following";
    }else{
      follow.innerHTML= "Follow";
    }
    
  });
});

/**************************search+notif-section **************************/
//search section notif
let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");
search_icon.addEventListener("click", function(){
  search.classList.toggle("show");
});

let notification = document.getElementById("notification");
let notification_icon = document.querySelectorAll(".notification_icon");
notification_icon.forEach( (notif)=>{
  notif.addEventListener('click',function(){
    notification.classList.toggle("show");
  })
} 
)


/**************************icons+text change **************************/
//change the icon when the user click on it

//love btn
let love_icons = document.querySelectorAll(".like");
love_icons.forEach(function(icon){
  icon.addEventListener("click",function(){
      let not_loved = icon.children[0];
      let loved = icon.children[1];
      icon.classList.toggle("love");
      not_loved.classList.toggle("hide_img");
      loved.classList.toggle("display");
  })
});

//save btn
let save_icon = document.querySelectorAll(".save");
save_icon.forEach(function(save){
  save.addEventListener("click",function(){
    let not_save = save.children[1];
    let saved = save.children[0];
    not_save.classList.toggle("hide");
    saved.classList.toggle("hide");

})
})

//notification follow 
let not_follow = document.querySelectorAll("#notification .notif.follow_notif")
not_follow.forEach(item=>{
  let follow = item.children[0].children[1].children[0];
  follow.addEventListener("click", function(e){
    e.stopPropagation();
    follow.classList.toggle("following");
    if(follow.classList.contains("following")){
      follow.innerHTML= "Following";
      follow.style.backgroundColor = 'rgb(142, 142, 142)';
      follow.style.color = "black";
    }else{
      follow.innerHTML= "Follow";
      follow.style.backgroundColor = 'rgb(0, 149, 246)';
      follow.style.color = "white";
    }
    
  });
})

/**************************comments **************************/

//comments
let replay_com = document.querySelector(".comments .responses");
let show_replay = document.querySelector(".comments .see_comment");
let hide_com = document.querySelector(".comments .see_comment .hide_com");
let show_com = document.querySelector(".comments .see_comment .show_c");
if(replay_com){
  replay_com.classList.add("hide");
  hide_com.classList.add("hide");
  show_replay.addEventListener("click",function(){
    replay_com.classList.toggle("hide");
    show_com.classList.toggle("hide");
    hide_com.classList.toggle("hide");
  });
}


/*************emojie*************** */
$(document).ready(function() {
	$("#emoji").emojioneArea({
  	pickerPosition: "top",
    tonesStyle: "radio"
  });
});

$(document).ready(function() {
	$("#emoji_create").emojioneArea({
  	pickerPosition: "bottom",
    tonesStyle: "radio"
  });
});

$(document).ready(function() {
	$("#emoji_comment").emojioneArea({
  	pickerPosition: "bottom",
    tonesStyle: "radio"
  });
});
})

}

var counter = 1
if(counter==1){
  test(counter)
}
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const totalHeight = document.documentElement.scrollHeight;
  if (scrollPosition >= totalHeight - 25) {
    counter = counter + 1
    test(counter);
  }
});