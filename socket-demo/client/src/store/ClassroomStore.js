import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/classroom" : "/api/classroom";
const storeType_options = [
    { value: "student", label: "Student" },
    { value: "educator", label: "Educator" },
    { value: "institute", label: "Institute" }
  ]

export const useClassroom = create((set) => ({
	selectedClassroom: null,
	setSelectedClassroom: (selectedClassroom) => set({ selectedClassroom }),
}));

export const useClassroomAndChannelStore = create((set) => ({
	user: null,

	addClassroom: async (classroomName, image) => {
		try {
			const response = await axios.post(`${API_URL}/newclassroom`, { classroomName, image });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in creating classroom", isLoading: false });
			throw error;
		}
	},
	addChannel: async (classroomName, channelName) => {
		try {
			const response = await axios.post(`${API_URL}/newchannel`, { classroomName, channelName });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in creating channel", isLoading: false });
			throw error;
		}
	},
}));