/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "sign-up": "url(../images/sign-up-bg.png)",
        "about-hero": "url(../images/about/hero-bg.png)",
        "careers-hero": "url(../images/careers/hero-bg.png)",
        "locations-hero": "url(../images/locations/hero-bg.png)",
        "join-card-1": "url(../images/careers/join-card-1.svg)",
        "join-card-2": "url(../images/careers/join-card-2.svg)",
        "join-card-3": "url(../images/careers/join-card-3.svg)",
      },
      colors: {
        "dark-navy": "#495567",
        "dark-blue-gray": "#333A44",
        "light-gray-blue": "#939CAA",
        // "light-gray-blue": "##C6CDD2",
        "bright-yellow-orange": "#FCB72B",
        "cool-blue": "#E5ECF4",
      },
      minHeight: {
        "100dvh": "100dvh",
      },
      maxWidth: {
        "100dvw": "100dvw",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
      },
      cursor: {
        scoot: "url(../images/scoot-cursor.png), pointer",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".my-container": {
          "max-width": "calc(1110px + (32px * 2))",
          "padding-inline": "32px",
          "margin-inline": "auto",
        },
      });
    },
  ],
};
