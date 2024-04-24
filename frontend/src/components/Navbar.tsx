import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./PagesBoilerplate/Logo";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const loc = useLocation();
  //form button
  const [contactForm, setContactForm] = useState({
    click: false,
    color: "black",
    bg: "#f3f4f6",
    formD: "none",
  });
  function toggleCF() {
    setContactForm((obj) => {
      return {
        click: !obj.click,
        color: "#064E3B",
        bg: "rgb(223 183 239)",
        formD: obj.click ? "none" : "block",
      };
    });
  }
  //Navigate hook and styles
  const navigate = useNavigate();
  const font_Classes =
    "sans-serif text-md font-bold capitalize tracking-tight ";
  const link_hover_Classes =
    loc.pathname === "/"
      ? "hover:bg-zinc-100 text-white hover:text-black"
      : "hover:bg-zinc-900 hover:text-white";

  //Responsive width
  const [Dstate, setDstate] = useState(
    window.innerWidth <= 750 ? "phone" : "wide"
  );
  useEffect(() => {
    function responsiveNavbar() {
      if (window.innerWidth <= 750) {
        setDstate("phone");
      } else {
        setDstate("wide");
      }
    }

    window.addEventListener("resize", responsiveNavbar);

    return () => {
      window.removeEventListener("resize", responsiveNavbar);
    };
  }, []);

  //Responsive list
  const [listD, setListD] = useState(false);
  function resnav() {
    setListD(!listD);
  }

  //scroll nav hide
  const [navbarD, setNavbarD] = useState("flex");
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  useEffect(() => {
    function handleScroll() {
      if (scrollPos < window.scrollY) {
        setNavbarD("none");
        setScrollPos(window.scrollY);
      } else {
        setNavbarD("flex");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{ display: navbarD }}
      className={`flex justify-between  w-screen px-3 py-4 fixed z-[999]`}
    >
      <SignedOut>
        <Logo />
      </SignedOut>
      <SignedIn>
        <span className={`flex  px-2 py-2  cursor-pointer `}>
          <span className={`border-2 rounded-full border-purple-600`}>
            <UserButton />
          </span>
        </span>
      </SignedIn>
      {Dstate == "wide" && (
        <div className="links">
          <SignedOut>
            <SignInButton
              className={`px-3 py-3 mx-2 rounded-sm cursor-pointer inline-block ${font_Classes} ${link_hover_Classes} ml-20  contact-button`}
            />
          </SignedOut>
        </div>
      )}
    </header>
  );
}

export default Navbar;
