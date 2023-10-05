import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authProvider";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const { signin } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    setIsLoading(true)

    function callback() {
      navigate("/dashboard")
      setIsLoading(false)
    }

    signin(data, callback);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Login"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              password
            </Label>
            <Input
              id="password"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Conectar
          </Button>
        </div>
      </form>
    </div>
  );
}
