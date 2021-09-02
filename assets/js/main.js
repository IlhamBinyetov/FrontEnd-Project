"use strict"

$(document).ready(function () {
    $(".how-it-work").click(function () {
        $(".how-it-work-elements").slideToggle(500);
        $(".arrow").toggleClass("rotate");
        if ($(".arrow").hasClass("rotate")) {
            $(".arrow").html("&#x2B07");
        }
        else {
            $(".arrow").html("&#x27A1")
        }


    });


    $(".resources").click(function () {
        $(".resources-elements").slideToggle(500);
        $(".resources-elements").css("z-index", "-1")
        $(".arrow_resources").toggleClass("rotate");
        if ($(".arrow_resources").hasClass("rotate")) {
            $(".arrow_resources").html("&#x2B07");
        }
        else {
            $(".arrow_resources").html("&#x27A1")
        }

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

    $("#show").click(function () {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
            this.innerHTML = "Hide"
        } else {
            x.type = "password";
            this.innerHTML = "Show"
        }
    });

    $(".button-login").click(function (e) {
        e.preventDefault();
        let pass = $("#password");
        if (pass.val() == "") {
            $("#error-password").show();
            pass.css("border-color", "red")
        } else {
            $("#error-password").hide();
        }
    })

    $(".button-login").click(function (e) {
        e.preventDefault();
        let email = $("#email");
        if (email.val() == "") {
            $("#error-email").show();
            email.css("border-color", "red")
        } else {
            $("#error-email").hide();
        }
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

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

