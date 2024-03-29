import Vue from 'vue';

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult)
    let tradeData  = {
        purchase: state.purchase,
        sale: state.sale
    }  
    Vue.http.put("https://urun-islemleri-prod-da40e.firebaseio.com/trade-result.json", tradeData)   
    .then(response => {

    }) 


}

//db de olan verilenleri getirmek ucun
export const getTradeResult = ({commit}) => {
    Vue.http.get("https://urun-islemleri-prod-da40e.firebaseio.com/trade-result.json")
    .then(response => {
        commit("updateTradeResult", response.body)
        // console.log(response);
    })

}