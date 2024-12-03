<template>
  <div
    v-if="visible"
    class="notification"
    :class="`notification-${type}`"
    @click="closeNotification"
  >
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Notification',
  props: {
    message: String,
    type: {
      type: String,
      default: 'success', // default to success
    },
    timeout: {
      type: Number,
      default: 5000, // 5 seconds
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    if (this.timeout) {
      setTimeout(() => {
        this.closeNotication()
      }, this.timeout);
    }
  },
  methods: {
    closeNotication(){
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.notification {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}

.notification-error {
  background-color: #dc3545;
}

button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}
</style>
