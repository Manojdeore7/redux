import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sliceAuthActions } from "../strore/Auth";

const Auth = () => {
  let dispatch = useDispatch();
  let onSubmitHandeler = (e) => {
    e.preventDefault();
    dispatch(sliceAuthActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandeler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
