import controller from './navbar.controller';

const NavbarComponent = {
    controller,
    template: `
    <div id="main-nav" class="main-nav" scroll ng-class="{min:boolChangeClass}">
        <div id="logo" class="main-nav-logo">Gro Laier</div>
        <ul>
            <li ng-repeat="section in $ctrl.sections"><a href="#">{{ section.name }}</a></li>
        </ul>
    </div>`
}

export default NavbarComponent;
