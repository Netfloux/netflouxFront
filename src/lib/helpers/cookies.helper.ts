export const COOKEYS = {
  USER_TOKEN: 'netflouxUserToken',
}

export const cookieDefaultOptions = {
  path: '/',
  httpOnly: false,
  sameSite: 'strict',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24 * 3,
} satisfies import('cookie').CookieSerializeOptions;
