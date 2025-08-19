import Logo from "../assets/Logo.png"

export default function Footer({ className }) {
  return (
    <footer
      className="footer-fixed-portrait footer-fixed-desktop w-full text-center font-normal text-[10px] md:text-[13px] lg:text-[15px]  3xl:text-[20px]"
    >
      <p>Version 1.0.0</p>
      <p>
        Powered by Laura 
      | &copy; 2025 - All rights reserved.
      </p>
    </footer>
  );
}