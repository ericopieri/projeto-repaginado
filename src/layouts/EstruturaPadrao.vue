<template>
  <div id="estrutura-padrao">
    <header class="header">
      <div class="header-est centralizado">
        <img
          src="../assets/logos/logo_header.png"
          alt="Logo DeepShoes"
          id="logo-header"
        />
        <nav id="nav-header">
          <ul>
            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
              /></a>
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-cart-shopping"
              /></a>
            </li>
            <li><a href="#">Entrar</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
