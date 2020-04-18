<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h1>geolocator (pana) here</h1>
      <!-- <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group> -->
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Publication",
  data() {
    return {
      type: "",
    };
  },
};
</script>
