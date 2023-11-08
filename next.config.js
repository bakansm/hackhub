/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: { styledComponents: true },
	reactStrictMode: true,
	redirects: async () => {
		return [];
	},
	rewrites: async () => [],
	env: {
		NEXT_PUBLIC_NETWORK_ID: process.env.NEXT_PUBLIC_NETWORK_ID,
		NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
		API_URL: process.env.API_URL,
	},
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
module.exports = nextConfig;
