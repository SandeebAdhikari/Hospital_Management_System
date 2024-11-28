import React from "react";
import Link from "next/link";

interface FormData {
  username: string;
  password: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  dob?: string;
  ssn?: string;
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
      className={`flex p-5 items-center justify-center w-[400px]  ${
        type === "signIn" ? "h-[373px] " : "h-auto"
      }  rounded-[20px]`}
    >
      <form onSubmit={onSubmit} className="flex flex-col w-full p-4">
        <h2 className="mt-8 text-[32px] text-white">
          {type === "signIn" ? "Sign In" : "Sign Up"}
        </h2>

        {type === "signUp" && (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName || ""}
                onChange={onChange}
                required
                className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName || ""}
                onChange={onChange}
                required
                className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address || ""}
              onChange={onChange}
              required
              className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city || ""}
              onChange={onChange}
              required
              className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state || ""}
                onChange={onChange}
                required
                className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip || ""}
                onChange={onChange}
                required
                className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob || ""}
                onChange={onChange}
                required
                className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
              />
              <input
                type="text"
                name="ssn"
                placeholder="SSN"
                value={formData.ssn || ""}
                onChange={onChange}
                required
                className="w-[336px] h-[37px] mt-10 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
              />
            </div>
          </>
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
          } p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer`}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
          className="w-[336px] h-[37px] mt-6 p-2 border-b border-gray bg-transparent outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
        />

        <button
          type="submit"
          className="mt-6 bg-transparent shadow-white/35 shadow-sm text-white p-2 w-[336px] h-[48px] rounded hover:bg-white hover:text-black"
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
                className="text-gray  hover:cursor-pointer hover:underline"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="/signIn"
                className="text-gray hover:cursor-pointer hover:underline"
              >
                Sign In
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
