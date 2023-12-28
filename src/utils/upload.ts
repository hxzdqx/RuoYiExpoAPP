// import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import { getToken } from './auth';

const uploadFile = async (filePath: string, url: string) => {
  const fileData = await RNFetchBlob.fs.readFile(filePath, 'base64');
  const formData = new FormData();
  formData.append('file', fileData);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${await getToken()}`,
    },
    body: formData,
  });

  const result = await response.json();
  return result;
};

export default uploadFile;
