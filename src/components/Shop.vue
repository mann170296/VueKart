<template>
    <div>
        <partial-navbar></partial-navbar>
        <div class="container my-5">
            <div class="row">
                <div class="col-md-4" v-for="game in getProducts" :key="game.id">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" :src="game.img" alt="Call of Duty" style="height: 350px;">
                        <div class="card-body">
                            <h5 class="card-title">{{game.name}}</h5>
                            <p class="card-text">{{game.shortDesc}}</p>
                            <hr>
                            <h4>{{game.price}}</h4>
                            <hr>
                            <button class="btn btn-primary" v-b-tooltip.hover title="Add 1 to your cart"
                                @click="appendCart" v-if="game.inStock">
                                Add to Cart
                            </button>
                            <router-link 
                                class="btn btn-primary" 
                                :to="/view/ + game.id" 
                                v-b-tooltip.hover title="View Product details"
                                :theData="game">
                                View Product
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../partials/Navbar';

export default {
    components: {
        'partial-navbar': Navbar
    },
    name: 'Shop',
    data() {
        return {
            baseURL: 'localhost:8080',
        }
    },

    computed: {
        getProducts() {
            return this.$store.state.products;
        }
    },

    methods: {
        appendCart() {
            this.$store.commit('addToCart');
        }
    }
}
</script>