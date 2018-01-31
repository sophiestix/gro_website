import controller from './contact.controller';

const ContactComponent = {
    controller,
    template: `
    <section>
        <h2>my contacts</h2>
        <div id="contact" class="contact">
            <card class="card-contact contact-align--center">
                <h3>Write me!</h3>
                <div class="contact-details">
                    <p>Gro Laier</p>
                    <p>smukkesange@gmail.com</p>
                </div>
            </card>
            <card class="card-contact contact-align--center">
                <h3>Follow me!</h3>
                <iframe 
                    src="https://open.spotify.com/follow/1/?uri=spotify:artist:6rahHKY7JiT3URemtuqazl&size=detail&theme=light"
                    width="200" 
                    height="56" 
                    scrolling="no" 
                    frameborder="0" 
                    style="border:none; overflow:hidden;" 
                    allowtransparency="true"
                    class="contact-widget"
                ></iframe>
                <div 
                    class="g-ytsubscribe contact-widget" 
                    data-channelid="UCCN-6225-ASUzvPPhiSboJQ" 
                    data-layout="full" 
                    data-count="default"
                ></div>
            </card>
        </div>
    </section>
    `
}

export default ContactComponent;
