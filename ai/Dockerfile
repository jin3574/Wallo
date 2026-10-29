FROM python:3.14-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

COPY requirements-runtime.txt .
RUN pip install -r requirements-runtime.txt

COPY app ./app
# 상품 추천 도구가 실행 중에 읽는 금융상품 CSV
COPY data/raw/finlife_deposit_products.csv data/raw/finlife_saving_products.csv ./data/raw/

RUN useradd --create-home --uid 10001 wallo
USER wallo

EXPOSE 8000

CMD ["uvicorn", "app.application:app", "--host", "0.0.0.0", "--port", "8000"]
