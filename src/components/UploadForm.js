import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

// const Form = () => {
//   return (
//     <>
//       <input type="text" />
//       <input type="text" />
//     </>
//   );
// };

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ['image/png', 'image/jpeg'];

  const handleChange = (event) => {
    let selectedFile = event.target.files[0];
    return selectedFile && fileTypes.includes(selectedFile.type)
      ? (setFile(selectedFile), setError(null))
      : (setFile(null), setError('Please select png or jpeg image file'));
  };
  return (
    <form className="upload-img-form">
      <label for="upload-img-input">
        <i className="far fa-plus-square link__icon" />
      </label>
      <input id="upload-img-input" type="file" onChange={handleChange} />

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{`Uploading ${file.name}`}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
