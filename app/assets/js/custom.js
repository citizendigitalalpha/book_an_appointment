$(function () {  
    $(".appointmentbutton").click(function () {
        $(".appointment-first").addClass("hidden");
        $(".appointment-times").removeClass("hidden");
    });

    $(".locationbutton").click(function () {
        $(".locationchoose").addClass("hidden");
        $(".location-box").removeClass("hidden");
    });


    $(".locationsubmit").click(function () {
        var location = $('#customer-location').val();
        $(".locationplace").text(location);
        $(".locationchoose").removeClass("hidden");
        $(".location-box").addClass("hidden");
    });
});
