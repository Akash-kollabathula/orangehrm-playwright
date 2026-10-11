import 'dotenv/config';
import path from 'node:path';

export const authFile = path.resolve(__dirname, '../playwright/.auth/user.json');

const configuredUsername = process.env.ORANGEHRM_USERNAME?.trim();
const configuredPassword = process.env.ORANGEHRM_PASSWORD;

if (Boolean(configuredUsername) !== Boolean(configuredPassword)) {
  throw new Error('Set both ORANGEHRM_USERNAME and ORANGEHRM_PASSWORD, or neither.');
}

export const validCredentials = {
  username: configuredUsername || 'Admin',
  password: configuredPassword || 'admin123',
};
