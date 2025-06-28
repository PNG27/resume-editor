# Resume Editor Web App

An AI-powered Resume Editor built with **React** (frontend) and **FastAPI** (backend) as part of an internship assignment.

---

## 🔧 Features

- ✅ Upload resume files (.pdf or .docx) — simulated with dummy content
- ✅ Editable resume fields: Name, Summary, Experience, Education, Skills
- ✅ “Enhance with AI” button (mocked backend response)
- ✅ Save resume to backend
- ✅ Download final resume as `.json`

---

## 🧱 Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Python FastAPI
- **Styling:** Basic CSS

---

## 🛠️ How to Run Locally

### ▶️ Backend (FastAPI)

cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

## Open NEW terminal 
▶️ Frontend (React)
cd frontend
npm install
npm run dev
Frontend: http://localhost:3000

Backend: http://localhost:8000

🔗 API Endpoints
POST /ai-enhance — returns enhanced content (mocked)

POST /save-resume — saves resume JSON

## Developer :
Prathmesh Ghormade
GitHub: PNG27
📧 prathmeshghormade27@gmail.com
