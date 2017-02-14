// Set streamers array and api variable
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb"];
var api = "https://wind-bow.gomix.me/twitch-api/";

// Get channels info
function channelInfo() {
    channels.forEach(function(channel) {
        function getUrl(type, name) {
            return api + type + "/" + name + "?callback=?";
        }
        // Check if channels are streaming
        $.getJSON(getUrl("streams", channel), function(data) {
            var game;
            var status;
            if (data.stream === null) {
                status = "Offline";
                game = "";
            } else {
                game = "Streaming: " + data.stream.game;
                status = "Online";
            }
            // General info from channels
            $.getJSON(getUrl("channels", channel), function(data) {
                var logo = data.logo;
                var name = data.display_name;
                var channelUrl = data.url;

                html = "<div class='col s12 m4'><div class='card medium z-depth-5'><div class='card-image'><img src='" +
                    logo + "' class='responsive-img'></div><div class='divider'></div><span class='card-title white-text'>" +
                    name + "</span><div class='card-content white-text'><span>" + status + "</span><p id='game'>" +
                    game + "</p></div><div class='card-action'><a href='" +
                    channelUrl + "' target='_blank'>Channel</a></div></div></div>";

                $("#channel-section").append(html);
            });
        });
    });
}

$(document).ready(function() {
    channelInfo();
});
