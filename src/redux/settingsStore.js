import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
    settings: []
}

const actions = {
    setSettings(settings) {
        return {
            type: 'SET_SETTINGS',
            settings
        }
    }
}

const store = createReduxStore('my-shop', {
    reducer(state = DEFAULT_STATE, action) {
        switch (action.type) {

            case 'SET_SETTINGS':
                return {
                    ...state,
                    settings: action.settings
                };

            default:
                return state;
        }
    },

    actions,

    selectors: {
        getSettings(state) {
            const { settings } = state;
            console.log('--get', settings);
            return settings;
        }
    },

    controls: {
        FETCH_FROM_API(action) {
            return apiFetch({ path: action.path });
        },
    },

    resolvers: {
        *getPrice(item) {
            const path = '/wp/v2/prices/' + item;
            const price = yield actions.fetchFromAPI(path);
            return actions.setPrice(item, price);
        },
    },
});

register(store);
