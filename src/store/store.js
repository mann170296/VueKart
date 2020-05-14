import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cartCount: 0,
        watchCount: 0,
        cartData: [], // stores the IDs of cart Items
        watchData: [], // stores the IDs of watched Items
        watchItems: [], // Stores the details of watched Items
        products: [
          { 
              id: 1, 
              name: 'Call of Duty: Modern Warfare',
              price: 'Rs. 5,500',
              shortDesc: 'Call of Duty: MW returns. This game is a complete revamp of the old COD:MW',
              description: 'Call of Duty: MW returns. This game is a complete revamp of the old COD:MW',
              inStock: true,
              availableQuantity: '100',
              img: 'src/assets/img/codmw.jpg',
          },
          { 
              id: 2, 
              name: 'PlayerUnknowns Battlegrounds',
              price: 'Rs. 600',
              shortDesc: 'Call of Duty: MW returns. This game is a complete revamp of the old COD:MW',
              description: 'Call of Duty: MW returns. This game is a complete revamp of the old COD:MW',
              inStock: false,
              availableQuantity: '500',
              img: 'src/assets/img/pubg.jpg',
          },
          { 
              id: 3, 
              name: 'GTA VI',
              price: 'Rs. 10,000',
              shortDesc: 'Call of Duty: MW returns. This game is a complete revamp of the old COD:MW',
              description: 'Call of Duty: MW returns. This game is a complete revamp of the old COD:MW',
              inStock: true,
              availableQuantity: '5',
              img: 'src/assets/img/gta.jpg',
          }
      ]
    },

    getters: {
        getCartCount: state => {
            return state.cartCount;
        },

        getWatchCount: state => {
            return state.watchCount;
        },

        getWatchListOfUser: state => {
            state.watchData;
        },

        getWatchList: state => {
            // Fetches the current Items in watch list of user
            state.watchData.forEach(itemID => {
                state.products.forEach(product => {
                    if(itemID == product.id) {
                        // Push product data to array of items if ID matches
                        if(!state.watchItems.includes(product)){
                            state.watchItems.push(product);
                        }
                    }
                });
            });

            return state.watchItems;
        }
    },

    mutations: {
        addToCart: state => {
            state.cartCount += 1;
        },

        addItemToWatch: (state, { id }) => {
            // check for exsitance
            if(state.watchData.includes(id)) {
                return;
            }

            state.watchData.push(id);
            state.watchCount++;
        },

        removeItemFromWatch: (state, { id }) => {
            if(state.watchData.includes(id)) {
                // Remove from List
                var getIndex = state.watchData.indexOf(id);
                console.log("Removing item from watch list at position " + getIndex);
                state.watchData.splice(getIndex, 1);
                state.watchCount--;
            } else {
                return;
            }
        },

        addToWatch: (state, { id }) => {
            // Check if ID already in Array
            if(state.watchData.includes(id)) {
                return;
            }

            state.watchData.push(id);
            state.watchCount += 1;
        },

        removeFromWatch: (state, { id }) => {
            console.log("ID RECIEVED FROM COMPONENT " + id);
            console.log("IDS INSIDE WATCH DATA " + state.watchData);
            // Check if ID is in array, if true, then remove
            if(state.watchData.includes(id)) {
                let updatedWatchList = state.watchData.filter(item => {
                    item !== id
                })
                state.watchCount -= 1;
                state.watchData = updatedWatchList;
            } else {
                console.log("HERE INSIDE ELSE");
                return;
            }
        },
    },
});
