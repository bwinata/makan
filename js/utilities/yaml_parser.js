console.log("Hello World");

var reader = new FileReader();

reader.onload = function(e) {
    var text = reader.result;
    console.log(text);
};

$(document).ready(function (){
    // reader.readAsBinaryString('./content/san-francisco/coffee/places.yaml');
});