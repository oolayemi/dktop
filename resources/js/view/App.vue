<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light  bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">DKtop</a>
            </div>
        </nav>

        <div class="flex flex-grow overflow-hidden">
            <div class="m-3 h-full" style="background-color: #1d643b">
                <div class="flex items-center group">
                    <router-link :to="{name: 'home'}">
                        Home
                    </router-link>
                </div>

                <div class="flex items-center group">
                    <router-link :to="{name: 'hello'}">
                        Hello
                    </router-link>
                </div>

                <div class="flex items-center group">
                    <router-link :to="{name: 'contact'}">
                        Contact
                    </router-link>
                </div>

            </div>

            <div class="m-3">
                <router-view/>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
