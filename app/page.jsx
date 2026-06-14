import AllRecipes from "@/components/AllRecipes/AllRecipes";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { Fragment } from "react";

export default async function Home() {

  return (
    <Fragment>
      <Header />
      <Hero />
      <AllRecipes />
    </Fragment>
  );
}
