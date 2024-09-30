/* eslint-disable prettier/prettier */
import type { NextAuthOptions } from "next-auth";

import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import FacebookProvider, { FacebookProfile } from "next-auth/providers/facebook";
import CredentialsPrvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        console.log(profile);

        return {
          ...profile,
          id: profile.id.toString(),
          role: profile.role ?? "user",
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      profile(profile: FacebookProfile) {
        console.log(profile);

        return {
          ...profile,
          id: profile.id.toString(),
          role: profile.role ?? "user",
          image: profile.avatar_url,
        };
      },
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    CredentialsPrvider({
      name: "Credentials",
      credentials: {
      email: {},
      password: {}
    },
      async authorize(credentials) {
        try {
          
          const res = await fetch(`${process.env.END_POINT}/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        if (
            credentials?.email === user.email &&
            credentials?.password === user.password
          ){
            return user
          }
        } catch (error) {
          //  throw new Error(error?.message);
        }
      // Return null if user data could not be retrieved
      return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser:"/sign-up"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;

      return token;
    },
    // if you want to use the role in client components
    async session({ session, token }) {
      if (session) session.user.role = token.role;

      return session;
    },
  },
};
