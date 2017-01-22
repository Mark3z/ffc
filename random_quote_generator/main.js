$(document).ready(function() {
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
      success: function(data) {
        quote = data.quoteText;
        author = data.quoteAuthor;
        $("#quote").html(quote);
        $("#author").html(author);
      }
    });
  }
  newQuote();

  $(".new-quote").click(function() {
    newQuote();
  });

  $("#tweet").click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
  });
});
