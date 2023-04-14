import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Pokemon</h1>
      <section className="nav-link">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/pokepage">
            <li>Pokemon Page</li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
