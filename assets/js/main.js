"use strict"

$(document).ready(function () {
    $(".how-it-work").click(function () {
        $(".how-it-work-elements").slideToggle(500);
        $(".rotate").toggleClass('flip');
    });
    $(".resources").click(function () {
        $(".resources-elements").slideToggle(500);
        $(".resources-elements").css("z-index", "-1")
    });
    $(".how-it-work-hamburger").click(function () {
        $(".how-it-work-hamburger-elements").toggle();
    })
    $(".resources-hamburger").click(function () {
        $(".resources-hamburger-elements").toggle();
        // $(".resources-hamburger-elements").css("z-index", "1")
    });

    $('.hamburger').click(function () {
        $('.custom-hamburger-menu').toggle();
    })

    $(".videotag").click(function (e) {
        console.log("geldi");
        e.preventDefault();
        $(".video-container").addClass("show")
    })
    $(".close").click(function () {
        $(".video-container").removeClass("show")
        $('.youtube').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    })


});



const personalInformations = Array.from(document.querySelectorAll(".personal-information"));
const personalTexts = Array.from(document.querySelectorAll(".testimonial-content"));

const ClearActives = function () {
    personalInformations.forEach(personalInformation => {
        personalInformation.classList.remove("active")
    });
    personalTexts.forEach(personalText => {
        personalText.classList.remove("active")
    })
}

personalInformations.forEach(personalInformation => {
    personalInformation.onclick = function () {
        ClearActives();


        const targetId = personalInformation.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        personalInformation.classList.add("active");
        targetContent.classList.add("active");

    }

})

// function myFunction() {
//     var x = document.getElementById("show");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// }

// let password = document.querySelector("#password");
// let button = document.querySelector(".button-login");
// button.addEventListener("click", function () {

//     let text = "";
//     if (password.innerHTML = "") {
//         text = "Please fill in your password";
//     }
//     document.querySelector("#error-password").innerHTML = text;
// })

