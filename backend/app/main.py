from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, student, analysis


app = FastAPI()

# Frontend ile iletişim için CORS yapılandırması
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Üretimde domain kısıtlaması yapın
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route'ları ekleme
app.include_router(auth.router, prefix="/auth")
app.include_router(student.router, prefix="/student")
app.include_router(analysis.router, prefix="/analysis")

@app.get("/dashboard")
def get_dashboard_data():
    # Örnek statik veri; gerçek uygulamada veritabanından çekilir.
    return {
        "lessonPlan": "Matematik, Fizik, Kimya",
        "lastQuestions": "Limit, Türev, İntegral",
        "performanceAnalysis": "Geçen haftaya göre %10 gelişim"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
