import { create } from 'zustand'

interface IHomeStore {
    homeState: {
        shouldShowHomeComponent: boolean;
    },
    actions: {
        setShouldShowHomeComponent: (value: boolean) => void;
    },
};

const initialState = {
    shouldShowHomeComponent: false,
};

const homeStore = create<IHomeStore>((set) => ({
    homeState: initialState,
    actions: {
        setShouldShowHomeComponent: (value: boolean) => {
            set({
                homeState: {
                    shouldShowHomeComponent: value,
                }
            });
        },
    },
}))

export default homeStore;