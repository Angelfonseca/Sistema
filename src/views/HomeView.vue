<script setup>
// import {Logged} from '../router/index.js'
import BaseLayout from '../layout/BaseLayout.vue'

</script>

<template>
  <BaseLayout>
    <main>
      <div class="flex h-screen">
      <!-- Div izquierdo -->
      <div class="w-1/2 bg-gray-200 p-4 text-center">
        <h2 class="text-2xl font-bold">Selecciona el lugar a monitorizar</h2>
        <div v-if="place">
          <p>Iconos para {{ place }}</p>
        </div>
        <!-- Tres rectángulos que redirigen a /monitorizar -->
        <div class="mt-4">
          <router-link to="/monitoreo">
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
              Modulo 1
            </div>
          </router-link>
          <router-link to="/monitoreo">
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
              Modulo 2
            </div>
          </router-link>
          <router-link to="/monitoreo">
            <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg">
              Modulo 3
            </div>
          </router-link>
        </div>
      </div>
      <!-- Div derecho con imagen semi transparente de fondo -->
      <div class="w-1/2 bg-opacity-20 bg-cover" style="position: relative;">
        <img src="@/../../../public/back.png" alt="Imagen de fondo"
          style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;" />
      </div>
    </div>
    </main>
  </BaseLayout>
</template>




