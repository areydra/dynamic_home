import homeStore from "../reducers/homeStore";

export const setShouldShowHomeComponent = (value: boolean) => {
    homeStore.getState().actions.setShouldShowHomeComponent(value);
};
