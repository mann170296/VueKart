<template>
    <div>
        <partial-navbar></partial-navbar>
        <b-jumbotron header="VueCart" lead="Vue Cart version 1.0.0">
            <p>Basic Cart functionality implementation using Vue</p>
            <router-link to="/">
                <button class="btn btn-secondary">
                    <ion-icon name="logo-github" class="github">
                    </ion-icon>
                </button>
            </router-link>

            <router-link to="/shop">
                <button class="btn btn-success">
                    Visit the Shop
                </button>
            </router-link>
        </b-jumbotron>
    </div>
</template>

<script>
import Navbar from '../partials/Navbar';

export default {
    components: {
        'partial-navbar': Navbar
    }
}
</script>

<style>
</style>