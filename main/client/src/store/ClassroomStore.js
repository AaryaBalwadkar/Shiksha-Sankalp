import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/classroom" : "/api/classroom";
const storeType_options = [
    { value: "student", label: "Student" },
    { value: "educator", label: "Educator" },
    { value: "institute", label: "Institute" }
  ]

export const useClassroomStore = create((set) => ({
    type: null,
    isOpen: Boolean,
    onOpen: (type) => set({ isOpen: true, type}),
    onClose: () => set({ type: null, isOpen: false}),  
}))

export const useClassroomAndChannelStore = create((set) => ({
	user: null,

	addClassroom: async (classroomName) => {
		try {
			const response = await axios.post(`${API_URL}/newclassroom`, { classroomName });
      console.log(response)

		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	// login: async (email, password) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/login`, { email, password });
	// 		set({
	// 			isAuthenticated: true,
	// 			user: response.data.user,
	// 			error: null,
	// 			isLoading: false,
	// 		});
	// 	} catch (error) {
	// 		set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
	// 		throw error;
	// 	}
	// },
}));