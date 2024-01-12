import { Button, Image } from '@nextui-org/react';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { FC, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { FormImageWrapper } from './FormImage.styled';

interface FormImageProps {
  onChange:(...event: any[]) => void;
  value:string;
}
export const FormImage:FC<FormImageProps> = ({ onChange: onChangeForm, value }) => {
  const storage = getStorage();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState([]);
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const uploadFile = (file:File):void => {
    if (!file) {
      console.log('Please select an image');
      return;
    }

    const imageRef = storageRef(storage, `${uuidv4()}`);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            onChangeForm(url);
            console.log(value);
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

  const onChange = async (imageList:ImageListType) => {
    try {
      const firstImage = imageList[0];
      console.log(firstImage.file);
      uploadFile(firstImage.file!);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        onImageUpload,
        isDragging,
        dragProps,
      }) => (
        <FormImageWrapper>
          <Button
            color={isDragging ? 'warning' : 'default'}
            fullWidth
            type="button"
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here image
          </Button>
          {value.length ? (
            <>
              <Image height={200} width="100%" src={value} />
              <Button onClick={() => onChangeForm('')} color="danger">Remove</Button>
            </>
          ) : null }
        </FormImageWrapper>
      )}
    </ImageUploading>

  );
};
