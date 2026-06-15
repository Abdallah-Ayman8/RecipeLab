import AllRecipes from "@/components/AllRecipes/AllRecipes";
import Hero from "@/components/Hero/Hero";
import { Fragment } from "react";

export default async function Home() {

  return (
    <Fragment>
      <Hero />
      <AllRecipes />
    </Fragment>
  );
}
