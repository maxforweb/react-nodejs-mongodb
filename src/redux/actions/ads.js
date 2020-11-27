import { adsApi } from 'utils/api';

const actions = {
    setAds: items => ({
        type: "ADS:SET_ITEMS",
        payload: items
    }),
    setCurrentAd: id => ({
        type: "ADS:SET_CURRENT_AD",
        payload: id
    }),
    setIsLoading: bool => ({
        type: "ADS:SET_IS_LOADING",
        payload: bool
    }),
    getAds: () => disapatch => {
        disapatch(actions.setIsLoading(true))
        adsApi
            .getAll()
            .then( ( { data } ) => {
                disapatch( actions.setAds( data ) );
            })
            .catch(() => {
                disapatch(actions.setIsLoading(false));
            })
    }
}

export default actions;
