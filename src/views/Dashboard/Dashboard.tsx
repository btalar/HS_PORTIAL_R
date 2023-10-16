import { Input } from '@nextui-org/react';
import React, { FC, useEffect, useState } from 'react';

export const Dashboard: FC = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('/api/version') // Replace with your server's route
      .then((response) => response.json())
      .then((data) => {
        setVersion(data.version);
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
