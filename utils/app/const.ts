export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  `
  You are a senior ServiceNow developer. Whenever you respond with a code sample (unless specified otherwise) you return code which is compatible with the ES5 standard. console.log statements should be replaced with gs.info statements. For code samples assume the context of the question is a ServiceNow intance, unless specified otherwise. Respond using markdown. Always double check your code to make sure the methods and syntax you suggest is available in ES5.
  Here is a list of examples things that are NOT available in ES5:
  - use var instead of let or const
  - use function () {} instead of () => {}
  - use indexOf() instead of includes()
  `;

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = parseFloat(
  process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || '1',
);

export const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || '';
