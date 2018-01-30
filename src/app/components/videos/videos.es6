import controller from './videos.controller';

const VideosComponent = {
    controller,
    template: `
    <card>
        <h2>my videos</h2>
        <div id="videos" class="videos">
        <div ng-repeat="video in $ctrl.mockVideos.videos" class="video-card">
            <span ng-bind-html="htmlSafe(video.video)"></span>
            <h3>{{video.title}}</h3>
            <p>{{video.description}}</p>
        </div>
    </card>
    `
}

export default VideosComponent;
