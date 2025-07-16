<h1 align="center">Netflix Clone 🎬</h1>

About This Course:

-   ⚛️ Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind
-   🔐 Authentication with JWT
-   📱 Responsive UI
-   🎬 Fetch Movies and Tv Show
-   🔎 Search for Actors and Movies
-   🎥 Watch Trailers
-   🔥 Fetch Search History
-   🐱‍👤 Get Similar Movies/Tv Shows
-   💙 Awesome Landing Page
-   🌐 Deployment
-   🚀 And Many More Cool Features

### Setup .env file

```bash
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secre
TMDB_API_KEY=your_tmdb_api_key
```

### Run this app locally



## 🧪 Run Locally with Docker

Make sure Docker is installed and running on your system.

---

### 🐳 Step 1: Build the Docker Image

Run this command from your project root (where the Dockerfile is located):

```bash
docker build -t netflix-clone:latest .



```shell
🐳 Docker Setup

📦 Build Image Locally

Install Docker and run:

docker build -t netflix-clone:latest .

🚀 Run Locally

docker run -itd -p 5000:5000 -p 5173:5173 netflix-clone:latest

Then open:

Backend: http://localhost:5000

Frontend: http://localhost:5173
```

### Start the app

```shell
npm run start

```

