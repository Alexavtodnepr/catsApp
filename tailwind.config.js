/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: '600px',
      // => @media (min-width: 600px) { ... }
      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      spacing: {
        1.25: '0.3125rem', // 5px
        2.25: '0.5625rem', // 9px
        3.75: '0.9375rem', // 15px
        4.25: '1.0625rem', // 17px
        4.5: '1.125rem', // 18px
        4.75: '1.1875rem', // 19px
        5.5: '1.375rem', // 22px
        6.25: '1.5625rem', // 25px
        6.5: '1.625rem', // 26px
        6.75: '1.6875rem', // 27px
        7.5: '1.875rem', // 30px
        7.75: '1.9375rem', // 31px
        8.5: '2.125rem', // 34px
        8.75: '2.1875rem', //35px
        9.75: '2.4375rem', // 39px
        10.25: '2.5625rem', // 41px
        11: '2.75rem', // 44px
        11.5: '2.875rem', // 46px
        11.75: '2.9375rem', // 47px
        12: '3rem', // 48px
        12.5: '3.125rem', // 50px
        13: '3.25rem', // 52px
        13.25: '3.3125rem', // 53px
        14: '3.5rem', // 56px
        14.5: '3.625rem', // 58px
        15: '3.75rem', // 60px
        16.5: '4.125rem', // 66px
        17: '4.25rem', // 68px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        18.75: '4.6875rem', // 75px
        19.5: '4.875rem', // 78px
        20: '5rem', //80px
        21: '5.25rem', // 84px
        23: '5.75rem', // 92px
        19.75: '4.9375rem', // 79px
        20.25: '5.0625rem', // 81px
        22.25: '5.5625rem', // 89px
        24.5: '6.125rem', // 98px
        25: '6.25rem', // 100px
        25.75: '6.4375rem', // 103px
        26: '6.5rem', // 104px
        26.5: '6.625rem', // 106px
        28: '7rem', // 112px
        28.5: '7.125rem', // 114px
        29.25: '7.3125rem', // 117px
        29.5: '7.375rem', // 118px
        30: '7.5rem', // 120px
        30.5: '7.625rem', // 122px
        31: '7.75rem', // 124px
        32.5: '8.125rem', // 130px
        33: '8.25rem', // 132px
        34: '8.5rem', // 136px
        35: '8.75rem', // 140px
        39: '9.75rem', // 156px
        41.5: '10.375rem', //166px
        42: '10.5rem', // 168px
        42.5: '10.625rem', // 170px
        45: '11.25rem', // 180px
        45.25: '11.3125rem', // 181px
        47: '11.75rem', // 188px
        48: '12rem', // 192px
        50: '12.5rem', // 200px
        50.5: '12.625rem', // 202px
        51.75: '12.9375rem', // 207px
        52.5: '13.125rem', // 210px
        55: '13.75rem', // 220px
        58.25: '14.5625rem', // 233px
        60: '15rem', // 240px
        61.5: '15.375rem', // 246px
        62: '15.5rem', //248px
        65: '16.25rem', // 260px
        67.5: '16.875rem', //270px
        70: '17.5rem', // 280px
        73: '18.25rem', // 292px
        72: '18rem', // 288px
        72.5: '18.125rem', // 290px
        74: '18.5rem', // 296px
        75: '18.75rem', // 300px
        79: '19.75rem', //316px
        80.5: '20.615rem', // 322px
        82: '20.5rem', // 328px
        84: '21rem', // 336px
        86: '21.5rem', // 344px
        85.25: '21.3125rem', // 341px
        85.75: '21.4375rem', // 343px
        86.25: '21.5625rem', // 345px
        87: '21.75rem', // 348px
        87.75: '21.9375rem', // 351px
        90.5: '22.625rem', // 362px
        92.5: '23.125rem', // 370px
        92.75: '23.1875rem', // 371px
        93: '23.25rem', // 372px
        94: '23.5rem', //376px
        95: '23.75rem', // 380px
        97.5: '24.375rem', // 390px
        100: '25rem', // 400px
        102.5: '25.625rem', // 410px
        103.75: '25.9375rem', // 415px
        106: '26.5rem', // 424px
        110: '27.5rem', // 440px
        113.25: '28.3125rem', // 453px
        114: '28.5rem', // 456px
        119: '29.75rem', //476px
        119.75: '29.9375rem', // 479px
        120: '30rem', // 480px
        124: '31rem', // 496px
        125: '31.25rem', // 500px
        133: '33.25rem', //532px
        135: '33.75rem', // 540px
        136.5: '34.125rem', // 546px
        137.5: '34.375rem', // 550px
        140: '35rem', // 560px
        144.75: '36.1875rem', // 579px
        145: '36.25rem', // 580px
        147: '36.875rem', // 590px
        154: '38.5rem', // 616px
        157.5: '39.375rem', //630px
        151: '37.875rem', // 606px
        156: '39rem', // 624px
        157.75: '39.4375rem', // 631px
        160.25: '40.0625rem', // 641px
        160.75: '40.1875rem', // 643px
        162: '40.5rem', // 648px
        165: '41.25rem', // 660px
        166.25: '41.5625rem', // 665px
        169: '42.25rem', //676px
        170: '42.5rem', // 680px
        173: '43.25rem', // 692px
        176: '44rem', // 704px
        182.5: '45.625rem', // 730px
        185.5: '46.375rem', // 748px
        187.5: '46.875rem', // 750px
        195: '48.75rem', // 780px
        197.5: '49.375rem', // 790px
        199: '49.75rem', // 796px
        205: '51.25rem', // 820px
        207.75: '51.9375rem', // 831px
        210: '52.5rem', //840px
        220: '55rem', // 880px
        233: '58.25rem', // 932px
        245: '61.25rem', // 980px
        266.75: '66.6875rem', // 1067px
        286.25: '71.5625rem', // 1145px
        295: '73.75rem', // 1180px
        300: '75rem', //1200px,
        311.5: '77.875rem', // 1246px
        470: '117.5rem', // 1880px
        475: '118.75rem', // 1900px
        480: '120rem', // 1920px
      },
      letterSpacing: {
        not_found_page: '0.29rem',
        404: '-0.05rem',
      },
      textUnderlineOffset: {
        5: '5px',
      },
      colors: {
        accent: { base: '#E1326E', additional: '#FA3778' },
        attention: { base: '#FF4545' },
        primary: { base: '#6E285F', additional: '#873273' },
        secondary: { base: '#FFBE00', additional: '#F2B500' },
        attention: { base: '#FF4545' },
        warning: { base: '#FF4545' },
        gray: {
          dark: '#454545',
          medium: '#A0A0A0',
          'medium-low': '#E7E7E7',
          low: '#F5F5F5',
          white: '#FFFFFF',
          details: '#A0A0A0',
          dark: '#454545',
          stroke: '#E7E7E7',
          card: '#F5F5F5',
          gray2: '#E1E1E1',
        },
      },
      backgroundImage: {},
      borderRadius: {
        8: '8px',
        10: '10px',
        15: '15px',
        20: '20px',
        30: '30px',
      },

      fontSize: {
        menu: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
        ],
        details: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        'details-bold': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '600',
          },
        ],
        'smaller-main': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'smaller-bold': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
        ],
        'main-text': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        'main-text-bold': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
        ],
        'h1-narrow': [
          '2.375rem',
          {
            lineHeight: '3rem',
            fontWeight: '600',
          },
        ],
        'h1-narrow-big': [
          '3rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '600',
          },
        ],
        'h1-heading': [
          '2.375rem',
          {
            lineHeight: '3rem',
            fontWeight: '700',
          },
        ],
        'h1-heading-bold': [
          '2.375rem',
          {
            lineHeight: '3rem',
            fontWeight: '700',
          },
        ],
        'h2-heading': [
          '1.625rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        'h2-heading-bold': [
          '1.625rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        'h3-subheading': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
        ],
        'impact-card-special': [
          '3.375rem',
          {
            lineHeight: '4rem',
            fontWeight: '600',
          },
        ],
        '404-not-found': [
          '12.625rem',
          {
            lineHeight: '16.4rem',
            fontWeight: '600',
          },
        ],
        'not-found-title': [
          '2.3rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '600',
          },
        ],
      },

    },
  },
};
