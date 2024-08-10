// import { createZodFetcher } from "zod-fetch";

// const fetchUser = createZodFetcher();

export async function getUser(id: number) {
  const user = await fetch(`http://localhost:3500/users/${id}`);

  return user;
}
