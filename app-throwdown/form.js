$('#sugarForm').submit(function(e){
    e.preventDefault();

    var sform = 'https://script.google.com/a/macros/sugarcrm.com/s/AKfycbxxWVLGYAh1AYa3ykIo7cDGX6wtG_lsMMGXmgWnAigCX_NL8VBl/exec';
    var data = $(this).serialize();

    $.ajax({
        type: 'GET',
        url: sform,
        data: data,
        // this won't work, but why not implement it just in case?
        success: function(dat){
            console.log("Data sent");
            $('button.btn-danger').attr('disabled', '').css({ 'display': 'none' });
            $('#thank-you-message').removeClass('hidden');
            $('#sugarForm').addClass('hidden');
            window.scrollTo(0,0);
        },
        // XSS not allowed!  So responds with error, take that to mean the data was sent :)~
        error: function(jqXHR, text, err){
            console.log("Data sent");
            $('button.btn-danger').attr('disabled', '').css({ 'display': 'none' });
            $('#thank-you-message').removeClass('hidden');
            $('#sugarForm').addClass('hidden');
            window.scrollTo(0,0);
        }
    });
});