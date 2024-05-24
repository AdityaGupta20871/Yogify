import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

const UploadImage = () => {
  return (
    <StorageManager
            acceptedFileTypes={[
              '.jpeg',
              '.jpg',
              'image/png',
            ]}
            path="picture-submissions/"
            maxFileCount={5}
            maxFileSize={1000000}
            isResumable
          />
  );
};
export default UploadImage;