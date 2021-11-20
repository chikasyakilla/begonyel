<template>
  <div id="ProductDetail">
    <Header />
    <div id="Breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item">
                  <router-link to="/">
                    <a href="#"><i class="fas fa-home"></i> Home</a>
                  </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <b style="color: #000000">ListProduct</b>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <DetailPesanan />
      <div class="judul-menu my-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h5><b>Menu</b> Kami</h5>
          </div>
          <div class="col-lg-6 text-right">
            <h5><i class="fas fa-eye" style="color:#EC982E;"></i> Lihat Semua</h5>
          </div>
        </div>
      </div>
    </div>
    <Product/>
    
    <Footer/>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import DetailPesanan from "@/components/DetailPesanan.vue";
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ProductDetail",
  components: {
    Header,
    DetailPesanan,
    Product,
    Footer,
  },
};
</script>

<style>
</style>