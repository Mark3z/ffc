$(document).ready(function() {

    var quote;
    var author;

    function newQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            },
            success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $("#quote").text(quote);
                if (author) {
                    $("#author").text(author);
                } else {
                    $("author").text("Unknown");
                }
            }
        });
    }
    newQuote();

    $(".new-quote").on("click", function() {
        newQuote();
    });

    $("#tweet").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -" + author));
    });
});
