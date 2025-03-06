# Öğrenci Paneli Projesi

Bu proje, yapay zeka destekli bir eğitim platformu olarak öğrencilere özel panel sunmaktadır. Frontend kısmı React, Tailwind CSS ve Vite kullanılarak geliştirilmiş, backend kısmı ise FastAPI ile oluşturulmuştur.

## Özellikler

- Kullanıcı kayıt ve giriş işlemleri (JWT ile kimlik doğrulama)
- Dashboard, Profil, Sınavlar gibi sayfalar
- Performans analizi ve ders programı önerileri
- GPT-4 entegrasyonu ile soru çözme desteği

## Kurulum

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev`

### Backend

1. `cd backend`
2. `pip install -r requirements.txt`
3. `uvicorn app.main:app --reload`

## Docker ile Çalıştırma

1. `docker build -t ogrenci-paneli-backend .`
2. `docker run -d -p 8000:8000 ogrenci-paneli-backend`
