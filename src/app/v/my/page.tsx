import { api } from "@/trpc/server";
import { jsonrepair } from "jsonrepair";
import Link from "next/link";
import { VisCard } from "../../../components/vis-card";
import { Message } from "../../../types/message";

export default async function MyVisPage() {
  const visualizations = await api.visualization.getAllForUser();
  return (
    <main className="container">
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
