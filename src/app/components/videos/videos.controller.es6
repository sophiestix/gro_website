import mock from './mock-data/mock';
import playlist1 from './mock-data/playlists/playlist-1';
import playlist2 from './mock-data/playlists/playlist-2';
import mockVideos from './mock-data/mock.videos';

class VideosController {
    constructor (
        $scope, 
        $sce
    ) {
        this.mockData = mock;
        this.playlist1 = playlist1;
        this.playlist2 = playlist2;
        this.mockVideos = mockVideos;

        this.videoIds = [
            'htEmKnJ0wlo',
            '9ul2fEwEl_0',
            'vFiLl9_jfns',
            '7DgrF619e9w',
            'JXsvKphqAFo',
            'Gnppe79b2HI',
            'yrm-V69OCMA',
            '6FVqvj4zbKE'
        ]

        function createUrl() {}

        $scope.htmlSafe = function (data) {
            return $sce.trustAsHtml(data);
        }
    }

    $onInit() {

    }
}

export default VideosController;
