import { getAllCars } from "./getallcars";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async () => {
  try {
    const cars = await getAllCars();
    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
