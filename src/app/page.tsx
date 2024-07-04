import { Room } from "./Room";
import { PageHome } from "@/components/site/PageHome";
import { Cursors } from "@/components/cursors/Cursors";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <Room>
      <Header />
      <PageHome />
      <Cursors />
    </Room>
  );
}
