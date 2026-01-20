import { cookies } from "next/headers";

export default function LoggedInConfirmation() {
  const loggedIn = cookies().get("login");
  return <p>{loggedIn ? "Logged in" : "Not logged in"}</p>;
}
