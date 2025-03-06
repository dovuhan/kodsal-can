from fastapi import APIRouter

router = APIRouter()

# Örnek performans analiz verisi
@router.get("/")
def get_analysis():
    return {
        "analysis": "Öğrencinin zayıf olduğu konular: Türev, Limit"
    }
