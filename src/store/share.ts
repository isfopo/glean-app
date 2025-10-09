import { create } from 'zustand';

interface ShareState {
  step: number;
  capturedImage: string | null;
  isCapturing: boolean;
}

interface ShareActions {
  nextStep: () => void;
  previousStep: () => void;
  toStep: (step: number) => void;
  setImage: (image: string) => void;
  setCapturing: (capturing: boolean) => void;
  reset: () => void;
}

type ShareStore = ShareState & ShareActions;

export const useShareStore = create<ShareStore>(set => ({
  step: 0,
  capturedImage: null,
  isCapturing: false,
  nextStep: () => set(state => ({ step: state.step + 1 })),
  previousStep: () => set(state => ({ step: state.step - 1 })),
  toStep: step => set({ step }),
  setImage: image => set({ capturedImage: image }),
  setCapturing: capturing => set({ isCapturing: capturing }),
  reset: () => set({ step: 0, capturedImage: null, isCapturing: false }),
}));
