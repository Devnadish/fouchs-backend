import { updateUserProfile } from "./updateUserProfile";

export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  try {
    const data = await request.json();
    const { oldMobile, mobile, name, email, password, avatar, city } = data;
    const updateUser = await updateUserProfile(
      oldMobile,
      mobile,
      name,
      email,
      password,
      avatar,
      city
    );
    return new Response("updated", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
