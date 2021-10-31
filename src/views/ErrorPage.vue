<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-sm-12 text-center">
        <div>
          <h2 class="mb-0">Oops! This Page is Not Found.</h2>
          <p>The requested page dose not exist.</p>
          <button @click="$router.go(-1)" class="btn btn-primary mt-3">
            <i class="ri-home-4-line"></i>Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorPage",
};
</script>
