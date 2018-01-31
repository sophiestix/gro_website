import controller from './section.controller';

const SectionComponent = {
    controller,
    scope: {},
    transclude: {
        'headingSlot': 'h2',
    },
    template: `
    <div id="section" class="section section-shadow">
        <heading ng-transclude="headingSlot" class="section-heading"></heading>
        <div class="section-heading-bottom"></div>
        <ng-transclude></ng-transclude>
    </div>`
}

export default SectionComponent;
