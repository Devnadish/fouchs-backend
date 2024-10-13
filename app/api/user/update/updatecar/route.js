import { UserCar } from "./updateUserCar";

export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  try {
    const data = await request.json();
    const { mobile, car, carModel, carYear, carId, carModelId } = data;
    const yearToString = carYear.toString();
    const userCar = await UserCar(
      mobile,
      carId,
      car,
      carModelId,
      carModel,
      yearToString
    );
    return new Response(JSON.stringify(userCar), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
