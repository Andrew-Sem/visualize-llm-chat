import { Badge } from "@/components/ui/badge";
import { HydrateClient } from "@/trpc/server";
import Link from "next/link";
import { Button, buttonVariants } from "../components/ui/button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="container">
        <section className="mt-16 text-center">
          <div className="mb-2">
            <Badge variant="outline">Why? Cause I can</Badge>
          </div>
          <h1 className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-sans text-5xl font-extrabold text-transparent lg:text-6xl">
            Visualize LLM chat
          </h1>
          <div className="mt-10 space-x-4">
            <Link href={"/v/create"} className={buttonVariants()}>
              Create new
            </Link>
            <Button variant={"outline"}>My visualizations</Button>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
