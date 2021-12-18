let trigger = document.getElementById("trigger");

let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".close");

trigger.addEventListener("click", function(){
    openModal();
});

closeBtn.addEventListener("click", function(){
    closeModal();
});

modal.addEventListener("click", function(e){
    if(e.target !== modal){
        return;
    }
    closeModal();
})

document.addEventListener("keydown", function(e){
    if(e.key == "Escape"){
        closeModal(); 
    }
})


function openModal(){
    modal.classList.add("active");
}

function closeModal(){
    modal.classList.remove("active");
}