$("#input1").keydown(function(){
    let size = document.getElementById('input1').value.length;
    
    if (size < 8) {
    $('.msg').text("username must be 8 characters");
    }
    else {
        $('.msg').text("")
    }
})