import create, { State } from 'zustand';

interface INominations extends State {
    nominations: string[];
    addNomination: (item: string) => void;
    removeNomination: (item: string) => void;
}

export const useNominationStore = create<INominations>((set) => ({
    nominations: [],
    addNomination: (item) =>
        set((state) => ({ nominations: state.nominations.concat(item) })),
    removeNomination: (item) =>
        set((state) => ({
            nominations: state.nominations.filter((curr) => curr !== item),
        })),
}));
