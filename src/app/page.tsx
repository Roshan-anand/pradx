"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-black h-screen w-screen">
      <Button
        className={"bg-green-500 rounded-md font-bold"}
        onClick={async () => {
          const data = await fetch("/api/sample", { method: "POST" });
          const body = await data.json();
          console.log("data :", body.message);
        }}
      >
        Click me
      </Button>
    </main>
  );
}
