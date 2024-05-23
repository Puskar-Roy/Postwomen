import React from "react";
import { Input } from "./ui/input";

const DomainSection = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center flex-row gap-4">
        <Input />
        <button>Send</button>
      </div>
    </div>
  );
};

export default DomainSection;
