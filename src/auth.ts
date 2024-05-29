import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// console.log(
//   `🚀 ~ process.env.AUTH_DISCORD_SECRET:`,
//   process.env.AUTH_DISCORD_SECRET
// );
// console.log(`🚀 ~ process.env.AUTH_DISCORD_ID:`, process.env.AUTH_DISCORD_ID);

// const scopes = ['identify', 'email']
export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET
      // authorization: {params: {scope: scopes.join(' ')}},
    })
  ]
});
