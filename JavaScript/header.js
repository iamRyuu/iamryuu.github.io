let searchbtn = document.querySelector('.searchbtn');
let closebtn = document.querySelector('.closebtn');
let searchbox= document.querySelector('.searchbox');
let navigation = document.querySelector('.navigation');
let menutoggle = document.querySelector('.menutoggle');
let header = document.querySelector('header');


searchbtn.onclick = function(){
    searchbox.classList.add('active');
    closebtn.classList.add('active');
    //searchbtn.classList.add('active');
    menutoggle.classList.add('hide')
    header.classList.remove('open');
}

closebtn.onclick = function(){
    searchbox.classList.remove('active');
    closebtn.classList.remove('active');
    //searchbtn.classList.add('active');
    menutoggle.classList.remove('hide')
}

menutoggle.onclick = function(){
    header.classList.toggle('open');
    searchbox.classList.remove('active');
    //closebtn.classList.remove('active');
    searchbtn.classList.add('active');
}