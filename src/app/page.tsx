import { Room } from "./Room";
import { PageHome } from "@/components/site/PageHome";
import { Cursors } from "@/components/cursors/Cursors";
import { Comments } from "@/components/comments/Comments";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <Room>
      <Header />
      <PageHome />
      <Cursors />
      <Comments />
    </Room>
  );
}
