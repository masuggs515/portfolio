// 

const $toggleBtn = $('.toggle');
const $showcase = $('.showcase');
const $mainAboutMe = $('#main');
const $aboutMeOverlay = $('#overlay');
const $menu = $('.menu')

$toggleBtn.on('click', () => {
    $toggleBtn.toggleClass('active');
    $showcase.toggleClass('active');
    $mainAboutMe.toggleClass('active');
    $aboutMeOverlay.toggleClass('active');
    $menu.toggleClass('active');

})

// cursor 
const $cursor = $('.cursor')


$('body').on("mousemove", (e) => {
    $cursor.attr('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px`)
})

// transitions
window.onload = () => {
    const tranEl = document.querySelector('.transition');
    const tranLoad = document.querySelector('.tran-load')
    setTimeout(() => {
        tranLoad.classList.remove('active2');
    }, 300);

    const anchors = document.querySelectorAll('.transition-a')

    for (let i = 0; i < anchors.length; i++) {
        let a = anchors[i];
        
        a.addEventListener('click', (e)=> {
            e.preventDefault();
            let target = e.target.href;

            tranEl.classList.add('active');

            setTimeout(() => {
                window.location.href = target;
            }, 300);
        })
    }
    
}




