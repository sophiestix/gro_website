import controller from './navbar.controller';

const NavbarComponent = {
    controller,
    template: `
    <div id="navbar">
        <div id="logo">X</div>
        <div>
            <span ng-repeat="section in $ctrl.sections">{{ section.name }}XX</span>
        </div>
    </div>`
}

export default NavbarComponent;
