/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ['Oxanium', 'sans-serif'], // الخط الأول
        roboto: ['Roboto', 'sans-serif'],   // الخط الثاني (إذا كنت تستخدمه)
        inter: ['Inter', 'sans-serif'],     // الخط الجديد Inter
        trika: ['Trika', 'sans-serif'],     // إضافة خط Trika هنا
      },
      fontWeight: {
        thin: 300, // وزن الخط الرقيق
        extraThin: 230
      },
      fontSize: {
        xxl: '60px', // حجم الخط الكبير
      },
    },
  },
  plugins: [],
}
