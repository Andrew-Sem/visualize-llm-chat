import { Badge } from "@/components/ui/badge";
import { HydrateClient } from "@/trpc/server";
import Link from "next/link";
import { Button, buttonVariants } from "../components/ui/button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="container">
        <section className="mt-20 text-center">
          <h1 className="text-5xl lg:text-6xl">Visualize LLM chat</h1>
          <div className="mt-2">
            <Badge variant="outline">Why? Cause I can</Badge>
          </div>
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
