import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

export const { signIn, signOut, auth, handlers } = NextAuth({
  debug: false,
  basePath: "/api/auth",
  providers: [
    // Discord,
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
      // authorization: {
      //   params: {
      //     scope: "identify email guilds id",
      //   },
      // },
      profile: (profile) => {
        console.log(`🚀 ~ profile:`, profile);
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
        };
      }
      // authorization:
      //   "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
    })
  ]
});
