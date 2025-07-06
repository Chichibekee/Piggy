import { LuChevronDown } from "react-icons/lu";
import Button from "../components/reuseable/Button";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import pigglogo from "../assets/images/pigglogo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showSaveDropdown, setShowSaveDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSaveDropdown = () => {
    setShowSaveDropdown(!showSaveDropdown);
    setShowResourcesDropdown(false);
  };

  const handleResourcesDropdown = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
    setShowSaveDropdown(false);
  };

  return (
    <>
      <header className="h-24 relative bg-white shadow-sm z-50">
        <div className="max-w-[1280px] px-16 mx-auto flex h-full items-center justify-between">
          <section className="flex items-center">
            <Link to="/">
              <img src={pigglogo} alt="Logo" />
            </Link>

            <nav className="flex mx-12 gap-9 items-center font-medium max-tablet:hidden">
              {/* Save Dropdown */}
              <div
                className="relative flex items-center gap-0.5 cursor-pointer"
                onMouseEnter={handleSaveDropdown}
              >
                <span>Save</span>
                <LuChevronDown size={20} />

                {showSaveDropdown && (
                  <div className="absolute top-8 left-0 bg-white shadow-md rounded p-10 w-100 z-60">
                    <div className="grid grid-cols-2 gap-8">
                      <ul className="space-y-2">
                        <li>
                          <Link to="/piggybank">PiggyBank</Link>
                        </li>
                        <li>
                          <Link to="/target-savings">Targeted Savings</Link>
                        </li>
                        <li>
                          <Link to="/flex-dollar">Flex Dollar</Link>
                        </li>
                      </ul>

                      <ul className="space-y-2">
                        <li>
                          <Link to="/safe-lock">Safe Lock</Link>
                        </li>
                        <li>
                          <Link to="/flex-naira">Flex Naira</Link>
                        </li>
                        <li>
                          <Link to="/house-money">House Money</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/invest">
                <span>Invest</span>
              </Link>

              <Link to="/stories">
                <span>Stories</span>
              </Link>

              <Link to="/shop">
                <span>Shop</span>
              </Link>

              <Link to="/faqs">
                <span>FAQs</span>
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative flex items-center gap-0.5 cursor-pointer"
                onMouseEnter={handleResourcesDropdown}
              >
                <span>Resources</span>
                <LuChevronDown />

                {showResourcesDropdown && (
                  <div className="absolute top-8 left-0 bg-white shadow-md rounded p-10 w-80 z-50">
                    <div className="grid grid-cols-2 gap-8">
                      <ul className="space-y-2">
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/comics">Comics</Link>
                        </li>
                        <li>
                          <Link to="/newsletter">Newsletter</Link>
                        </li>
                      </ul>

                      <ul className="space-y-2">
                        <li>
                          <Link to="/reports">Reports</Link>
                        </li>
                        <li>
                          <Link to="/calculator">Calculator</Link>
                        </li>
                        <li>
                          <Link to="/ebook">Ebook</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </section>

          <section className="flex gap-2 max-tablet:hidden">
            <Button title="Sign In" borderColor="#122231" />
            <Button
              title="Create free Account"
              bgColor="#122231"
              textColor="#fff"
            />
          </section>

          <section className="hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>
      </header>

      <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>
    </>
  );
};

export default Header;
