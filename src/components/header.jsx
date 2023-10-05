import { WellnessIcon } from "../assets/wellnessIcon";
import { Button } from "./index";
import { LogOut } from "lucide-react";
import { useAuth } from "../context/authProvider";

export function Header() {
  const { signout, user } = useAuth();
  function test() {
    console.log("logout")
  }

  return (
    <header className="flex justify-between items-center bg-primary h-20 text-secondary px-14 font-semibold">
      <div className="flex items-center gap-3">
        <WellnessIcon />
        <h1 className="text-4xl">Wellness</h1>
      </div>

      <div className="flex gap-8 items-center">
        <p>{user.email}</p>
        <p>CPF: 000000000-00</p>
        <Button
          variant="outline"
          className="flex gap-5 text-primary"
          onClick={() => signout(test)}
        >
          <LogOut /> Sair
        </Button>
      </div>
    </header>
  );
}
