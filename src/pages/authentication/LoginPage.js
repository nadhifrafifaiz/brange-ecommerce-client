import React from "react";
import BasePasswordInput from "../../components/atom/BasePasswordInput";
import BaseTextInput from "../../components/atom/BaseTextInput";
import { Button } from "primereact/button";

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-col gap-2 -space-y-px rounded-md shadow-sm">
              <div>
                <BaseTextInput label="" placeholder="Email Address" />
              </div>
              <div>
                <BasePasswordInput label="" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button
                label="Login"
                className="group relative flex w-full justify-center rounded-md border border-transparent"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
