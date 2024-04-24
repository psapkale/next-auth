import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
   providers: [
      CredentialsProvider({
         name: "Email",
         credentials: {
            username: {
               label: "Username",
               type: "text",
               placeholder: "Username",
            },
            password: {
               label: "Password",
               type: "password",
               placeholder: "Password",
            },
         },
         async authorize(credentials: any) {
            // validation
            const username = credentials.username;
            const password = credentials.password;

            // const user = await prisma.user.findOne({ username, password });

            return {
               id: "user1",
               name: "Harkirat Singh",
               email: "harkirat@gmail.com",
            };

            // for invalid crendetials
            return null;

            return {
               id: "user1",
            };
         },
      }),
   ],
});

export const GET = handler;
export const POST = handler;
