<template>
  <div id="Banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="Banner-Text">
            <h6>FoodMarket</h6>
            <h1 class="my-3">
              Waktunya Pilih Menu <span> Favorite </span> Kamu
            </h1>
            <h6>mulai dari Rp. 20.000</h6>
            <div class="row mt-4">
              <router-link to="/List-product"><div class="btn btn-light">Lihat Menu</div></router-link>
              <router-link to="/Product-detail">
              <div class="btn btn-success">
                Pesan <i class="fas fa-arrow-right"></i>
              </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img
            src="../assets/banner.png"
            alt="Img-banner"
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "Banner",
};
</script>

    <style>
</style>