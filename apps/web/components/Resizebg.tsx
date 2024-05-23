import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import DomainSection from "./DomainSection";
import { TabsDemo } from "./tabs";
import { ModeToggle } from "./theme-button";

export default function Resizebg() {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex  items-center flex-col justify-center p-6">
              <h1 className="text-4xl">Post Women</h1>
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
