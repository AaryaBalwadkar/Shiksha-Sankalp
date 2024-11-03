import { create } from "zustand";
import axios from "axios";

const API_MESSAGE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/messages"
    : "/api/messages";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;

export const useConversationStore = create((set) => ({
  user: null,

  sendMessage: async (id, message) => {
    try {
      const response = await axios.post(`${API_MESSAGE_URL}/send/${id}`, {
        message,
      });

      if (response && response.data) {
        console.log("Message sent:", response.data);
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
      if (error.response) {
        console.error("API Error:", error.response.data); // Log detailed API error
      }
    }
  },
  getMessage: async (message) => {
    try {
      const response = await axios.post(`${API_URL}/:id`);
      console.log(response);
    } catch (error) {
      set({
        error: error.response.data.message || "Error in sending message",
        isLoading: false,
      });
      throw error;
    }
  },
}));
