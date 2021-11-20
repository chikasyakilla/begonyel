<template>
    <div id="Keranjang">
    <Header />
    <div id="Breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item">
                  <router-link to= "/">
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
    <Tables/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tables from "@/components/Tables.vue";

export default {
    name: 'Keranjang',
    components: {
        Header,
        Tables,
    }

}
</script>

<style>

</style>