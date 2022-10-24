$(document).ready(function(){
    $("all").click(function(){
        $(".daily-blue, .daily-orange, .daily-blue2, .daily-green").show();
        $("#month, #saveSubmit").hide();
    });
});


$(document).ready(function(){
    $("all").click(function(){
        $(".daily-blue, .daily-orange, .daily-blue2, .daily-green").show();
        $("#month, #saveSubmit").hide();
    });
});

$(document).ready(function(){
    $("#jake").click(function(){
        $(".daily-orange").css("background-color", "#fff");
        $(".daily-green").css("background-color", "#fff");
        $("#dropdownMenuButton").html("Jake Webber");
        $("#remove1, #remove2, #remove3, #remove4").html("");
        $("#num1").html("5.00");
        $("#num2").html("3.00");
        $("#num3").html("0.5");
        $("#num4").html("0.5");
        $("#num5").html("2.00");
        $("#num6").html("0.5");
        $("#num7").html("0.5");
        $("#num8").html("1.00");
        $("#num9").html("7.00");
        $("#num10").html("5.00");
    });
});

$(document).ready(function(){
    $("#all").click(function(){
        $(".daily-orange").css("background-color", "#FCEAD2");
        $(".daily-green").css("background-color", "#A9F4C3");
        $("#dropdownMenuButton").html("ALL EMPLOYEES");
        $("#remove1").html("Ana Morin - ");
        $("#remove2").html("Drive Time");
        $("#remove3").html("Ben Barron -");
        $("#remove4").html("Lunch Break");
        $("#num1").html("25.00");
        $("#num2").html("3.00");
        $("#num3").html("5.00");
        $("#num4").html("1.15");
        $("#num5").html("30.00");
        $("#num6").html("2.00");
        $("#num7").html("3.00");
        $("#num8").html("1.00");
        $("#num9").html("68.00");
        $("#num10").html("7.15");
    });
});

$(document).ready(function(){
    $(".fa-cog").click(function(){
        $("#settings").show();
        $("#month, #saveSubmit").hide();
    });
});

$(document).ready(function(){
    $("#close-settings").click(function(){
        $("#settings").hide();
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        $("#saveSubmit").show();
        $("#info").html("Timesheet for August 1, 2021 to August 7, 2021 has been submitted.");
        $("#month, #settings").hide();
    });
});

$(document).ready(function(){
    $("#save").click(function(){
        $("#saveSubmit").show();
        $("#info").html("Timesheet for August 1, 2021 to August 7, 2021 has been saved.");
        $("#month, #settings").hide();
    });
});

$(document).ready(function(){
    $("#close-submit").click(function(){
        $("#saveSubmit").hide();
    });
});

$(document).ready(function(){
    $(".daily-blue").click(function(){
        $("#dailyOne").show();
        $("#name-change").html("Jake Webber");
        $("#work-change").html("Work Time");
        $("#dailyOne").css("background-color", "#D2F0FC");
    });
});

$(document).ready(function(){
    $(".daily-orange").click(function(){
        $("#dailyOne").show();
        $("#name-change").html("Ana Morin");
        $("#work-change").html("Drive Time");
        $("#dailyOne").css("background-color", "#FCEAD2");
    });
});

$(document).ready(function(){
    $(".daily-green").click(function(){
        $("#dailyOne").show();
        $("#name-change").html("Ben Barron");
        $("#work-change").html("Job Site Time");
        $("#dailyOne").css("background-color", "#A9F4C3");
    });
});

$(document).ready(function(){
    $(".daily-blue2").click(function(){
        $("#dailyOne").show();
        $("#name-change").html("Jake Webber");
        $("#work-change").html("Lunch Time");
        $("#dailyOne").css("background-color", "#D2F0FC");
    });
});

$(document).ready(function(){
    $("#close-dailyOne").click(function(){
        $("#dailyOne").hide();
    });
});

function monthOn() {
  document.querySelector("#month").style.display = "block";
}

function monthOff() {
  document.querySelector("#month").style.display = "none";
}

function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}

function dailyOn() {
  document.querySelector("#daily-dates").style.display = "block";
}

function dailyOff() {
  document.querySelector("#daily-dates").style.display = "none";
}

function allOn() {
  document.querySelector("#employee-dd").style.display = "block";
}

function allOff() {
  document.querySelector("#employee-dd").style.display = "none";
}
