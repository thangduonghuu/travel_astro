import Icon from '../core/Icon';
import '@/assets/sass/components/main/header.scss';
import rainSound from '@/assets/music/rain.mp3';

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <div className="main-header__profile">
          <Icon name="account" size="large" />
          <Icon name="search" size="large" />
        </div>
        <div className="main-header__name">
          <h1>Travel</h1>
        </div>
        <div className="main-header__contact">
          <Icon name="linkdln" size="large" />
        </div>

        {/* <iframe src={rainSound} allow="autoplay" className="audio-rain" id="iframeAudio"></iframe> */}
      </div>
    </header>
  );
};

export default Header;
