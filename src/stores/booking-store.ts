import { create } from "zustand";

import { track } from "@/lib/analytics";

interface BookingModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useBookingStore = create<BookingModalState>((set) => ({
  isOpen: false,
  openModal: () => {
    // Track booking modal opened event
    track("Booking Modal Opened", undefined);
    set({ isOpen: true });
  },
  closeModal: () => set({ isOpen: false }),
}));
