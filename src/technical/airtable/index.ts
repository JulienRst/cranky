import Airtable from 'airtable';
import config from 'technical/config';

export const airtable = new Airtable({
  apiKey: config.airtable.secret,
});

const base = airtable.base(config.airtable.base);

export default base;
