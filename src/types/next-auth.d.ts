import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { AdapterUser } from "next-auth/adapters";

callbacks: {
  async jwt({ token, user }: { token: JWT; user?: any }) {
    if (user) {
      token.user = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      token.token = user.token;
    }
    return token;
  },

  async session(params: {
    session: Session;
    token: JWT;
    user: AdapterUser;
    newSession: any;
    trigger?: "update";
  }) {
    const { session, token } = params;

    if (token?.user) {
      session.user = token.user as any;
      // @ts-expect-error
      session.user.token = token.token;
    }
    return session;
  },
}




/*
declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    role: string;
    token: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
  }
}
*/