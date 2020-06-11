// header 
$(document).ready(function () {
    $('.navBar').animate({ left: `-${navBarWidth}` });
});


let navBarWidth = $('.navBar').innerWidth();
$('.fa-times').click(function () {
    $('.navBar').animate({ left: `-${navBarWidth}` }, 500);
    $('.parent').animate({ left: `0px` }, 500);
    // window.alert(navBarWidth)
})

$('.parent').click(function () {
    $('.navBar').css("visibility", "visible");
    $('.navBar').animate({ left: `0px` }, 500);

    $('.parent').animate({ left: `${navBarWidth}` }, 500)
})

//accordtion
$(document).ready(function () {
    $('.accordion .content').hide();
    $('.accordion .tittle').addClass('closed').removeClass('opend')

    $('.accordion .content').first().show().addClass('opend').removeClass('closed');
});

$('.accordion .tittle').click(function () {
    let currntItem = $(this)
    // $('.accordion .content').slideUp(500);
    // $(this).next().slideDown(500);

    if (currntItem.hasClass('opend') == true) {
        $('.accordion .content').slideUp(500);
        $('.accordion .tittle').addClass('closed').removeClass('opend')
    } else {
        $('.accordion .content').slideUp(500);
        $(this).next().slideDown(500);
        $(this).addClass('opend').removeClass('closed')
    }
})
//  counter
let second = $('.second');
let secondCounter = 60;
let minute = $('.minute');
let minuteCounter = 60;
let hour = $('.hour');
let hourCounter = 24;
let Day = $('.Day');
let DayCounter = 365;
hour.html(`${hourCounter}`);
second.html(`${secondCounter}`);
minute.html(`${minuteCounter}`);
Day.html(`${DayCounter}`);
let myInterval = setInterval(secondFun, 1000);
function secondFun() {
    secondCounter--;
    second.html(`${secondCounter}`);
    if (secondCounter == 0) {
        secondCounter = 60;
        minuteFun()
    } else { }
}

function minuteFun() {
    minuteCounter--;
    minute.html(`${minuteCounter}`)

    if (minuteCounter == 0) {
        minuteCounter = 60;
        hourFun()
    } else { }
}
function hourFun() {
    hourCounter--;
    hour.html(`${hourCounter}`);

    if (hourCounter == 0) {
        minuteCounter = 24;
        DaysFun()
    } else { }
}

function DaysFun() {
    DayCounter--;
    Day.html(`${DayCounter}`);

    if (DayCounter == 0) {
        clearInterval(myInterval)
    } else { }
}

// Form
let remLetter = $('.letter');
let letters;
$('.masseage').keyup(function () {
    letters = $('.masseage').val().length;
    letters = 100 - letters;
    if (letters <= 0) {
        remLetter.html('your available character finished');
    } else {
        remLetter.html(letters);
    }

    console.log(letters)
});