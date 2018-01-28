import controller from './videos.controller';

const VideosComponent = {
    controller,
    template: `
    <div id="videos">
        <div ng-repeat="item in $ctrl.mockData.items">
            {{item.snippet.title}}
        </div>
    </div>`
}

export default VideosComponent;
// ng-repeat="icon in $ctrl.iconData.icons"