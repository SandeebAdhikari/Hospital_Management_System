import React from "react";
import Link from "next/link";

interface FormData {
  username: string;
  password: string;
  email?: string;
}

interface AuthFormProps {
  type: "signIn" | "signUp";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  onChange,
  onSubmit,
  formData,
}) => {
  return (
    <div
      className={`flex p-5 items-center justify-center w-[400px] ${
        type === "signIn" ? "h-[373px]" : "h-[418px]"
      } bg-[#161D2F] rounded-[20px]`}
    >
      <form onSubmit={onSubmit} className="flex flex-col w-full p-4">
        <h2 className="mt-8 text-[32px] text-white">
          {type === "signIn" ? "Login" : "Sign Up"}
        </h2>

        {type === "signUp" && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={onChange}
            required
            className="w-[336px] h-[37px] mt-10 p-2 border-b border-[#5A698F] bg-[#161D2F] outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
          />
        )}
        <input
          type="username"
          name="username"
          placeholder={type === "signIn" ? "Username or Email" : "Username"}
          value={formData.username}
          onChange={onChange}
          required
          className={`w-[336px] h-[37px] ${
            type === "signIn" ? "mt-10" : "mt-6"
          } p-2 border-b border-[#5A698F] bg-[#161D2F] outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer`}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
          className="w-[336px] h-[37px] mt-6 p-2 border-b border-[#5A698F] bg-[#161D2F] outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
        />

        <button
          type="submit"
          className="mt-6 bg-[#FC4747] text-white p-2 w-[336px] h-[48px] rounded hover:bg-white hover:text-black"
        >
          <span className="text-[15px] font-light">
            {type === "signIn" ? "Login to your account" : "Create an account"}
          </span>
        </button>

        <p className="mt-6 mb-8 text-center text-[15px] text-white">
          {type === "signIn" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/signUp"
                className="text-[#FC4747] hover:cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="/signIn"
                className="text-[#FC4747] hover:cursor-pointer"
              >
                Login
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
