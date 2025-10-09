import { create } from 'zustand';

interface ShareState {
  step: number;
}

interface ShareActions {
  nextStep: () => void;
  previousStep: () => void;
  toStep: (step: number) => void;
  reset: () => void;
}

type ShareStore = ShareState & ShareActions;

export const useShareStore = create<ShareStore>(set => ({
  step: 0,
  nextStep: () => set(state => ({ step: state.step + 1 })),
  previousStep: () => set(state => ({ step: state.step - 1 })),
  toStep: step => set({ step }),
  reset: () => set({ step: 0 }),
}));
