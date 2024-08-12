import { updateUserProfile } from "./updateUserProfile";

export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  console.log("object");
  try {
    const data = await request.json();
    console.log(data);
    const { oldMobile, mobile, name, email, password, avatar, city } = data;
    console.log(data);
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
