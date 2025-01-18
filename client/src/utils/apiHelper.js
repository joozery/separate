import axios from "axios";

// โหลด API Keys
const geminiKeys = import.meta.env.VITE_GEMINI_API_KEYS.split(",");
const gemini1Keys = import.meta.env.VITE_GEMINI1_API_KEYS.split(",");
const gemini2Keys = import.meta.env.VITE_GEMINI2_API_KEYS.split(",");

// รวมคีย์ทั้งหมด
const allKeys = [...geminiKeys, ...gemini1Keys, ...gemini2Keys];
let currentKeyIndex = 0;

// ฟังก์ชันเลือก API Key
const getApiKey = () => {
  const apiKey = allKeys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % allKeys.length;
  return apiKey;
};

// ฟังก์ชันเรียก API
export const makeApiRequest = async (endpoint, data) => {
  for (let i = 0; i < allKeys.length; i++) {
    const apiKey = getApiKey();
    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && (error.response.status === 403 || error.response.status === 429)) {
        console.warn(`API Key ${apiKey} failed, trying next key...`);
        continue;
      }
      throw error;
    }
  }
  throw new Error("All API keys are exhausted or invalid.");
};
