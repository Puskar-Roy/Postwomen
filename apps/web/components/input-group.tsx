"use client";
import { useState, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const Inputgroup = () => {

      const [selectedCar, setSelectedCar] = useState<string>("");
      const [toogle, setToggle] = useState<boolean>(false);

      const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCar(event.target.value);
      };
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
        <select
          className={
            toogle
              ? `hidden`
              : `block px-5 py-2 dark:bg-slate-800 bg-slate-200 rounded-lg`
          }
          name="cars"
          id="cars"
          value={selectedCar}
          onChange={handleChange}
        >
          <option
            className="font-monobold"
            onClick={() => setToggle(!toogle)}
            value="volvo"
          >
            GET
          </option>
          <option
            className="font-monobold"
            onClick={() => setToggle(!toogle)}
            value="saab"
          >
            POST
          </option>
          <option
            className="font-monobold"
            onClick={() => setToggle(!toogle)}
            value="mercedes"
          >
            PUT
          </option>
          <option
            className="font-monobold"
            onClick={() => setToggle(!toogle)}
            value="audi"
          >
            PATCH
          </option>
          <option
            className="font-monobold"
            onClick={() => setToggle(!toogle)}
            value="audi"
          >
            DELETE
          </option>
        </select>
        <div className="flex flex-row gap-5">
          <Input className="flex" placeholder="http://localhost:8080..." />
          <Input className="flex" placeholder="/api/users/1..." />
        </div>
        <Button className=" bg-indigo-500 hover:bg-indigo-400 text-white">
          Send Request
        </Button>
      </div>
    </div>
  );
};

export default Inputgroup;
