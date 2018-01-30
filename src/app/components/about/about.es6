import controller from './about.controller';

const AboutComponent = {
    controller,
    template: `
    <card>
        <h2>about</h2>
        <div id="about">
            <div>
                About text
            </div>
        </div>
    </card>
    `
}

export default AboutComponent;
