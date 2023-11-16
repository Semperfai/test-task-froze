<script setup lang="ts">
import { ref } from "vue";
import { type IFooterItem } from "./types";
const icons = ref<IFooterItem[]>([
    {
        icon: "mdi-github",
        link: "https://github.com/Semperfai",
    },
    {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/sviatoslav-matiukha-065530249/",
    },
]);
</script>
<template>
    <v-footer class="d-flex flex-column">
        <div class="d-flex w-100 align-center px-4">
            <h5>
                <p>Author:</p>
                <a href="https://github.com/Semperfai" target="_blank">
                    Svyatoslav Matyuha</a
                >
            </h5>
            <v-spacer></v-spacer>
            <v-btn
                v-for="{ icon, link } in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                :href="link"
                variant="plain"
                size="medium"
            ></v-btn>
        </div>
    </v-footer>
</template>
