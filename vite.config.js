import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-merch-api',
      configureServer(server) {
        server.middlewares.use('/api/merch-products', async (req, res) => {
          if (req.method !== 'GET') {
            res.statusCode = 405;
            res.setHeader('Allow', 'GET');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Method not allowed' }));
            return;
          }

          const token = process.env.FOURTHWALL_STOREFRONT_TOKEN;
          if (!token) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Missing FOURTHWALL_STOREFRONT_TOKEN' }));
            return;
          }

          const upstreamUrl = new URL('https://storefront-api.fourthwall.com/v1/collections/all/products');
          upstreamUrl.searchParams.set('storefront_token', token);
          upstreamUrl.searchParams.set('page', '0');
          upstreamUrl.searchParams.set('size', '50');

          try {
            const upstreamRes = await fetch(upstreamUrl.toString(), {
              headers: { Accept: 'application/json' },
            });
            const text = await upstreamRes.text();
            res.statusCode = upstreamRes.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(text);
          } catch (error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'Failed to fetch products',
              details: error instanceof Error ? error.message : 'Unknown error',
            }));
          }
        });
      },
    },
  ],
})
