import { addToFav } from "./addTofavorate";
import { RemoveFromFav } from "./favorite";

export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();

    const { userId, branchId } = data;
    const FavBranch = await addToFav(userId, branchId);

    return new Response(JSON.stringify(FavBranch), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};

// export const DELETE = async (request) => {
//   console.log("delete");
//   try {
//     const data = await request.json();

//     const { userId, branchId } = data;
//     console.log(userId, branchId);
//     const FavBranch = await RemoveFromFav(userId, branchId);

//     return new Response(JSON.stringify(FavBranch), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error processing request:", error);
//     return new Response("Error processing request", { status: 500 });
//   }
// };

export const GET = async (request) => {
  try {
    const data = await request.json();
    const { userId } = data;
    const FavBranch = await getFavorite(userId);
    return new Response(JSON.stringify(FavBranch));
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};

export const DELETE = async (request) => {
  console.log("delete");
  try {
    // Check if the request body is empty
    const contentLength = request.headers.get("content-length");
    if (!contentLength || contentLength === "0") {
      throw new Error("Request body is empty");
    }

    const data = await request.json();

    const { userId, branchId } = data;
    1;
    console.log(userId, branchId);
    const FavBranch = await RemoveFromFav(userId, branchId);

    return new Response(JSON.stringify(FavBranch), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request: " + error.message, {
      status: 500,
    });
  }
};
