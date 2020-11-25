
$("button").click(function(){
    $(".first").animate({
            width:'+=50px',
            height: '+=50px'
    
        });
    $(".p1").animate({
        width:'+=50px',
        height: '+=50px'

        });
$("button").queue(function() {
    $(this).dequeue();
});$("div").animate({
            width: '-=50px',
            height:'-=50px'
        });
        $(".p1").animate({
            width:'-=50px',
            height: '-=50px'
    
        });
});