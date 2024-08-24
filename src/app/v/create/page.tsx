import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";

export default function CreatePage() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-xl">
        <Card className="w-full border-none">
          <CardHeader>
            <CardTitle>Create new visualization</CardTitle>
            <CardDescription>Just enter chat JSON</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Textarea className="resize-none" />
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
