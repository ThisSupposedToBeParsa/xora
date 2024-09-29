import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({
    title,
    to,
    offset,
  }: {
    title: string;
    to: string;
    offset?: number;
  }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      className="base-bold text-p4 uppercase transition-colors duration-200 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
      to={to}
      smooth
      offset={offset || -100}
      spy
      activeClass="nav-active"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-200 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="Xora" width={115} height={55} />
        </a>
        <div
          className={clsx(
            "w-full lowercase max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Features" to="features" />
                  <div className="dot" />
                  <NavLink title="Pricing" to="pricing" offset={-1} />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-200 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="Logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="FAQ" to="faq" offset={-1} />
                  <div className="dot" />
                  <NavLink title="Download" to="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="Outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="Outline"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-20"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="Menu"
            className="size-1/2 object-contain transition-all duration-200"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
