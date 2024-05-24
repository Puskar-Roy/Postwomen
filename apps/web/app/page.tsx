import { ModeToggle } from "../components/theme-button";
import Inputgroup from "../components/input-group";

export default function page() {

  return (
    <main>
      <div className="h-screen w-screen">
        <ModeToggle />
        <Inputgroup />
      </div>
    </main>
  );
}
