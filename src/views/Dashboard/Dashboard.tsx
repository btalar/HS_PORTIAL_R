import { Input } from '@nextui-org/react';
import React, { FC, useEffect, useState } from 'react';

const apiKey = process.env.API_KEY;

console.log(apiKey);

export const Dashboard: FC = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('https://hotelspot-develop-7cbb71ce24bf.herokuapp.com//getHerokuReleaseVersion')
      .then((response) => response.json())
      .then((data) => {
        setVersion(data.version);
        console.log(data);
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
      <h1>Heroku Release Version: {version} {apiKey} </h1>
    </div>
  );
};
