import { envsafe, str } from 'envsafe';

const env = envsafe({
  REACT_APP_AIRTABLE_BASE_ID: str({
    desc: 'Airtable Base ID',
    example: 'appXXXXXXXXXXXXXX',
  }),
  REACT_APP_AIRTABLE_SECRET_KEY: str({
    desc: 'Secret Key of the Airtable project',
    example: 'keyXXXXXXXXXXXXXX',
  }),
});

const config = {
  airtable: {
    secret: env.REACT_APP_AIRTABLE_SECRET_KEY,
    base: env.REACT_APP_AIRTABLE_BASE_ID,
  },
};

export default config;
