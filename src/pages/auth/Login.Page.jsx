import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../services/endpoints/auth.api";

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      await login(data).unwrap();
    } catch (error) {
      alert(error.data.message);
    }
  };
  return (
    <section className=" w-full h-screen grid place-items-center">
      <div className=" w-[95%] md:w-[350px]">
        <h1 className=" text-center font-semibold mb-5 text-xl">Login</h1>
        <form
          action=""
          className=" space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input label="Email" name="email" {...register("email")} />
          <Input label="Password" name="password" {...register("password")} />
          <Button type="submit" className=" w-1/2 block mx-auto">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}
