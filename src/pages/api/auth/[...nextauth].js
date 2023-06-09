import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import dotenv from 'dotenv'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: process.env.JWT_SECRET,
});