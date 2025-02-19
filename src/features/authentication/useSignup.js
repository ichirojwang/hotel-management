import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        `Account successfully created\nPlease verify the new account from the user's email address`
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
};
