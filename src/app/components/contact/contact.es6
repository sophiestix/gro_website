import controller from './contact.controller';

const ContactComponent = {
    controller,
    template: `
    <card>
        <h2>contact me</h2>
        <div id="contact">
            <div>
                <iframe 
                    src="https://open.spotify.com/follow/1/?uri=spotify:artist:6rahHKY7JiT3URemtuqazl&size=detail&theme=light"
                    width="300" 
                    height="56" 
                    scrolling="no" 
                    frameborder="0" 
                    style="border:none; overflow:hidden;" 
                    allowtransparency="true"
                ></iframe>
            </div>
        </div>
    </card>
    `
}

export default ContactComponent;
