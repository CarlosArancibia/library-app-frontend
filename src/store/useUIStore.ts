import { create } from 'zustand'

interface UiState {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const useUIStore = create<UiState>((set) => ({
  isOpen: false,
  actionButton: null,
  openModal: () => {
    set({ isOpen: true })
  },
  closeModal: () => {
    set({ isOpen: false })
  },
}))

export default useUIStore
