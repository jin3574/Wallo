from fastapi import APIRouter

# 이미지 태그(wallo-ai:<버전>)와 맞춰 올린다. 롤링 업데이트·롤백 시 어느 버전이 응답하는지 확인용
APP_VERSION = "0.2"

router = APIRouter(prefix="/api", tags=["health"])


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "version": APP_VERSION}
