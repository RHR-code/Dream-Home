"use client";
import { handleLogout } from "@/app/actions";

const Logout = () => {
  return (
    <button onClick={() => handleLogout()} className="btn btn-primary">
      LogOut
    </button>
  );
};

export default Logout;
