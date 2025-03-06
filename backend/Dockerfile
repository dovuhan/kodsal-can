# Temel Python 3.9 slim imajı
FROM python:3.9-slim

# Çalışma dizinini ayarla
WORKDIR /app

# Bağımlılık dosyasını kopyala ve yükle
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Uygulama kodunu kopyala
COPY . .

# Port 8000'i aç
EXPOSE 8000

# Uygulamayı başlat
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
