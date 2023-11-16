<script setup lang="ts">
import { ref } from "vue";
import { Modal } from "../../../../shared/ui/modal";
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    itemsDetails: {
        type: Array,
        required: true,
    },
});

const modalVisible = ref(false);
const selectedItem = ref(null);

const openModal = (currentItem: any) => {
    selectedItem.value = props.itemsDetails.find(
        (item) => currentItem.name === item.name,
    );
    modalVisible.value = true;
};
</script>

<template>
    <v-data-table
        :items="items"
        :items-per-page="10"
        item-key="name"
        item-value="name"
    >
        <template v-slot:item="{ item }">
            <tr class="trow" @click="openModal(item)">
                <td>{{ item.name }}</td>
                <td>{{ item.version }}</td>
                <td>{{ item.description }}</td>
            </tr>
        </template>
    </v-data-table>
    <modal
        :selectedItem="selectedItem"
        :dialog="modalVisible"
        @update:dialog="modalVisible = $event"
    />
</template>

<style lang="scss" scoped>
.empty-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.trow:hover {
    background-color: rgb(230, 229, 229);
    transition: all 0.3s;
    cursor: pointer;
}
</style>
