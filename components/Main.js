import { Headine } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "./Main.module.css";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headine page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headine>
      <Links />
    </main>
  );
}
