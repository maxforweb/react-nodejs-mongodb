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
    getAds: (sort) => dispatch => {
        dispatch(actions.setIsLoading(true))
        adsApi
            .getAll(sort)
            .then( ( { data } ) => {
                dispatch( actions.setAds( data ) );
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            })
    },

    createAd: (ad) => dispatch => {
        dispatch(actions.setIsLoading(true))
        
        adsApi
            .create(ad)
            .then( ({ data })  => {
                console.log(data);
            })
            .catch((err) => {
                dispatch(actions.setIsLoading(false))
                console.log(err);
            })
    },

    // getCurrent: (id) => dispatch => {
    //     dispatch(setIsLoading(true));

    //     return (
    //         adsApi
    //             .getCurrent(id)
    //             .then( data => {
    //                 console.log(data);
    //             })
    //             .catch( err => {
    //                 console.log(err);
    //             })
    //     )
    // },

    getByUser: (id) => dispatch => {
        dispatch( actions.setIsLoading(true) );

        adsApi
            .getByUser(id)
            .then( ( { data } ) => {
                dispatch( actions.setAds(data) );
            })
            .catch(err => {
                dispatch( actions.setIsLoading(false) );
                console.log(err);
            })
    },

    removePosts: () => dispatch => {
        dispatch( actions.setAds([]) );
    }
}

export default actions;
