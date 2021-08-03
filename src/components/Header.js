import React from 'react';
import '../sass/_header.scss';
import UploadForm from './UploadForm';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Photo Gallery</h1>
      <UploadForm />
    </div>
  );
};

export default Header;
