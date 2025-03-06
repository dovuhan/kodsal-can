from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.utils.auth_utils import create_access_token

router = APIRouter()

# Kullanıcı kayıt ve giriş modelleri
class User(BaseModel):
    username: str
    password: str

# Basit in-memory "veritabanı"
fake_users_db = {}

@router.post("/register")
def register(user: User):
    if user.username in fake_users_db:
        raise HTTPException(status_code=400, detail="User already exists")
    fake_users_db[user.username] = user.password
    return {"msg": "User registered successfully"}

@router.post("/login")
def login(user: User):
    if fake_users_db.get(user.username) != user.password:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    token = create_access_token(data={"sub": user.username})
    return {"access_token": token, "token_type": "bearer"}
