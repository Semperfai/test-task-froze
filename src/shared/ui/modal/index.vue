<template>
    <v-dialog v-model="dialogComputed" max-width="800">
        <v-card>
            <v-card-title>Package Details</v-card-title>
            <v-card-text>
                <div><strong>Name:</strong> {{ selectedItem.name }}</div>
                <div><strong>Version:</strong> {{ selectedItem.version }}</div>
                <div>
                    <strong>Description:</strong> {{ selectedItem.description }}
                </div>
                <div>
                    <strong>Npm Link:</strong>
                    <a :href="selectedItem.npmLink" target="_blank">{{
                        selectedItem.npmLink
                    }}</a>
                </div>
                <div>
                    <strong>Keywords:</strong>
                    {{ selectedItem.keywords.join(", ") }}
                </div>
                <div><strong>Date:</strong> {{ selectedItem.date }}</div>
                <div>
                    <strong>Author:</strong> {{ selectedItem.author.name }} ({{
                        selectedItem.author.email
                    }})
                </div>
                <div>
                    <strong>Maintainers:</strong>
                    <ul>
                        <li
                            v-for="maintainer in selectedItem.maintainers"
                            :key="maintainer.username"
                        >
                            {{ maintainer.name }} ({{ maintainer.email }})
                        </li>
                    </ul>
                </div>
                <div><strong>Score:</strong> {{ selectedItem.score }}</div>
                <div>
                    <strong>Search Score:</strong>
                    {{ selectedItem.searchScore }}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="closeModal">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { toRefs, computed } from "vue";
const props = defineProps({
    selectedItem: Object,
    dialog: Boolean,
});
const { dialog } = toRefs(props);
const emit = defineEmits(["update:dialog"]);
const dialogComputed = computed({
    get: () => dialog.value,
});

const closeModal = () => {
    emit("update:dialog", false);
};
</script>
