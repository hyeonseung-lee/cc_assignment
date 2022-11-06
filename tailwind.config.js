/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'logo' : "#8B3EEB",
        'char_bg' : "#F4F4F7",
        'text_color' : "#333333",
        'message' : "#A56BEE",
        'cancel' : "#ECECF3",
        'clear' : "#FE7474", 
      },
      spacing: {
        "4.8":"19px",
        "7.1" :"29px",
        "13" : "50px",
        "16.5":"65px",
        "16.7" : "67px",
        "17": "68px",
        "19" :"78px",
        "45":"180px",
        "container_w" : "815px",
        "container_h" : "627px",
        "conversation_w":"560px",
        "conversation_h":"587px",
      },
      maxWidth: {
        "maxChat" : "270px",
      }
    },
  },
  plugins: [],
};
