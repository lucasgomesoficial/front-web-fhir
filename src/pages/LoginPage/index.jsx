import { UserAuthForm } from "./components/user-auth-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Login() {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-secondary bg-primary dark:border-r lg:flex">
        <div className="relative flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          FHIR Fiap
        </div>
        <div className="relative mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <a
            // href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8 cursor-pointer"
            )}
          >
            Cadastra-se
          </a>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Entre com seu acesso e desfrute de nossos serviços.
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao entrar, você concorda com os nossos{" "}
            <a
              // href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de serviço
            </a>{" "}
            e{" "}
            <a
              // href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
