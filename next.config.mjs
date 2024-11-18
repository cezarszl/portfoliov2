/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Dotyczy wszystkich stron w aplikacji
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=0, must-revalidate",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
