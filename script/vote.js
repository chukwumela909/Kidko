
//Hide Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
}

handlePreloader()


const vote_btn = document.getElementById("vote")


vote_btn.addEventListener('click' , function(){
    console.log("clicked")
})