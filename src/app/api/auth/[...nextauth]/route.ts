import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";

// import Discord from "next-auth/providers/discord"
import { DISCORD_APP_ID, DISCORD_SECRET_KEY } from "@/utils/constants";


console.log(`🚀 ~ <<< DISCORD_CLIENT_ID:`, DISCORD_APP_ID, DISCORD_SECRET_KEY)

const scopes = ['identify', 'email']
export const { signIn, signOut, auth, handlers } = NextAuth({ 
  providers: [
    // Discord
    DiscordProvider({
      clientId: DISCORD_APP_ID,
      clientSecret: DISCORD_SECRET_KEY,
      // authorization: {params: {scope: scopes.join(' ')}},
    })
  ],
})