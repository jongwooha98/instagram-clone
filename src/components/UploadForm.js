import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ['image/png', 'image/jpeg'];

  const handleChange = (event) => {
    let selectedFile = event.target.files[0];

    console.log(selectedFile);
    return selectedFile && fileTypes.includes(selectedFile.type)
      ? (setFile(selectedFile), setError(null))
      : (setFile(null), setError('Please select png or jpeg image file'));
  };
  return (
    <form className="upload__form">
      <label for="upload__input">
        <i className="fas fa-cloud-upload-alt upload__icon" />
      </label>
      <input id="upload__input" type="file" onChange={handleChange} />

      <div className="upload__status">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{`Uploading ${file.name}`}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
