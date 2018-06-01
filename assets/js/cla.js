/*Contact form handling. Idea and inspiration from 
https://gohkhoonhiang.github.io/2016/05/simple-contact-form-on-jekyll/
*/
$(document).ready(function(){

    $('.help-block').hide();
    $('#cla-form-submit').click(function(e) {
        e.preventDefault();
        var contactName = $('#contact-name').val();
        var contactEmail = $('#contact-email').val();
        var githubUsername = $('#github-user').val();
        var contactAddress= $('#contact-address').val();
        var contribPolicy = $('#contrib-policy').val();
        if (!contactName) {
            $('#contact-name-error').html("Full name is required");
            $('#contact-name-error').show();
            $('#contact-name').parent().addClass("has-warning");
            return;
        } else {
            $('#contact-name-error').html("");
            $('#contact-name-error').hide();
            $('#contact-name').parent().removeClass("has-warning");
        }
        if (!contactEmail ) {
            $('#contact-email-error').html("Contact email is required");
            $('#contact-email-error').show();
            $('#contact-email').parent().addClass("has-warning");
            return;
        } else {
            $('#contact-email-error').html("");
            $('#contact-email-error').hide();
            $('#contact-email').parent().removeClass("has-warning");
        }
        if (!githubUsername ) {
            $('#github-user-error').html("GitHub username is required");
            $('#github-user-error').show();
            $('#github-user').parent().addClass("has-warning");
            return;
        } else {
            $('#github-user-error').html("");
            $('#github-user-error').hide();
            $('#github-user').parent().removeClass("has-warning");
        }
        if (!contactAddress ) {
            $('#contact-address-error').html("GitHub username is required");
            $('#contact-address-error').show();
            $('#contact-address').parent().addClass("has-warning");
            return;
        } else {
            $('#contact-address-error').html("");
            $('#contact-address-error').hide();
            $('#contact-address').parent().removeClass("has-warning");
        }
        var url = "//docs.google.com/forms/d/e/1FAIpQLScNmhe7aiFkTyIlKgWtR3vmtF6RTCZI1wDvMQQqfUvQZ2qfmw/formResponse";
        var data = {
            'entry.80898643': contactName,
            'entry.2059855177': contactEmail,
            'entry.623309498': githubUsername,
            'entry.789029173': contactAddress,
            'entry.1261061474': contribPolicy,
        };
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            statusCode: {
                0: function() {
                    console.log("unknown");
                    window.location.href = "confirmation/";
                },
                200: function() {
                    console.log("success");
                    window.location.href = "confirmation/";
                }
            }
        });
    });
    $('.form-control').change(function() {
        if ($(this).val()) {
            $(this).next('.help-block').html("");
            $(this).next('.help-block').hide();
            $(this).parent().removeClass("has-warning");
        }
    });

});
