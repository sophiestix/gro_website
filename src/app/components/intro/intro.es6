import controller from './intro.controller';

const IntroComponent = {
    controller,
    template: `
    <div id="intro" class="intro">
        <h1>Welcome!</h1>
        <p>I’m Gro Laier, a singer songwriter living and working in Denmark.</p>
        <span><img src="/src/assets/img/yt_logo_rgb_dark.png"></span>
        <span><img src="/src/assets/img/Spotify_Logo_RGB_Green.png"></span>
    </div>`
}

export default IntroComponent;
