// $("button").click(function(){
//     $("p").fadeToggle(10000);    
// });
// // $("button").click(function() {
// //     $("p").fadeToggle(10000); //fadeIn() apparition et fadeOut() disparition
// // }); 

$("button").click(function(){
    $("div").animate({
            marginLeft:'+=50px'
    
});
$("button").queue(function() {
    $(this).dequeue();
});$("div").animate({
    marginLeft: '-=50px'
});
});