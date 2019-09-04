export default {
  strict:true,
  state : {
    type: 0,
    counters : [
      {value:0},
      {value:0},
      {value:0}
    ],
    countersTotal:0
  },
  getters : {
    counterSum: (state)=>{
      let sum = 0;
      state.counters.forEach(element => {
        sum = sum + element.value;
      });
      return sum;
    },
  },
  mutations: {
    minusValue(state,index) {
      state.counters[index].value--;
      state.countersTotal--;
    },
    plusValue(state,index) {
      state.counters[index].value++;
      state.countersTotal++;
    }
  }

}