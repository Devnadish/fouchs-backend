import { UserCar } from "./updateUserCar";

export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  console.log("object");
  try {
    const data = await request.json();
    console.log(data);
    const { mobile, car, carModel, carYear, carId, carModelId } = data;
    console.log(data);
    const yearToString = carYear.toString();
    const userCar = await UserCar(
      mobile,
      carId,
      car,
      carModelId,
      carModel,
      yearToString
    );
    return new Response("CarUpdated", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
