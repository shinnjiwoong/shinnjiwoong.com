

// VARIABLES
const index_btn = document.querySelector('.project-view-index');
const home_btn = document.querySelector('.project-view-home');
const detail_btn = document.querySelector('.project-view-detail');
const intro_page = document.querySelector('.intro-page-container');
const index_page = document.querySelector('.index-page-container');
const detail_page = document.querySelector('.detail-page-container');
const all_project_btn = document.querySelector('.all-project-btn');
const project_lists = document.querySelector('.index-projects-box');
const top_container = document.querySelector(".top-container");
const bottom_container = document.querySelector(".bottom-container");
const cursor = document.querySelector('.cursor-container');
const cursor_design = document.querySelector('.cursor');
const intro_title_container = document.querySelector('.intro-top-bg');
const intro_bottom = document.querySelector(".intro-bottom-bg");
const bg_container = document.querySelector(".bg-container");
const change_btn = document.querySelector(".change-btn");
const project_wrap = document.querySelector(".project-wrap");
let intro_title = document.querySelector('.intro-title-1')
let title_slogans = ["portfolio", "website", ":)"]
let bg_color = ["rgb(0, 204, 0)", "rgb(255, 51, 51)", "rgb(204, 153, 102)", "rgb(0, 102, 51)", "rgb(255, 255, 0)", "rgb(0, 0, 255)", "rgb(163, 204, 75)", "rgb(255, 132, 201)", "rgb(255, 0, 165)", "rgb(255, 0, 0)", ]
let view_mode_flag = "home";
let project_num = project_lists.children.length;



// CHANGE THE BG
change_btn.addEventListener("click", ()=>{
    intro_title.style.display = "none";
    bg_container.style.zIndex = "100";
    intro_title_container.style.width = "50vw";
    intro_title_container.style.height = "100vh";
    intro_title_container.style.position = "absolute";
    intro_bottom.style.width = "50vw";
    intro_bottom.style.height = "100vh";
    intro_bottom.style.position = "absolute";
    intro_bottom.style.left = "50vw";
    intro_bottom.style.top = "0vh";
    top_container.style.display = 'none';
    bottom_container.style.display = 'none';
    setTimeout(function(){
        project_wrap.style.opacity = "100%"
        project_wrap.style.zIndex = "110";
    }, 500);
})

// CURSOR ANIMATION
let window_width = window.innerWidth;
let window_height = window.innerHeight;
setInterval(function(){
    intro_title_container.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    intro_title.innerText = title_slogans[Math.floor(Math.random() * title_slogans.length)];
    intro_title.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    intro_bottom.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}, 2000)
window.addEventListener("mousemove", (e)=>{
    intro_title_container.style.opacity = `${100/window_width*e.clientX}%`;
    intro_bottom.style.opacity = `${100/window_height*e.clientY}%`
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    if(view_mode_flag == "home"){
        cursor_design.style.border = "solid 1.5px rgb(25, 25, 25)"
        cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            cursor_design.style.borderRadius = "100%"
        }else{
            cursor_design.style.width = "10px";
            cursor_design.style.height = "10px";
            cursor_design.style.borderRadius = "0%"
            cursor_design.style.backgroundColor = "rgb(25, 25, 25)"
        }
    }else if(view_mode_flag == "index"){
        cursor_design.style.border = "solid 1.5px rgb(25, 25, 25)"
        cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")||e.target.classList.contains("all-project-btn")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            cursor_design.style.borderRadius = "100%"
            }else if(e.target.classList.contains("index-tag-container")){
                cursor_design.style.width = "100px";
                cursor_design.style.height = "100px";
                cursor_design.style.borderRadius = "100%"
                cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
            }else{
                cursor_design.style.width = "10px";
                cursor_design.style.height = "10px";
                cursor_design.style.borderRadius = "0%"
                cursor_design.style.backgroundColor = "rgb(25, 25, 25)"
            }
    }else if(view_mode_flag == "detail"){
        cursor_design.style.border = "solid 1.5px rgb(250, 250, 250)"
        cursor_design.style.backgroundColor = "rgb(250, 250, 250, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("detail-left-click")||e.target.classList.contains("detail-right-click")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            cursor_design.style.borderRadius = "100%"
            }
        else{
            cursor_design.style.width = "10px";
            cursor_design.style.height = "10px";
            cursor_design.style.borderRadius = "0%"
            cursor_design.style.backgroundColor = "rgb(250, 250, 250)"
        }
    }
})
// INTRO PAGE ANIMATION
window.addEventListener("load", ()=>{
    intro_page.style.top = "0vh";
    index_page.style.top = "100vh";
    detail_page.style.top = "200vh"
    index_btn.style.color = "rgb(25, 25, 25)"
    index_btn.style.border = "solid 1px rgb(25, 25, 25)"
    home_btn.style.color = "rgb(25, 25, 25)"
    home_btn.style.border = "solid 1px rgb(25, 25, 25)"
    detail_btn.style.color = "rgb(25, 25, 25)"
    detail_btn.style.border = "solid 1px rgb(25, 25, 25)"
})
index_btn.addEventListener('click', ()=>{
    view_mode_flag = "index";
    intro_page.style.top = "-100vh";
    index_page.style.top = "0vh";
    detail_page.style.top = "100vh"
    index_btn.style.color = "rgb(25, 25, 25)"
    index_btn.style.border = "solid 1px rgb(25, 25, 25)"
    home_btn.style.color = "rgb(25, 25, 25)"
    home_btn.style.border = "solid 1px rgb(25, 25, 25)"
    detail_btn.style.color = "rgb(25, 25, 25)"
    detail_btn.style.border = "solid 1px rgb(25, 25, 25)"
})
home_btn.addEventListener('click', ()=>{
    view_mode_flag = "home";
    intro_page.style.top = "0vh";
    index_page.style.top = "100vh";
    detail_page.style.top = "200vh"
    index_btn.style.color = "rgb(25, 25, 25)"
    index_btn.style.border = "solid 1px rgb(25, 25, 25)"
    home_btn.style.color = "rgb(25, 25, 25)"
    home_btn.style.border = "solid 1px rgb(25, 25, 25)"
    detail_btn.style.color = "rgb(25, 25, 25)"
    detail_btn.style.border = "solid 1px rgb(25, 25, 25)"
})
detail_btn.addEventListener("click", ()=>{
    view_mode_flag = "detail";
    intro_page.style.top = "-200vh";
    index_page.style.top = "-100vh";
    detail_page.style.top = "0vh";
    index_btn.style.color = "rgb(250, 250, 250)"
    index_btn.style.border = "solid 1px rgb(250, 250, 250)"
    home_btn.style.color = "rgb(250, 250, 250)"
    home_btn.style.border = "solid 1px rgb(250, 250, 250)"
    detail_btn.style.color = "rgb(250, 250, 250)"
    detail_btn.style.border = "solid 1px rgb(250, 250, 250)"
})

// TAG FILTERING
function filtering_tags(tag){
    console.log(tag)
    
    for(let i = 0; i<project_num; i++){
        let flag = false
        let tag_childs = project_lists.children[i].children[0].children[3].children;
        let child_num = project_lists.children[i].children[0].children[3].children.length;
        for(let j = 0; j<child_num; j++){
            // console.log(tag_childs[j].classList[1])
            if(tag_childs[j].classList[1] == tag){
                flag = true
                project_lists.children[i].style.display = "block";
                break;
            };
        }
        if(flag == false){
            project_lists.children[i].style.display = "none";
        }
    }
}
window.addEventListener("click", (e)=>{
    // console.log(e.target)
    const classes = e.target.classList
    let tag_type = ""
    if(classes.contains("index-tag-container")){
        all_project_btn.style.opacity = "100%";
        all_project_btn.style.pointerEvents = "auto";
        tag_type = classes[1];
        filtering_tags(tag_type);
    }
    
})

all_project_btn.addEventListener("click", ()=>{
    for(let i = 0; i<project_num; i++){
        project_lists.children[i].style.display = "block";
    }
    all_project_btn.style.opacity = "0%";
    all_project_btn.style.pointerEvents = "none";
})