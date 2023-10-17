/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            backgroundImage: {
                'hero-pattern': "url('https://img.freepik.com/free-photo/frame-flowers_23-2147987481.jpg?size=626&ext=jpg&ga=GA1.1.665829609.1697254551&semt=ais')",
                'footer-texture': "url('/img/footer-texture.png')",
            }
        },
    },
    plugins: [],
}