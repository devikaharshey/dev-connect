import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="font-space-grotesk text-3xl text-purple-700">
        Welcome to Next.js!
      </h1>
    </>
  );
};

export default Home;
