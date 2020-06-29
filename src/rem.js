function rem(){
    let html = document.documentElement || document.body;//兼容性写法

    html.style.fontSize =  html.clientWidth /7.5 + "px";
}
rem();

window.onresize = rem;