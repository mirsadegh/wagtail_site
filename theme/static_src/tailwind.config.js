module.exports = {
    darkMode: 'class', // افزودن پشتیبانی از تم دارک
    content: [
        // Templates
        '../templates/**/*.html',
        '../../templates/**/*.html',
        '../../**/templates/**/*.html',
        
        // Wagtail specific
        '../../home/templates/**/*.html',
        '../../search/templates/**/*.html',
        
        // Python files که ممکن است کلاس‌های Tailwind داشته باشند
        '../../**/*.py',
        
        // JavaScript files
        '../static/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                'wagtail-blue': '#1e3a5f',
                'wagtail-gray': '#f3f4f6',
                'dark-primary': '#1a202c',
                'dark-secondary': '#2d3748',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [
        // می‌توانید پلاگین‌های Tailwind اضافه کنید
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        require('tailwindcss-rtl'),
    ],
}
