import CssSyntaxError_ from 'postcss/lib/css-syntax-error';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary_text_heading: "#790E6F", 
        secondary_text_heading: "#565F6C" ,
        Secondary_page_heading:"#473F47",
        link_text: "#1E4AE9",
        white_text: "#FFFFFF",
        black_text: "#122B31",
        input_field_border: "#6E6E714D",
        input_field_placeholder: "#8897AD",
        input_label: "#0C1421",
        bg_color : "#F4E7F3",
        c3:"#D07CC6",
        c4:"#BC84BC",
        primary_button_bg: "#790E6F",
        cancel_button_border: "#6E6E71",
        model_heading_text_color : "#35353A",
        model_secondary_text_color : "#5E5E5E",
        hr_color : "#D9D9D9",
       
        radio_button_accent: "#006CBD",

        registerCard_content_text: "#87888C",
        registerCard_border: "#D9D9D95E",

        model_heading_text_color: "#2D5697",

        primary_Icon_color : "#2D5697",
        send_OTP_button_bg: "#D9D9D93B",
        send_OTP_button_bg_text_color: "#6E6E71",

        error_text_color: "#FF0000",
        star_mark_color: "#FF0000",

        sidebar_bg: "#006CBD",
        employee_page_card_border: "#A5C7FF80",

        search_bar_border:"#006CBD",
        table_header_bg:"#790E6F",
        search_bar_text:"#6E6E71",

        mobile_table_border:"#D9D9D9",
        mobile_table_text:"#6B778C",

        approve_button_bg: "#10B981",
        reject_button_border:"#EF4444",

        settings_card_buttons_bg:"#2D5697",
      },
    },
  },
  plugins: [
 
],

}

