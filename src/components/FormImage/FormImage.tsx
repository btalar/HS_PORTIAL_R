import { Button, Image } from '@nextui-org/react';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { FC, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { useToast } from '../../hooks';
import { FormImageWrapper } from './FormImage.styled';

interface FormImageProps {
  onChange:(...event: string[]) => void;
  value:string;
  label:string;
}
export const FormImage:FC<FormImageProps> = ({ onChange: onChangeForm, value, label }) => {
  const { showError } = useToast();
  const storage = getStorage();

  const [images] = useState([]);
  const uploadFile = (file:File):void => {
    if (!file) {
      return;
    }

    const imageRef = storageRef(storage, `${uuidv4()}`);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            onChangeForm(url);
          })
          .catch((error) => {
            showError(error.message);
          });
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const maxNumber = 69;

  const onChange = async (imageList:ImageListType):Promise<void> => {
    try {
      const firstImage = imageList[0];
      uploadFile(firstImage.file!);
    } catch (err) {
      showError(JSON.stringify(err));
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
          <h3>{label}</h3>
          <Button
            color={isDragging ? 'warning' : 'default'}
            fullWidth
            type="button"
            onClick={onImageUpload}
            {...dragProps}
          >
            {` ${value.length ? '(Edit)' : ''}Click or Drop here image`}
          </Button>
          {value.length ? (
            <>
              <Image height={200} width={200} src={value} />
              <Button onClick={() => onChangeForm('')} color="danger">Remove</Button>
            </>
          ) : null }
        </FormImageWrapper>
      )}
    </ImageUploading>

  );
};
