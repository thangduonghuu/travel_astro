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
          <div data-aos="fade-right" data-aos-delay="300" data-aos-offset="0">
            <Icon name="account" size="large" />
          </div>
          <div data-aos="fade-right" data-aos-delay="600" data-aos-offset="0">
            <Icon name="search" size="large" />
          </div>
        </div>
        <div className="main-header__name">
          <h1>Travel</h1>
        </div>
        <div className="main-header__contact">
          <div data-aos="fade-right" data-aos-delay="900" data-aos-offset="0">
            <span onClick={onClickGithub}>
              <Icon name="github" size="large" />
            </span>
          </div>
          <div data-aos="fade-right" data-aos-delay="1200" data-aos-offset="0">
            <span onClick={onClickLinkedin}>
              <Icon name="linkdin" size="large" />
            </span>
          </div>
        </div>

        {/* <iframe src={rainSound} allow="autoplay" className="audio-rain" id="iframeAudio"></iframe> */}
      </div>
    </header>
  );
};

export default Header;
