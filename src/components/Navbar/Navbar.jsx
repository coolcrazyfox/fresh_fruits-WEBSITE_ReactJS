import { FaLeaf } from "react-icons/fa";

const menuNavBar = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Shop", link: "/shop" },
  { id: 4, name: "Contacts", link: "/contacts" },
  { id: 5, name: "About", link: "/about" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-secondary">Fruit</p>
          <p className="text-primary">Store</p>
          <FaLeaf className="text-green-400 " />
        </div>
        <div>
          {menuNavBar.map((item, index) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
