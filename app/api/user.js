import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session?.user) {
    return res.status(401).json({ erro: Unauthorized });
  }
  const userData = {
    username: session.user.name,
    name: session.user.username,
  };
  res.status(200).json(userData);
}
