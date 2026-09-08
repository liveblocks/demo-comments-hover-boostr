import { Room } from "./room";
import { PageHome } from "@/components/site/pagehome";
import { Cursors } from "@/components/cursors/cursors";
import { Header } from "@/components/site/header";

export default function Home() {
  return (
    <Room>
      <Header />
      <PageHome />
      <Cursors />
    </Room>
  );
}
