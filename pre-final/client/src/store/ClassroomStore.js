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
	addChannel: async (classroomId, channelName, lock) => {
		try {
			const response = await axios.post(`${API_URL}/newchannel`, { classroomId, channelName, lock });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in creating channel", isLoading: false });
			throw error;
		}
	},
	joinClassroom: async (code) => {
		try {
			const response = await axios.post(`${API_URL}/joinclassroom`, { code });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in joining classroom", isLoading: false });
			throw error;
		}
	},
	deleteClassroom: async (classroomId) => {
		try {
			const response = await axios.post(`${API_URL}/deleteclassroom`, { classroomId });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in joining classroom", isLoading: false });
			throw error;
		}
	},
	removeClassroom: async (classroomId) => {
		try {
			const response = await axios.post(`${API_URL}/removeclassroom`, { classroomId });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in joining classroom", isLoading: false });
			throw error;
		}
	},
	deleteChannel: async (classroomId) => {
		try {
			const response = await axios.post(`${API_URL}/deletechannel`, { classroomId });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in joining classroom", isLoading: false });
			throw error;
		}
	},
	classroomCode: async (classroomId) => {
		try {
			const response = await axios.get(`${API_URL}/classroomcode`, { classroomId });
      		console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error in joining classroom", isLoading: false });
			throw error;
		}
	},
}));