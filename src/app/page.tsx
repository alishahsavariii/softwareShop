import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import Welcome from "@/components/Welcome";

export default function HomePage() {

  return (
    <div className="flex flex-col items-center ustify-center h-screen">
      <Banner />
      <Welcome />
    </div>
  )
}
