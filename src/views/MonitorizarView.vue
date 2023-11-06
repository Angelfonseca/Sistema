<script setup>
import BaseLayout from '../layout/BaseLayout.vue'
// import {Logged} from '../router/index.js'
// Logged()

</script>

<template>
  <BaseLayout>
    <main>
      <div class="flex h-screen">
      <!-- Div izquierdo -->
      <div class="w-1/2 bg-gray-200 p-4 text-center">
    <h2 class="text-2xl font-bold">Selecciona el lugar a monitorizar</h2>
    <div v-if="place">
      <p>Visualización de  {{ place }}</p>
    </div>
    <!-- Rectángulos en blanco para mostrar datos -->
    <div class="mt-4">
      <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
        
        <div class="data-display">{{ sens_tem }}</div>
      </div>
      <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
        
        <div class="data-display">{{ sens_hum }}</div>
      </div>
      <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg mb-4">
        
        <div class="data-display">{{ sens_soilh }}</div>
      </div>
      <div class="cursor-pointer bg-white text-black text-xl font-semibold flex items-center justify-center rounded-lg">
        
        <div class="data-display">{{ place }}</div>
      </div>
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

<script>
export default {
  data() {
    return {
      place: "", // Tu variable para el lugar seleccionado
      sens_soilh: "", // Datos para el módulo 1 desde la base de datos
      sens_hum: "", // Datos para el módulo 2 desde la base de datos
      sens_tem: "", // Datos para el módulo 3 desde la base de datos
    };
  },
  // Aquí puedes cargar los datos desde la base de datos, por ejemplo, en el hook created
  created() {
    // Simula la carga de datos desde la base de datos
    this.place = "Datos del módulo 1";
    this.sens_soilh = "Datos del módulo 2";
    this.sens_hum = "Datos del módulo 3";
    this.sens_tem = "Datos del módulo 4";
  },
};
</script>