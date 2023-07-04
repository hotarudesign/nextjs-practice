import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
      {/* <Link href="/" legacyBehavior>
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={classes.anchor}>About</a>
      </Link> */}
    </header>
  );
};
