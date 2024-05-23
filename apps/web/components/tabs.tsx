import DomainSection from "./DomainSection";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[100%]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">REST API</TabsTrigger>
        <TabsTrigger value="password">Socket.IO</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <DomainSection/>
      </TabsContent>
      <TabsContent value="password">
        <DomainSection/>
        
      </TabsContent>
    </Tabs>
  );
}
