import { useBookingStore } from "@/stores/booking-store";

export const useBookingModal = () => {
  const { isOpen, openModal, closeModal } = useBookingStore();

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
