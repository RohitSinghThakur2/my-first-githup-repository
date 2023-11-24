
const accordians = document.querySelectorAll(".accordian");

accordians.forEach(showanswer=> {
    const icon = document.querySelector(".icon");
    const answer = document.querySelector(".answer");

    showanswer.addEventListener('click',()=>{
        // icon.classList.toggle("active");
        // answer.classList.toggle("active");

        if (icon.classList.contains('active')) {
            icon.classList.remove("active");
            answer.style.maxHeight=null;
        } else {
            icon.classList.add("active");
            answer.style.maxHeight=answer.scrollHeight+ "px";
        }
    })
});

