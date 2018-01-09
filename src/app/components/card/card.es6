import controller from './card.controller';

const CardComponent = {
    controller,
    scope: {},
    transclude: {
        'headingSlot': 'h2',
      },
    template: `
    <div id="card" class="card card-shadow">
        <heading ng-transclude="headingSlot" class="card-heading"></heading>
        <ng-transclude></ng-transclude>
    </div>`
}

export default CardComponent;