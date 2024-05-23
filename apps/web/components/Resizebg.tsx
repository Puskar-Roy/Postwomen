import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import DomainSection from "./DomainSection";
import { TabsDemo } from "./tabs";
import { ModeToggle } from "./theme-button";
import Image from "next/image";
import logo from "./../public/logo-api2.png";
import { Alegreya_SC } from "next/font/google";

const inter = Alegreya_SC({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Resizebg() {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex  items-center flex-col justify-center gap-10 p-6">
              <div className="flex justify-center items-center gap-2 flex-row">
                <Image
                  src={logo}
                  height={80}
                  width={80}
                  className="rounded-2xl"
                  alt="logo"
                />
                <h1 className={`${inter.className} text-4xl `}>Post Women</h1>
              </div>
              <div>
                <TabsDemo />
                <ModeToggle />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex  items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={30}>
        <div className="">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
