from fastapi import APIRouter
from app.models.student import Student

router = APIRouter()

# Örnek öğrenci verisi getiren endpoint
@router.get("/{student_id}", response_model=Student)
def get_student(student_id: int):
    return Student(id=student_id, name="Ahmet Yılmaz", email="ahmet@example.com", grade="11. Sınıf")
