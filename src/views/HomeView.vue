<template>
  <div class="home-container">
    <section class="carrosel-teste"></section>
    <h2
      style="
        text-align: center;
        margin-top: 25px;
        color: var(--header-text);
        font-size: 1.8em;
      "
    >
      Compre na DeepShoes
      <font-awesome-icon icon="fa-solid fa-cart-arrow-down" />
    </h2>
    <p
      style="
        text-align: center;
        font-size: 1.35em;
        margin: 10px 0;
        color: var(--cor2);
      "
    >
      Produtos mais vendidos na Loja
    </p>
    <section class="mais-vendidos centralizado">
      <div
        class="box-produto"
        v-for="(produto, index) in produtos"
        :key="index"
      >
        <img :src="produto.img" alt="Imagem Produto" />
        <p class="titulo-produto">{{ produto.titulo }}</p>
        <p class="preco-produto">
          R$ {{ produto.preco.toFixed(2).replace(".", ",") }}
        </p>
        <button class="button-vermais">Ver +</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          titulo: "Tênis Olympikus",
          img: require("../assets/tenis/tenis1.jpg"),
          preco: 255,
        },
        {
          titulo: "Tênis Nike",
          img: require("../assets/tenis/tenis6.jpg"),
          preco: 580,
        },
        {
          titulo: "Tênis Adidas",
          img: require("../assets/tenis/tenis2.jpg"),
          preco: 350,
        },
        {
          titulo: "Tênis Qix",
          img: require("../assets/tenis/tenis3.jpg"),
          preco: 390,
        },
        {
          titulo: "Tênis Adidas",
          img: require("../assets/tenis/tenis4.jpg"),
          preco: 240,
        },
        {
          titulo: "Tênis Vans",
          img: require("../assets/tenis/tenis5.jpg"),
          preco: 320,
        },
        {
          titulo: "Tênis Nike",
          img: require("../assets/tenis/tenis7.jpg"),
          preco: 510,
        },
      ],
    };
  },
};
</script>

<style></style>
