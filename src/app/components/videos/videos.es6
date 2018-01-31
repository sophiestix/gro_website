import controller from './videos.controller';

const VideosComponent = {
    controller,
    template: `
    <section>
        <h2>my videos</h2>
        <div id="videos" class="videos">
            <card ng-repeat="video in $ctrl.mockVideos.videos">
                <span ng-bind-html="htmlSafe(video.video)"></span>
                <h3>{{video.title}}</h3>
                <p>{{video.description}}</p>
            </card>
        </div>
    </section>
    `
}

export default VideosComponent;
