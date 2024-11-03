import React from "react";
import "./Classrooms.css";
import ClassroomsAction from "./ClassroomsAction";
import { Separator } from "../ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClassroomNavigationItem } from './ClassroomNavigationBar';

const Classrooms = () => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const getClassrooms = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/classroom/classrooms"
        );
        setClassrooms(res.data);
      } catch (error) {
        console.log("Something went wrong: ", error.message);
      }
    };

    getClassrooms();
  }, []);
  
  return (
    <div className="classroom-side-bar">
      <ClassroomsAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mt-2 mx-auto" />
      <ScrollArea className="flex-1 w-full overflow-auto h-[80vh]">
        {classrooms.map((classroom) => (
          <div key={classroom._id} className="mb-4">
            <ClassroomNavigationItem id={classroom._id} className={classroom.classroomName} imageUrl={classroom.imageUrl}/>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Classrooms;
