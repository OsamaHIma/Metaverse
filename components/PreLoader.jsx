import './preloader.scss';

const Preloader = () => (
  <div className="preloader">
    <div className="preloader-wrapper">
      <div className="loading">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </div>
  </div>
);

export default Preloader;
