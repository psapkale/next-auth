import { getServerSession } from "next-auth";

async function getUser() {
   const session = await getServerSession();
   return session;
}

export default async function () {
   const session = await getUser();

   return <div>{JSON.stringify(session?.user)}</div>;
}
