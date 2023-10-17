import { Input } from '@nextui-org/react';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import dynoMetadata from 'heroku-dyno-metadata';
import React, { FC, useEffect, useState } from 'react';

export const Dashboard: FC = () => {
  const [dynoInfo, setDynoInfo] = useState<string | null>(null);

  useEffect(() => {
    // Use the `dynoMetadata` object to access Heroku Dyno information
    if (dynoMetadata.dyno) {
      setDynoInfo(JSON.stringify(dynoMetadata.dyno, null, 2));
    }
  }, []);

  return (
    <div>
      <Input
        type="emails"
        label="EMAIL"
        defaultValue="junior@nextui.orgs"
        className="max-w-xs"
      />
      <h1>Heroku Release  {dynoInfo}  </h1>
    </div>
  );
};
