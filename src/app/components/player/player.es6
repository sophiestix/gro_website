import controller from './player.controller';

const PlayerComponent = {
    controller,
    scope: {},
    transclude: {
        'paragSlot': 'p',
      },
    template: `
    <div id="player" class="player">
        <p ng-transclude="paragSlot" class=""></p>
        <ng-transclude></ng-transclude>
    </div>`
}

export default PlayerComponent;
