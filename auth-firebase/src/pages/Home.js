import { useSelector } from "react-redux";
import { Link, replace } from "react-router-dom";
import { logout } from "../firebase";
import { useDispatch } from "react-redux";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  if (user) {
    return (
      <div className="max-w-xl mx-auto py-5 grid place-items-center">
        <h1>Hoşgeldin : {user.email}</h1>
        <button
          onClick={handleLogout}
          className=" h-8 rounded px-4 text-sm text-white bg-indigo-700  "
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/register">Kayıt Ol</Link>
      <Link to="/login">Giriş Yap</Link>
    </div>
  );
}
