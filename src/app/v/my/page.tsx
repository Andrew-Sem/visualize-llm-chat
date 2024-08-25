import { api } from "@/trpc/server";
import { jsonrepair } from "jsonrepair";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../../../components/ui/button";
import { VisCard } from "../../../components/vis-card";
import { cn } from "../../../lib/utils";
import { Message } from "../../../types/message";

export default async function MyVisPage() {
  const visualizations = await api.visualization.getAllForUser();
  return (
    <main className="container">
      <div className="my-5 flex justify-end">
        <Link className={cn(buttonVariants(), "space-x-2")} href="/v/create">
          <PlusIcon className="h-4 w-4" />
          <span>Create new</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {visualizations.map((vis) => (
          <Link key={vis.id} href={`/v/${vis.id}`}>
            <VisCard
              messages={Message.array().parse(
                JSON.parse(jsonrepair(vis.content)),
              )}
              createdAt={vis.createdAt}
              title={vis.title}
              description={vis.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
