import controller from './header.controller';

const HeaderComponent = {
    controller,
    template: `
    <div>
        <img src="/Users/zsofiaprivate/Google Drive/Coding/Gro_website/src/assets/img/8321.jpg"/>
        <div id="logo">X</div>
        <div>
            <span ng-repeat="section in $ctrl.sections">{{ section.name }}</span>
        </div>
    </div>`
}

export default HeaderComponent;
