import controller from './videos.controller';

const VideosComponent = {
    controller,
    template: `
    <div id="videos" class="videos">
        <div ng-repeat="video in $ctrl.mockVideos.videos" class="video-card">
            <span ng-bind-html="htmlSafe(video.video)"></span>
            <h3>{{video.title}}</h3>
            <p>{{video.description}}</p>
        </div>
    </div>`
}

export default VideosComponent;
