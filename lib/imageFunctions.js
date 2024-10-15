"use server";
import { getPlaiceholder } from "plaiceholder";

export const getBase64Image = async (src) => {
  try {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const { base64, img } = await getPlaiceholder(buffer);

    // Log the Base64 string for debugging
    console.log("Base64 Placeholder Image:", base64);

    // Return the Base64 string in the format required for images
    return base64; // This will return the placeholder Base64 string
  } catch (err) {
    console.error("Error in getBase64Image:", err);
    throw err; // Rethrow the error for further handling
  }
};
