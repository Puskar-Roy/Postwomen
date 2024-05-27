import { ModeToggle } from "../components/theme-button";
import Inputgroup from "../components/input-group";
import Bodyfields from "../components/body-fields";

export default function page() {
  return (
    <main>
      <div className="min-h-[120vh] w-full bg-slate-900 bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-screen z-10 w-[80%] mx-auto">
          <ModeToggle />
          <Inputgroup />
          <Bodyfields/>
        </div>
      </div>
    </main>
  );
}
