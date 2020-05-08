<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">
            VueCart
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/shop" class="nav-link">
                        Shop
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto" style="margin-right: 100px;">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <ion-icon name="person-outline"></ion-icon>
                    </a>
                </li>
                <li class="nav-item">
                    <router-link to="/watch" class="nav-link" style="position: relative;">
                        <ion-icon name="eye-outline"></ion-icon>
                        <b-badge variant="success" style="position: absolute; top: 0; right: 2px;">
                            {{ getWatchCount }}
                        </b-badge>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" style="position: relative;">
                        <ion-icon name="cart-outline"></ion-icon>
                        <b-badge variant="primary" style="position: absolute; top: 0; right: 2px;">
                            {{ getCartCount }}
                        </b-badge>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            cartCount: this.$store.state.cartCount,
        }
    },

    computed: {
        getCartCount() {
            return this.$store.getters.getCartCount;
        },

        getWatchCount() {
            return this.$store.getters.getWatchCount;
        }
    }
}
</script>