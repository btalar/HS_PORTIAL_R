import { Input } from '@nextui-org/react';
import React, { FC, useEffect, useState } from 'react';

export const Dashboard: FC = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('/getHerokuReleaseVersion')
      .then((response) => response.text())
      .then((data) => {
        setVersion(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Input
        type="emails"
        label="EMAIL"
        defaultValue="junior@nextui.org"
        className="max-w-xs"
      />
      <h1>Heroku Release Version: {version}</h1>
    </div>
  );
};
