"use client";

import type { HTMLAttributes } from "react";
import { drizzleTest } from "@/lib/db/actions";

export function DrizzleTest(props: HTMLAttributes<HTMLButtonElement>) {
  async function handleOnClick() {
    await drizzleTest()

    alert("drizzle test complete. please check server logs")
    
  }

  return (
    <button
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      type="button"
      onClick={handleOnClick}
      {...props}
    />
  );
}
