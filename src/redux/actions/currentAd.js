import { currentAdApi } from 'utils/api'


const actions = {
    setCurrentAd: items => ({
        type: "CURRENT_AD:SET_AD_INFO",
        payload: items
    }),
    getCurrentAd: (currentId) => disapatch => {
        currentAdApi.getCurrentById(currentId).then( ( { data } ) => {
            disapatch( actions.setCurrentAd( data ) );
        })
    }
}

export default actions;
