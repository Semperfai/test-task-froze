<script setup lang="ts">
import { PackageTable } from "../entities/package/ui";
import { BaseFooter } from "../shared/ui";
import { TableEmptyState } from "../shared/ui";
import { Spinner } from "../shared/ui";
import { BaseLayout } from "../shared/ui";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { packageModel } from "../entities/package";
import { MAX_PAGE_SIZE, MAX_FROM_TOTAL, INCREMENTAL_PAGE_SIZE } from "../shared/constants";
import {
  mapPackageListBaseInfo,
  mapPackageListDetailsInfo,
} from "../shared/lib/helpers";
const store = useStore();
const pageSize = ref<number>(25);
const currentPage = ref<number>(1);

const hasItems = computed(() => {
  return totalResults.value > 0;
});

const hasMore = computed(() => {
  return pageSize.value < totalResults.value;
});
const searchQuery = ref<string>("");
const searchResults = ref([]);

async function fetchResults() {
  if (searchQuery.value.length > 0) {
    const from = totalResults.value < MAX_FROM_TOTAL ? totalResults.value : MAX_FROM_TOTAL;
    await getPackagesList(searchQuery.value, pageSize.value, from);
  } else {
    searchResults.value = [];
  }
}

async function searchPackages() {
  currentPage.value = 1;
  await fetchResults();
}

const getPackagesList = (searchQuery: string, size: number, from: number) =>
  store.dispatch(packageModel.actions.getPackagesListAsync, {
    q: searchQuery,
    size,
    from,
  });

const isListLoading = computed(
  () => store.state[packageModel.NAMESPACE].isListLoading,
);

const packagesListBaseInfo = computed(() => {
  return mapPackageListBaseInfo(store.state[packageModel.NAMESPACE].data);
});

const packagesListBaseDetails = computed(() => {
  return mapPackageListDetailsInfo(store.state[packageModel.NAMESPACE].data);
});

const totalResults = computed(() => {
  return store.state[packageModel.NAMESPACE].total;
});

function loadMore() {
  if (pageSize.value >= MAX_PAGE_SIZE) {
    pageSize.value = MAX_PAGE_SIZE;
  }
  pageSize.value += INCREMENTAL_PAGE_SIZE;
  fetchResults();
}
</script>

<template>
  <div class="app">
    <v-app>
      <v-container class="wrapper">
        <base-layout>
          <template #title> Discover Your Favorite Package </template>
          <template #header>
            <v-text-field
              v-model="searchQuery"
              class="search-field"
              :loading="isListLoading"
              density="compact"
              variant="solo"
              label="Search"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="searchPackages"
            ></v-text-field>
            <v-btn @click="loadMore" :disabled="!hasMore"> Load More </v-btn>
          </template>
          <template #main>
            <v-row class="justify-center">
              <package-table
                v-if="hasItems"
                :items-details="packagesListBaseDetails"
                :items="packagesListBaseInfo"
              />
              <spinner v-else-if="isListLoading" />
              <table-empty-state v-else />
            </v-row>
          </template>
          <template #footer> <base-footer /> </template>
        </base-layout>
      </v-container>
    </v-app>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-field {
  max-width: 40rem;
}

</style>
