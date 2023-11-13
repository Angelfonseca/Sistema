import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useData() {
  const sistemas = ref([]);
  const place = ref('');

  return {
    sistemas,
    place
  };
}

export default {
  setup() {
    const { sistemas, place } = useData();

    onMounted(async () => {
      try {
        // Use the correct base URL for your API
        const response = await axios.get('http://192.168.100.230:3000/Api/sistemas');
        sistemas.value = response.data;
        place.value = response.data.map(item => item.place);
        console.log(sistemas.value);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    });
  }
};
