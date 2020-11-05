import { adsApi } from 'utils/api';

const actions = {
    setAds: items => ({
        type: "ADS:SET_ITEMS",
        payload: items
    }),
    getAds: () => disapatch => {
        adsApi.getAll().then( ( { data } ) => {
            disapatch( actions.setAds( data ) );
        })
    }
}

export default actions;
