import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";
import Discord from "next-auth/providers/discord";

import { IS_DEV } from "@/utils/constants";

export const { signIn, signOut, auth, handlers } = NextAuth({
  debug: IS_DEV,
  basePath: "/api/auth",
  // callbacks: {
    // jwt({ token, trigger, session, account }) {
    //   console.log(`🚀 ~ <<<< token`, token);
    //   console.log(`🚀 ~ <<<< account`, account);
    //   console.log(`🚀 ~ <<<< session`, session);

    //   return token;
    // },
    // async session({ session, token, user }) {
    //   console.log(
    //     `🚀 ~ >>> session ~ session, token, user:`,
    //     session,
    //     token,
    //     user
    //   );
    //   return session;
    // }
  // },
  providers: [
    // {
    //   id: "discord",
    //   name: "Discord",
    //   type: "oauth",
    //   authorization:
    //     "https://discord.com/api/oauth2/authorize?scope=identify+email",
    //   token: "https://discord.com/api/oauth2/token",
    //   userinfo: "https://discord.com/api/users/@me",
    //   profile(profile) {
    //     if (profile.avatar === null) {
    //       const defaultAvatarNumber =
    //         profile.discriminator === "0"
    //           ? Number(BigInt(profile.id) >> BigInt(22)) % 6
    //           : parseInt(profile.discriminator) % 5;
    //       profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
    //     } else {
    //       const format = profile.avatar.startsWith("a_") ? "gif" : "png";
    //       profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
    //     }
    //     return {
    //       ...profile,
    //       id: profile.id,
    //       name: profile.global_name ?? profile.username,
    //       email: profile.email,
    //       image: profile.image_url
    //     };
    //   },
    //   style: { bg: "#5865F2", text: "#fff" },
    //   options: {
    //     clientId: process.env.AUTH_DISCORD_ID,
    //     clientSecret: process.env.AUTH_DISCORD_SECRET
    //   }
    // }
    // Discord,
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
      redirectProxyUrl: "http://localhost:3555/api/auth",
      authorization: {
        params: {
          scope: "identify email",

        },
      },
      profile: (profile) => {
        if (profile.avatar === null) {
          const defaultAvatarNumber =
            profile.discriminator === "0"
              ? Number(BigInt(profile.id) >> BigInt(22)) % 6
              : parseInt(profile.discriminator) % 5;
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png";
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }
        return {
          id: profile.id,
          name: profile.global_name ?? profile.username,
          email: profile.email,
          image: profile.image_url,
          snowflake: `_${profile.id}`,
        };
      }
    })
  ]
});
