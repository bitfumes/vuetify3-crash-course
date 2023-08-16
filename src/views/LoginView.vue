<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  email: "",
  password: "",
  remember: false,
});

const isLoading = ref(false);

function submit() {
  if (form.value.email === "") {
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    alert(JSON.stringify(form.value));
  }, 3000);
}

const rules = {
  required: (value: any) => !!value || "Required.",
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
};
</script>

<template>
  <v-container fluid>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="white"
      ></v-progress-circular>
    </v-overlay>
    <v-row justify="center">
      <v-col md="4">
        <v-card class="pa-4">
          <v-card-title class="text-center">Login Here</v-card-title>
          <v-card-item>
            <v-form @submit.prevent="submit">
              <v-text-field
                prepend-inner-icon="mdi-email"
                :rules="[rules.required, rules.email]"
                v-model="form.email"
                label="Email"
              ></v-text-field>

              <v-text-field
                type="password"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-key"
                v-model="form.password"
                label="Password"
              ></v-text-field>

              <v-checkbox
                v-model="form.remember"
                label="Remeber Me"
                color="red"
                hide-details
              ></v-checkbox>

              <v-btn
                color="red-darken-1"
                variant="elevated"
                type="submit"
                block
                class="mt-2"
              >
                Submit
              </v-btn>
            </v-form>
          </v-card-item>

          <v-card-action>
            <div class="mx-4">
              <v-btn block to="/register"> Register </v-btn>
            </div>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
