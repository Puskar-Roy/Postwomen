import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const DomainSection = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center flex-row gap-4">
        <Input/>
        <Button className="bg-indigo-500 hover:bg-indigo-400 dark:text-white">Send</Button>
      </div>
    </div>
  );
};

export default DomainSection;
