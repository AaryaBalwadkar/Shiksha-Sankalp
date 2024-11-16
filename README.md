

# Shiksha Sankalp 🎓  

**A Collaborative Platform Inspired by Discord and Slack**  

Shiksha Sankalp is a communication and collaboration platform designed for educational purposes. It is a next-generation platform designed to empower users with seamless communication, collaboration, and creativity. Whether you're managing a community or building your own online presence, Shiksha Sankalp helps you stay connected with your team, friends, and other users

---

## 🚀 Features  
- **Real-Time Communication**: Engage with peers and educators through instant messaging.  
- **Classrooms**: Educators can create classrooms.  
- **Channel-Based Organization**: Create and manage topic-based channels for focused discussions.  
- **User Authentication**: Secure login and role-based access for different users.  

---

## 🛠️ Technology Stack  

| **Category**       | **Technology**                      |  
|--------------------|-------------------------------------|  
| **Frontend**       | HTML, CSS, JavaScript, React.js     |  
| **Backend**        | Node.js, Express.js                 |  
| **Database**       | MongoDB (Atlas)                     |  
| **Other Tools**    | Vite, Socket.io, RESTful APIs, Axios|  

---

## 📂 Project Structure  

```
Shiksha_Sankalp/  
├── client/                # Frontend files  
│   ├── assets/            # Static assets (images, icons, etc.)  
│   ├── src/               # Main React source code  
│       ├── components/    # Reusable components  
│       ├── App.jsx        # Root component  
│       └── index.html     # HTML template  
├── server/                # Backend files  
│   ├── controller/        # Controller logic for routes  
│   ├── middleware/        # Authentication and validation middlewares  
│   ├── model/             # Database models  
│   ├── routes/            # API route handlers  
│   ├── utils/             # Utility functions  
│   ├── index.js           # Entry point for the server  
│   └── socket.js          # WebSocket integration using Socket.io  
├── README.md              # Project documentation  
```  

---

## ⚙️ Installation  

### Prerequisites  
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/)  

### Steps  

#### Frontend Setup  
1. Navigate to the **client** directory:  
   ```bash  
   cd client  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the development server:  
   ```bash  
   npm run dev  
   ```  

#### Backend Setup  
1. Navigate to the **server** directory:  
   ```bash  
   cd server  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Update the `.env` file with the following credentials:  
   ```env  
   PORT=5000  
   MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/database-name?retryWrites=true&w=majority  
   JWT_SECRET=your-jwt-secret  
   NODE_ENV=development  
   MAILTRAP_TOKEN=your-mailtrap-token  
   ```  
   Replace the placeholder values (`your-username`, `your-password`, etc.) with your actual credentials.  

4. Start the server:  
   ```bash  
   npm run dev  
   ```  

---

## 🎯 Highlights  
Shiksha Sankalp is designed to simplify communication and collaboration in educational settings. By blending the features of Discord and Slack, it ensures a streamlined and user-friendly experience for all users.  

---
