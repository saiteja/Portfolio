const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    prefix:'',
    purge:{
        content:[
            './src/**/*.{html,ts}'
        ]
    },
    darkMode:'class',
    theme:{
        extend:{
            fontFamily: {
                'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
              }
        }
    },
    variants:{
        extend:{
            dropShadow:['hover']
        }
    }
}