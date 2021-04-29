import create, { State } from 'zustand';
import { ResponseStructure } from '../dto/response.dto';
import { persist } from 'zustand/middleware';
interface INominations extends State {
    nominations: ResponseStructure[];
    addNomination: (item: ResponseStructure) => void;
    removeNomination: (item: ResponseStructure) => void;
}

export const useNominationStore = create<INominations>(
    persist(
        (set, get) => ({
            nominations: [],
            addNomination: (item) => {
                if (
                    !get().nominations.includes(item) &&
                    get().nominations.length < 5
                ) {
                    set((state) => ({
                        nominations: state.nominations.concat(item),
                    }));
                }
            },
            removeNomination: (item) =>
                set((state) => ({
                    nominations: state.nominations.filter(
                        (curr) => curr !== item,
                    ),
                })),
        }),
        { name: 'nominations-list' },
    ),
);
