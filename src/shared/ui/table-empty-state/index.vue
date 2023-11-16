<script setup lang="ts"></script>
<template>
  <div class="container">
    <img src="../../../assets/imgs/no_activities.svg" alt="img" class="h-48" />
    <p>You dont have any packages</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  text-align: center;

  img {
    max-width: 70%;
  }
}
</style>
