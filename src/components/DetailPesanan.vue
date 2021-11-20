<template>
  <div id="DetailPesanan">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators justify-content-center">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active p-2">
                <img
                  src="../assets/nasi-ayam-geprek .png"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item p-2">
                <img
                  src="../assets/nasi-ayam-geprek .png"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item p-2">
                <img
                  src="../assets/nasi-ayam-geprek .png"
                  class="d-block w-100"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <i class="fas fa-arrow-circle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-7">
          <h1>Nasi Geprek Klenger</h1>
          <p>Harga : Rp. 20.000</p>
          <div class="form-group">
            <label for=""> Jumlah </label>
            <input
              class="form-control"
              width="80%"
              type="number"
              value="1"
              min="1"
              max="20"
            />
          </div>
          <div class="form-group">
            <label for="">Keterangan</label>
            <textarea
              class="form-control"
              rows="5"
              placeholder="Contoh : Pedas, Sedang, Biasa"
            ></textarea>
          </div>
          <router-link to="/Keranjang">
          <a href="#" class="btn btn-warning text-light"
            >Masukkan Ke Keranjang <i class="fas fa-arrow-right"></i>
          </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPesanan",
};
</script>

<style>
#DetailPesanan .carousel-indicators li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

#DetailPesanan .fa-arrow-circle-left,
#DetailPesanan .fa-arrow-circle-right {
  font-size: 40px;
}

#DetailPesanan .carousel-control-prev {
  margin-left: -3%;
  justify-content: start;
  color: #ec982e;
}

#DetailPesanan .carousel-control-next {
  margin-right: -3%;
  justify-content: end;
  color: #ec982e;
}

#DetailPesanan .btn-warning{
    border-radius: 50px;
}
</style>