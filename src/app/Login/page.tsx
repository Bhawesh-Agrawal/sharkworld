"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

// Validation schemas for Login and Sign Up
const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

const signupSchema = z
  .object({
    email: z.string().email("Invalid email address."),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      });
    }
  });

const Login = () => {
  const [signup, setsignup] = useState(false); // Toggle between Login and Sign Up

  // Dynamically set the schema based on the view
  const formSchema = signup ? signupSchema : loginSchema;

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: signup
      ? { email: "", username: "", password: "", confirmPassword: "" }
      : { username: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const endpoint = signup ? "/api/user" : "/api/login";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.token) {
      console.log(data);
      localStorage.setItem("token", data.token);
    }

    if (data.error) {
      console.log(data.error);
    } else {
      {
        signup ? setsignup(false) : router.push("/");
      }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 rounded shadow bg-gray-200">
      <h1 className="text-[40px] font-bold text-center mb-4">
        {signup ? "Sign Up" : "Login"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {signup && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px]">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="p-6 placeholder:text-[18px] text-[18px]"
                      placeholder="abc1234@xxx.xxx"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[20px]">Username</FormLabel>
                <FormControl>
                  <Input
                    className="p-6 placeholder:text-[18px] text-[18px]"
                    placeholder="abc123"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[20px]">Password</FormLabel>
                <FormControl>
                  <Input
                    className="p-6 placeholder:text-[18px] text-[18px]"
                    type="password"
                    placeholder="Abcdef!@#$123"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {signup && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px]">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-6 placeholder:text-[18px] text-[18px]"
                      type="password"
                      placeholder="Abcdef!@#$123"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit" className="w-full p-6 text-[20px]">
            {signup ? "Sign Up" : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm justify-end mt-4 pr-5 flex flex-row">
        {signup ? (
          <>
            <h3 className="text-[18px]">Have an account?</h3>
            <button
              onClick={() => setsignup(false)}
              className="text-blue-500 underline text-[18px] ml-1"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h3 className="text-[18px]">Don't have an account?</h3>
            <button
              onClick={() => setsignup(true)}
              className="text-blue-500 underline text-[18px] ml-1"
            >
              Sign Up
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default Login;
