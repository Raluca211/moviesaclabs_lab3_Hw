

var images = [
    "Images/landscape-mountains-nature-lake.jpg",
    "Images/Rocky.Mountain.National.Park.original.3521.jpg",
    "Images/mountains_hd.jpg",
    "Images/396.jpg",
    "Images/448.jpg",
    "Images/Amazing-Pictures-Of-Mountains.jpg",
    "Images/winter.jpg"


];



$(".radio").append("<input type='radio' name='radio' id='0' checked>");
addRadio();
function addRadio() {
    var i;
    for (i = 1; i < images.length; ++i) {
            $(".radio").append("<input type='radio' name='radio' id='"+i+"'>");
        }
    }



var prevb = $("#prev");
var nextb = $("#next");

var next = 0;
var prev = images.length - 1;;

$("#imgs").attr("src", images[next]);



nextb.click(function () { 


    next++;
    if (next == images.length) {
        next = 0;
    }
    $("#" + next).prop("checked", true);
    $("#imgs").attr('src', images[next]);
   
    console.log(next);
    prev = next - 1;





});

prevb.click(function () {



    if (prev < 0) {
        prev = images.length-1;

    }

    $("#" + prev).prop("checked", true);
    $("#imgs").attr('src', images[prev]);
   
    console.log(prev);
    next = prev;
    prev--;


});


$("input[name='radio']").click(function () {
    //alert("Clicked");
    console.log(this.id);
    $("#imgs").attr('src', images[this.id]);
    prev = this.id-1;
    next = this.id;
});