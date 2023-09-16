import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/profile");
    return (
      <div>
        <lable>
          Username:{" "}
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </lable>
      </div>
    );
  };
};
