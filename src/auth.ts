import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";



export const { signIn, signOut, auth, handlers } = NextAuth({
  debug: true,
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token }
      }
      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }
      return session
    },
  },
  providers: [
    Discord,
    // Discord({
    //   clientId: process.env.AUTH_DISCORD_ID,
    //   clientSecret: process.env.AUTH_DISCORD_SECRET,
    //   authorization:
    //     "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
    // })
  ]
});



