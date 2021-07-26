import React from 'react';
import '../sass/header.scss';
import instagramLogo from '../assets/images/instagram-logo.png';
import UploadForm from './UploadForm';

const Header = () => {
  return (
    <div className="header">
      <img src={instagramLogo} alt="Instagram" className="logo" />
      <div className="links">
        <UploadForm></UploadForm>
        <i className="far fa-paper-plane link__icon" />
        <i className="far fa-heart link__icon" />
      </div>
    </div>
  );
};

export default Header;
