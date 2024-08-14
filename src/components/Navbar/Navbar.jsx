import { FaLeaf } from "react-icons/fa";

const initMenuNavBar = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Shop", link: "/shop" },
  { id: 4, name: "Contacts", link: "/contacts" },
  { id: 5, name: "About", link: "/about" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4 md:pt-4">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-secondary">Fruit</p>
          <p className="text-primary">Store</p>
          <FaLeaf className="text-green-400 " />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-700">
            {initMenuNavBar.map((item, index) => {
              return (
                <li className="text-xl" key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
