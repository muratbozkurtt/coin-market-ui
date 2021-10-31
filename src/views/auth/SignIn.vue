<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.password"
          placeholder="Enter password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <p class="failMessage">{{ failMessage }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      show: true,
      failMessage : ''
    };
  },
  methods: {
    ...mapActions({ signIn: "auth/signIn" }),

    onSubmit() {
      this.signInForm();
    },

   async signInForm() {
      const token = await this.signIn(this.user);
      // eslint-disable-next-line no-debugger
      debugger
      token ? this.$router.push({ path: "/" }) : (this.failMessage = token.message);
    },
  },
};
</script>

<style lang="scss">
.failMessage {
  color: red;
}
</style>
