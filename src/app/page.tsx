import { redirect } from "next/navigation";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  redirect("/dashboard");
};

export default HomePage;
