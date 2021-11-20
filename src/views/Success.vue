<template>
  <div id="Success">
    <div class="container">
      <Header />
      <div class="row justify-content-center">
        <div class="col-lg-4 text-center">
          <img src="../assets/burger.png" class="card-img-top Success" />
          <h3>Yeayy Berhasil</h3>
          <p class="text-ucapan">Kamu akan menerima pesananmu. Dalam beberapa saat lagi</p>
           <router-link to="List-product">
           <a href="#" class="btn btn-primary"> Pesan Kembali</a>
           </router-link>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Success",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>

