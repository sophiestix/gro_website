import controller from './card.controller';

const CardComponent = {
    controller,
    scope: {},
    transclude: {
        'cardHeader': '?span',
        'cardTitle': 'h3'
    },
    template: `
    <div id="card" class="card">
        <span ng-transclude="cardHeader"></span>
        <heading ng-transclude="cardTitle" class="card-title"></heading>
        <ng-transclude></ng-transclude>
    </div>`
}

export default CardComponent;
