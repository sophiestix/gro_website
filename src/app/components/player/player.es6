import controller from './player.controller';

const PlayerComponent = {
    controller,
    template: `
    <div id="player"></div>
    `
}

export default PlayerComponent;

// scope: {},
//     transclude: {
//         'paragSlot': 'p',
//       },
/* <div id="player" class="player">
    <p ng-transclude="paragSlot" class=""></p>
    <ng-transclude></ng-transclude>
    <iframe>
    </iframe>
    <iframe width="420" height="315"
        src="https://www.youtube.com/embed/99g4LFv82rs">
    </iframe>
</div> */
