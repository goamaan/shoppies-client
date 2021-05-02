import create, { State } from 'zustand';

interface ISearch extends State {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    searchType: string;
    setSearchType: (type: string) => void;
    searchYear: string;
    setSearchYear: (year: string) => void;
    anyYear: boolean;
    setAnyYear: (val: boolean) => void;
}

export const useSearchStore = create<ISearch>((set) => ({
    searchTerm: '',
    setSearchTerm: (term) => set((_) => ({ searchTerm: term })),
    searchType: 'movie',
    setSearchType: (type) => set((_) => ({ searchType: type })),
    searchYear: '2020',
    setSearchYear: (year) => set((_) => ({ searchYear: year })),
    anyYear: true,
    setAnyYear: (val) => set((_) => ({ anyYear: val })),
}));
