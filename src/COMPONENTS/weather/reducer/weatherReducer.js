const rootState = {
    city: '',
    currentTemp:null,
    maxTemp: null,
    minTemp: null,
};

export const weatherReducer = (state = rootState, action) => {
    switch (action.type) {
        case 'GET__CURRENT_TEMP':
            return [...action.temp];
        default :
            return state;
    }
};
