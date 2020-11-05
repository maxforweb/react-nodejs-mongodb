import { adsApi } from 'utils/api';

const Actions = {
    setAds: items => ({
        type: "ADS:SET_ITEMS",
        payload: items
    }),
    getAds: () => disapatch => {
        adsApi.getAll().then( ( { data } ) => {
            disapatch( Actions.setAds( data ) );
        })
    }
}

export default Actions;
