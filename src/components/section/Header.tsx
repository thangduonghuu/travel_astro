import Icon from '@/components/core/Icon';
import '@/assets/sass/components/main/header.scss';
import rainSound from '@/assets/music/rain.mp3';

const Header = () => {
  const onClickGithub = () => {
    window.open('https://github.com/thangduonghuu', '_blank');
  };
  const onClickLinkedin = () => {
    window.open('https://www.linkedin.com/in/thangduong1152/', '_blank');
  };

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
          <span onClick={onClickGithub}>
            <Icon name="github" size="large" />
          </span>
          <span onClick={onClickLinkedin}>
            <Icon name="linkdin" size="large" />
          </span>
        </div>

        <iframe src={rainSound} allow="autoplay" className="audio-rain" id="iframeAudio"></iframe>
      </div>
    </header>
  );
};

export default Header;
