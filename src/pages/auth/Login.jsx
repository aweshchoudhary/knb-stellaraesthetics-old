import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isUserAuthenticated
  );
  const navigate = useNavigate();
  console.log(isUserAuthenticated);
  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isUserAuthenticated]);
  return (
    <section className="flex h-screen items-center justify-center">
      <div>
        <h1 className="md:text-5xl text-3xl mb-3 font-semibold">
          Redirecting To Zitadel Auth
        </h1>
        <p className="text-lg">Please Wait...</p>
      </div>
    </section>
  );
};

export default Login;
