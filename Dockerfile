FROM python:3.11-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1 \
    PORT=8080

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt || true

EXPOSE 8080

CMD ["python3", "server.py"]
