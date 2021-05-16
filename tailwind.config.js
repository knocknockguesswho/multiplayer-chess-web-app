module.exports = {
  theme: {
    extend: {
      animation: {
        fading: 'fading 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blinking: 'blinking 1s cubic-bezier(.49, .01, .01, 1) infinite'
      },
      keyframes: {
        fading: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        blinking: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      colors: {
        nero: '#222222',
        white: '#FFFFFF',
        nobel: '#9B9B9B',
        zambesi: '#606060',
        whisper: '#E5E5E5',
        whiteSmoke: '#F5F5F5',
        cyanBlue: '#307FE2',
        navyBlue: '#0065D2',
        solitude: '#E1EEFF',
        aliceBlue: '#F1F7FF',
        persimmon: '#EF6000',
        tenneOrange: '#C85000',
        chardon: '#FFEEE2',
        seashell: '#FFF9F5',
        deepSea: '#208060',
        swansDown: '#D4EDDA',
        redOrange: '#F33030',
        persianRed: '#C33030',
        mistyRose: '#FFDADA',
        mustard: '#806000',
        chinaIvory: '#FFF3CD',
        amber: '#FFBF00',
        transparent: 'transparent'
      },

      borderRadius: {
        5: '1.25rem',
        '2xl': '1rem'
      },
      borderWidth: {
        HALF: '0.031rem',
      },
      margin: {
        9: '2.25rem',
        11: '2.75rem',
        14: '3.5rem',
        21: '5.25rem', // for explore game category
        23: '5.75rem',
        30: '7.5rem',
        auto: 'auto',
        15: '3.75rem'
      },
      width: {
        '100px': '100px',
        '147px': '147px',
        '300px': '300px',
        '294px': '294px',
        '186px': '186px',
        '252px': '252px',
        '312px': '312px',
        '500px': '500px',
        '700px': '700px',
        '100%': '100%',
        23: '5.75rem',
        20: '5rem',
        50: '12.25rem',
        15: '3.75rem',
        75: '18.75rem',
        57: '14.25rem'
      },
      height: {
        '32px': '32px',
        '40px': '40px',
        '75px': '75px',
        '100px': '100px',
        '150px': '150px',
        '300px': '300px',
        18: '5rem',
        '50%': '50%',
        '87px': '87px',
        7: '1.75rem',
        46: '11.375rem',
        28: '7rem',
        15: '3.75rem',
        35: '8.75rem',

      },
      minWidth: {
        '106px': '106px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '40px': '40px',
        '42px': '42px',
        '50px': '50px',
        '62px': '62px',
        '75px': '75px',
        '85px': '85px',
        '90px': '90px',
        '100px': '100px',
        '180px': '180px',
        '264px': '264px',
        '288px': '288px',
        '300px': '300px',
        '360px': '360px',
        '148px': '148px',
        20: '5rem'
      },
      maxWidth: {
        35: '8.75rem',
        '32px': '32px',
        '46px': '46px',
        '148px': '148px',
        '150px': '150px',
        '175px': '175px',
        '180px': '180px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '312px': '312px',
        '360px': '360px',
        '400px': '400px',
        '328px': '328px', // immediately by uxe
        '600px': '600px',
        40: '10rem',
        53: '13.5rem'
      },
      minHeight: {
        // immediately by uxe
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '40px': '40px',
        '42px': '42px',
        '46px': '46px',
        '50px': '50px',
        '62px': '62px',
        '64px': '64px', // for content/product-info
        '72px': '72px',
        '75px': '75px',
        '85px': '85px',
        '90px': '90px',
        '100px': '100px',
        '108px': '108px',
        '50vh': '50vh', // for initial size bottom sheet
        '312px': '312px', // for
        '248px': '248px', // for card product
        '238px': '238px',
        '9999px': '9999px'
      },
      maxHeight: {
        // immediately by uxe
        '0px': '0px',
        '24px': '24px',
        '32px': '32px',
        '72px': '72px',
        '80px': '80px',
        '87px': '87px',
        '148px': '148px',
        '150px': '150px',
        '164px': '164px',
        '175px': '175px',
        '180px': '180px',
        '200px': '200px',
        '250px': '250px',
        '276px': '276px',
        '300px': '300px',
        '328px': '328px',
        '600px': '600px',
        '50%': '50%',
        '50vh': '50vh', // for initial size bottom sheet,
        '9999px': '9999px'
      },
      fontSize: {
        // immediately by uxe
        xs: '10px',
        sm: '11px',
        base: '12px',
        lg: '14px',
        xl: '16px',
        '2xl': '18px',
        '3xl': '21px',
        '4xl': '24px'
      },
      fontFamily: {
        itemku: ['Roboto', 'sans-serif'], // immediately by uxe
        tokoResmi: ['Montserrat', 'sans-serif'] // immediately by uxe
      },
      spacing: {
        // immediately by uxe
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '3px': '3px',
        '5px': '5px',
        '8px': '8px',
        '14px': '14px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '32px': '32px',
        '40px': '40px',
        '42px': '42px',
        '200px': '200px',
        '250px': '250px',
        7: '28px',
        9: '2.25rem',
        11: '44px',
        13: '52px',
        14: '56px',
        17: '68px',
        18: '72px',
        21: '84px',
        22: '88px',
        23: '92px',
        26: '104px',
        27: '108px',
        30: '120px',
        31: '124px',
        32: '128px',
        33: '132px',
        34: '136px',
        35: '140px',
        37: '148px',
        39: '156px',
        40: '160px',
        41: '164px',
        45: '180px',
        55: '220px',
        58: '232px',
        66: '264px',
        69: '276px',
        70: '280px',
        78: '312px',
        82: '328px',
        87: '348px',
        90: '360px',
        150: '600px'
      },
      boxShadow: {
        // immediately by uxe
        'rnd-btn': '0 4px 4px rgba(0, 0, 0, 0.25)',
        fab: '0px 3px 5px rgba(0, 0, 0, 0.27)',
        card: '0px 1px 6px rgba(34, 34, 34, 0.18)',
        'card-hover': '0px 3px 6px rgba(34, 34, 34, 0.25)',
        top: '0px -0.25px 0px rgba(34, 34, 34, 0.25)',
        bottom: '0px 0.5px 0px rgba(96, 96, 96, 0.25)',
        select: '0px 1px 6px rgba(48, 127, 226, 0.18)'
      },
      flex: {
        '40%': '40%',
        '47%': '47%',
        '50%': '50%',
        '60%': '60%',
        '67%': '67%'
      },
      screens: {
        mini: { max: '319px' },
        xxs: { min: '320px', max: '360px' },
        xs: { min: '375px' },
        tablet: { min: '360px', max: '599px' },
        sm: { min: '600px' },
        mobile: { min: '320px', max: '1023px' },
        'desktop-small': { min: '1024px', max: '1439px' },
        'desktop-default': { min: '1440px' }
      },
      zIndex: {
        100: 100
      },
      inset: {
        '1/2': '50%',
        '3/4': '75%'
      },
      gridTemplateColumns: {
        menu: 'repeat(4, minmax(56px, 56px))'
      },
      justifyContent: {
        'jusfity-evenly': 'justify-content: space-evenly'
      },
      backgroundOpacity: {
        80: '0.8'
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))'
      },
      outline: {
        blue: ['0.5px solid #0065D290'],
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    margin: ['responsive', 'hover', 'focus'],
    cursor: ['responsive', 'hover', 'focus', 'group-focus'],
    backgroundColor: ['active']
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 500,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750
      },
      variants: ['responsive']
    })
  ]
};
