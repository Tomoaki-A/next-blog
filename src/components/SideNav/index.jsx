import Link from "next/link";

const SideNav = () => {
  const navList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  return (
    <div className="bg-neutral-700  w-64 h-[calc(100vh-4rem)]  border-gray-600 border-r border-solid">
      <ul>
        {navList.map((nav, index) => {
          return (
            <li className="px-8 py-4" key={index}>
              <Link href={nav.path}>
                <a className="block">{nav.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
