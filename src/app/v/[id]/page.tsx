import { api } from "@/trpc/server";
import { jsonrepair } from "jsonrepair";
import { z } from "zod";
import { Visualizer } from "../../../components/visualizer";
import { Message } from "../../../types/message";

export default async function VPage({ params }: { params: { id: string } }) {
  const initMessages = await api.visualization.getById({ id: params.id });
  if (!initMessages)
    return <h1 className="text-4xl">Unable to get visualization</h1>;
  const safeInitMessages = z
    .array(Message)
    .safeParse(JSON.parse(jsonrepair(initMessages.content)));
  if (!safeInitMessages.success)
    return (
      <>
        <h1 className="text-4xl">Error while parse data from db</h1>
        <p className="mt-10">{JSON.stringify(safeInitMessages.error)}</p>
        <p>{JSON.stringify(initMessages.content)}</p>
      </>
    );
  return <Visualizer initMessages={safeInitMessages.data} />;
}
