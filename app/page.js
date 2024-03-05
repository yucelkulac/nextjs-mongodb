import NewButton from "@/components/NewButton";
import { NavigationMenuDemo } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <NewButton />
    </div>
  );
}
