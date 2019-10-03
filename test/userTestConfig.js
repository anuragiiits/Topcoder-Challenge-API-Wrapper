/*
 * Config for tests.
 */

const config = {
    JWT: process.env.TEST_JWT || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiZTZvWkF4bm9GdmpkUnRqSnMxSnQzdHF1TG5OU1RzMGVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNTY5OTU2MzU1LCJleHAiOjE1NzAwNDI3NTUsImF6cCI6ImU2b1pBeG5vRnZqZFJ0akpzMUp0M3RxdUxuTlNUczBlIiwic2NvcGUiOiJhbGw6Y2hhbGxlbmdlcyByZWFkOmNoYWxsZW5nZXMgd3JpdGU6Y2hhbGxlbmdlcyByZWFkOmdyb3VwcyByZWFkOnByb2plY3QgcmVhZDpidXNfdG9waWNzIHdyaXRlOmJ1c19hcGkgcmVhZDp1c2VyX3Byb2ZpbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.UdW9G63X8oWe2EV6YVBrrbPD3cNbqpE29P7IifMbPxQYvOuBFMByCde4pu1cJSGNe4AJ3npenkk9rHfbOAceSkDzNlY9MDJIWigYAj95wd7_IRO_2-h70AdRfLfnp9yqkaKHzZyglqJYW1FT6QtnFlAGRQ89D90qA8xknU-b8UDWi18jhpMzQgA5RFIvhaIdysPvWvs8WgFd3O639d_-9mtk044Yv9KhOjR20escEvMSc1hmsDocEaq3COnDNCrhbEljjeGYGTVmFv5mlAuxtNJSRa2uaUSjFdO0jRGAcmupomqnFAqxrqPQuzl4dXtKtJbvppZ9_r33k8QcnWoJ-g',
    USERNAME: process.env.TEST_USERNAME || 'wertyui',
    PASSWORD: process.env.TEST_PASSWORD || 'qwertyu',
    TC_AUTHN_URL: process.env.TEST_TC_AUTHN_URL || 'https://topcoder.auth0.com/oauth/ro',
    TC_AUTHZ_URL: process.env.TEST_TC_AUTHZ_URL || 'https://topcoder.auth0.com/oauth/ro',
    TC_CLIENT_ID: process.env.TEST_TC_CLIENT_ID || 'wertyui',
    TC_CLIENT_V2CONNECTION: process.env.TEST_TC_CLIENT_V2CONNECTION || 'qwertyu',
    CHALLENGE_API_URL: process.env.CHALLENGE_API_URL || 'https://api.topcoder-dev.com/v5'
  }
  
module.exports = config
  