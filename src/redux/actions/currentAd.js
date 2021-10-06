import { currentAdApi } from 'utils/api'


const actions = {
    setCurrentAd: item => ({
        type: "CURRENT_AD:SET_AD_INFO",
        payload: item
    }),
    getCurrentAd: currentId => disapatch => {
        currentAdApi.getCurrentById(currentId).then( ( { data } ) => {
            disapatch( actions.setCurrentAd( data[0] ) );
        })
    }
}

export default actions;
