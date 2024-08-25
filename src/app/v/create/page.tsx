import { CreateVisualizationForm } from "@/components/create-visualization-form";

export default function CreatePage() {
  return (
    <main className="container flex justify-center">
      <div className="w-full max-w-xl">
        <CreateVisualizationForm />
      </div>
    </main>
  );
}
