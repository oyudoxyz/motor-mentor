import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  // redirect to dashboard after login
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        returnTo: '/dashboard',
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
