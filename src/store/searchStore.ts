import create, { State } from 'zustand';

interface ISearch extends State {
    searchTerm: string;
    setSearchTerm: (to: string) => void;
}

export const useSearchStore = create<ISearch>((set) => ({
    searchTerm: '',
    setSearchTerm: (to) => set((_) => ({ searchTerm: to })),
}));
