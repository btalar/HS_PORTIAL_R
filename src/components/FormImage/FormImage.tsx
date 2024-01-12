import { Button, ButtonGroup, Image } from '@nextui-org/react';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { FC, useState } from 'react';
import ImageUploading from 'react-images-uploading';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

export const FormImage:FC = () => {
  const storage = getStorage();
  const [imageUpload] = useState(null);

  const [images, setImages] = useState([]);
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const uploadFile = ():void => {
    if (imageUpload === null) {
      console.log('Please select an image');
      return;
    }

    const imageRef = storageRef(storage, `${uuidv4()}`);

    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const maxNumber = 69;

  const onChange = (imageList:any) => {
    console.log(imageList);
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          // onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <Button
              color={isDragging ? 'warning' : 'default'}
              fullWidth
              type="button"
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here image
            </Button>
            {imageList.map((image, index) => (
              <div key={image.dataURL}>
                <Image src={image.data_url} height={200} />
                <ButtonGroup fullWidth>
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </ButtonGroup>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

    </div>
  );
};
