// import React from 'react';
import useFirestore from '../hooks/useFirestore';
import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

//
function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');
  //
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  //
  return (
    //
    <div>
      <Gallery photos={docs} onClick={openLightbox} margin={5} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={docs.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    //
    // <div className="img-grid">
    //   {docs &&
    //     docs.map((doc) => (
    //       <motion.div
    //         className="img-wrap"
    //         key={doc.id}
    //         onClick={() => setSelectedImg(doc.url)}
    //         whileHover={{ opacity: 1 }}
    //         layout
    //       >
    //         <motion.img
    //           src={doc.url}
    //           alt=""
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ delay: 1 }}
    //         />
    //       </motion.div>
    //     ))}
    // </div>
  );
}

export default ImageGrid;
