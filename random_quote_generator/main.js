$(document).ready(function() {
    // Create variables to generate random qotes
    var randomQuote;
    var author;
    var randomNumber;

    function newQuote() {
        var quote = ["Mind your thoughts, as they become your words. Mind your words, as they become your actions. Mind your actions, as they become you.",
            "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
            "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
            "The quieter you become, the more you are able to hear.",
            "In order to carry a positive action we must develop here a positive vision.",
            "Calm mind brings inner strength and self-confidence, so that's very important for good health.",
            "We can never obtain peace in the outer world until we make peace with ourselves",
            "Don't live the same year 75 times and call it a life.",
            "There is no way to happiness. Happiness is the way.",
            "There is only one success: to be able to spend your life in your own way.",
            "If you don't have many possessions, then you don't need to work all you life like a slave to sustain them, and therefore you have more time for yourself."
        ];
        var author = ["Buddha", "Buddha", "Yoda", "Lao Tzu", "Dalai Lama", "Dalai Lama", "Dalai Lama", "Robin Sharma", "Thich Nhat Hanh", "Christopher Morley", "Jose Mujica"];
        randomNumber = Math.floor(Math.random() * quote.length);
        randomQuote = quote[randomNumber];
        author = author[randomNumber];

        $('#quote').text(randomQuote);
        $('#author').text(author);
    }
    newQuote();

    $(".new-quote").on("click", function() {
        newQuote();
    });

    $("#tweet").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -" + author);
    });
});
