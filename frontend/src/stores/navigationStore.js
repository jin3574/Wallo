import { ref } from "vue"
import { defineStore } from "pinia"

// 991.98px 이하에서 오버레이로 열리는 사이드 메뉴의 열림 상태를 관리함
export const useNavigationStore = defineStore("navigation", () => {
  const isMobileMenuOpen = ref(false)

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  return {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
  }
})
