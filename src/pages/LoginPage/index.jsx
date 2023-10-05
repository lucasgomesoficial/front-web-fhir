import { UserAuthForm } from "./components/user-auth-form";
import { WellnessIcon } from "../../assets/wellnessIcon";

export function Login() {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-14 text-secondary bg-primary dark:border-r lg:flex">
        <div className="flex items-center gap-3">
          <WellnessIcon />
          <h1 className="text-4xl">Wellness</h1>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Conecte-se
            </h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
