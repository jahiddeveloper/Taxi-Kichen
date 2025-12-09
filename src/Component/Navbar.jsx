import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <Logo></Logo>
      <nav>
        <ul className="flex gap-16 ">
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold hover:text-amber-500"
            >
              Orders
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold hover:text-amber-500"
            >
              Foods
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold hover:text-amber-500"
            >
              Tables
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold hover:text-amber-500"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
