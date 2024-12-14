/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http', // Or 'https', depending on your setup
          hostname: 'supabasekong-ekwwggw8sogw8cs4sc0s400w.147.93.18.153.sslip.io',
          port: '', // Include if your setup uses a non-standard port
          pathname: '/storage/v1/object/public/**', // Match public storage bucket path
        },
      ],
    },
  };
  
  export default nextConfig;