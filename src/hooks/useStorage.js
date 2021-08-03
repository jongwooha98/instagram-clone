import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();

        function getMeta(url) {
          var img = new Image();
          img.src = url;
          img.onload = function () {
            const imgWidth = this.width;
            const imgHeight = this.height;
            collectionRef.add({
              width: imgWidth,
              height: imgHeight,
              src: url,
              createdAt: createdAt,
            });
          };
        }

        // collectionRef.add({});
        getMeta(url);
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
