const music=new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id:"1",
        songName:`On My Way <br/>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/1.jpg"
    },
    {
        id:"2",
        songName:`Alan Walker-Fade <br/>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/2.jpg"
    },
    {
        id:"3",
        songName:`Cartoon - On & On <br/>
        <div class="subtitle">Daniel Levi</div>`,
        poster:"img/3.jpg"
    },
    {
        id:"4",
        songName:`Warriyo - Mortals <br/>
        <div class="subtitle">Mortals</div>`,
        poster:"img/4.jpg"
    },
    {
        id:"5",
        songName:`Ertugrul Gazi <br/>
        <div class="subtitle">Ertugrul</div>`,
        poster:"img/5.jpg"
    },
    {
        id:"6",
        songName:`Electronic music <br/>
        <div class="subtitle">Electro</div>`,
        poster:"img/6.jpg"
    },
    {
        id:"7",
        songName:`Agar tum sath ho <br/>
        <div class="subtitle">Tamashaa</div>`,
        poster:"img/7.jpg"
    },
    {
        id:"8",
        songName:`Suna hai <br/>
        <div class="subtitle">Neha Kakker</div>`,
        poster:"img/8.jpg"
    },
    {
        id:"9",
        songName:`Dilber <br/>
        <div class="subtitle">Satyamev Jayate</div>`,
        poster:"img/9.jpg"
    },
    {
        id:"10",
        songName:`Duniya <br/>
        <div class="subtitle">Luka chuppi</div>`,
        poster:"img/10.jpg"
    },
    {
        id:"11",
        songName:`Lagdi lahore Di <br/>
        <div class="subtitle">Street Dancer 3D</div>`,
        poster:"img/11.jpg"
    },
    {
        id:"12",
        songName:`Putt Jatt Da <br/>
        <div class="subtitle">Putt Jatt Da</div>`,
        poster:"img/12.jpg"
    },
    {
        id:"13",
        songName:`Baarishein <br/>
        <div class="subtitle">Atif aslam</div>`,
        poster:"img/13.jpg"
    },
    {
        id:"14",
        songName:`Vaaste <br/>
        <div class="subtitle">Dhvani bhanushali</div>`,
        poster:"img/14.jpg"
    },
    {
        id:"15",
        songName:`Lut Gaye <br/>
        <div class="subtitle">Jubin nautiyal</div>`,
        poster:"img/15.jpg"
    },
    {
        id:"16",
        songName:`Tu meri jindagi hai tu <br/>
        <div class="subtitle">Jubin nautiyal</div>`,
        poster:"img/16.jpg"
    },
    {
        id:"17",
        songName:`Batao yaad hai tumko wo jab dil ko churaya tha <br/>
        <div class="subtitle">Rahat Fateh ali</div>`,
        poster:"img/17.jpg"
    },
    {
        id:"18",
        songName:`Mere Dhol judaiyan <br/>
        <div class="subtitle">Ali sethi seha Gill</div>`,
        poster:"img/18.jpg"
    },
    {
        id:"19",
        songName:`Ek munde paagal ne saare <br/>
        <div class="subtitle">Ap Dhillon</div>`,
        poster:"img/19.jpg"
    },
    {
        id:"20",
        songName:`Dunny 82K <br/>
        <div class="subtitle">Ap Dhillon</div>`,
        poster:"img/20.jpg"
    }
    
]
Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

})


















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () =>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let items= document.getElementsByClassName('items')[0];

pop_art_right.addEventListener('click', () =>{
    items.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () =>{
    items.scrollLeft -= 330;
})

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
}

)

const makeallBackground=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    })
}

const makeallplay=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
        
    })
}


let index=0;
let poster_master_play=document.getElementById('poster-master-play')
let title=document.getElementsByClassName('title')[0];
Array.from(document.getElementsByClassName('playListPlay')).forEach((e,i)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        console.log(index);
        
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        music.play();

        let songTitles=songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach((elss) => {
            let { songName }=elss;
            title.innerHTML=songName;
            console.log(title.innerHTML);


            
        }
        )
        makeallBackground();
        document.getElementsByClassName('songitem')[index-1].style.background='rgb(105,105,105,.1)';
        makeallplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
        
        




        

        
    })
})

currentStart=document.getElementById('currentStart');
currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur/60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }

    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }

    currentStart.innerText=`${min2}:${sec2}`;
    
    let progressbar=parseInt((music_curr/music_dur)*100);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

    seek.addEventListener('change', ()=>{
        music.currentTime=seek.value*music.duration/100;

    })


    
    
})

let vol_icon=document.getElementById('vol-icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol-bar')[0];
let vol_dot=document.getElementById('vol-dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-mute-fill');


    }
    else if(vol.value>0 && vol.value<70){

        
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-down-fill');

    }
    else{
        
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');

    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;

    
    
})
let back=document.getElementById('back');
let next=document.getElementById('next');
back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songitem')).length;
    }
    
        
        
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill"); 
        
        music.play();

        let songTitles=songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach((elss) => {
            let { songName }=elss;
            title.innerHTML=songName;
            console.log(title.innerHTML);


            
        }
        )
        makeallBackground();
        document.getElementsByClassName('songitem')[index-1].style.background='rgb(105,105,105,.1)';
        makeallplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

})

next.addEventListener('click',()=>{
    index+=1;
    if(index>Array.from(document.getElementsByClassName('songitem')).length){
        index=1;
    }
    
        
        
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        
        music.play();

        let songTitles=songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach((elss) => {
            let { songName }=elss;
            title.innerHTML=songName;
            console.log(title.innerHTML);


            
        }
        )
        makeallBackground();
        document.getElementsByClassName('songitem')[index-1].style.background='rgb(105,105,105,.1)';
        makeallplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
        

})






























