class PlayerController {
    constructor () {
        
    }

    $onInit() {
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: 'htEmKnJ0wlo',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
            }
        }
        function stopVideo() {
            player.stopVideo();
        }
    }
}

export default PlayerController;

// var apiKey = 'AIzaSyAH5PYYBhWdLEn2ln3t2iIj04jX6nXKxkU';
// https://developers.google.com/youtube/v3/docs/channels/list#usage

// 1. retrived the playlistIds using this url:

// /youtube/v3/playlists',
// {'channelId': 'UCCN-6225-ASUzvPPhiSboJQ',
// 'part': 'snippet,contentDetails'});

// https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCCN-6225-ASUzvPPhiSboJQ&key=AIzaSyAH5PYYBhWdLEn2ln3t2iIj04jX6nXKxkU

// 2. Retrived the videoIds for each playlist using this url:

// /youtube/v3/playlistItems',
// {'playlistId': 'PLY3QcufluVdT2jOnQOYVr1aLtD2V6pBzO',
// 'part': 'snippet,contentDetails'});

// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLY3QcufluVdT2jOnQOYVr1aLtD2V6pBzO&key=AIzaSyAH5PYYBhWdLEn2ln3t2iIj04jX6nXKxkU


// https://console.developers.google.com/apis/credentials?project=gro-website-193413
// https://www.youtube.com/channel/UCbDrrvPXCMr9T8Dn0OQSMFg

// https://developers.google.com/youtube/player_parameters
// https://github.com/jgthms/juketube/blob/master/app.js
// https://github.com/frandiox/OnsenUI-YouTube/blob/master/js/app.js
// https://medium.com/the-web-tub/make-a-youtube-app-with-angularjs-and-onsen-ui-c836e7e046e0
// https://developers.google.com/youtube/v3/sample_requests
// https://developers.google.com/youtube/iframe_api_reference#Getting_Started
// https://developers.google.com/youtube/v3/code_samples/javascript#my_uploaded_videos
// https://developers.google.com/youtube/v3/docs/channels/list
// https://developers.google.com/youtube/v3/guides/implementation/videos
// https://developers.google.com/api-client-library/javascript/samples/samples
// https://developers.google.com/api-client-library/javascript/start/start-js
// https://developers.google.com/youtube/v3/libraries
// https://developers.google.com/youtube/v3/getting-started
// https://developers.google.com/api-client-library/javascript/samples/samples
// https://github.com/youtube/api-samples/blob/master/javascript/README.md
// https://github.com/youtube/api-samples/blob/master/javascript/my_uploads.js
// https://github.com/youtube/api-samples/blob/master/javascript/auth.js
// https://github.com/youtube/api-samples/blob/master/javascript/quickstart.html
// https://github.com/google/google-api-javascript-client/blob/master/samples/simpleRequest.html
// https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest
