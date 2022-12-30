import { Suspense } from "react";
import { ListOfPosts } from "./ListOfPosts";

export default async function PostPage({ params }) {
  return (
    <section>
      {/* <Suspense fallback={<p>CARGANDOOOOOO posts...</p>}> */}
        <ListOfPosts />
      {/* </Suspense> */}
    </section>
  );
}
