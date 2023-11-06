<template>
    <main>
    <footer class="footer">
      <div class="texto-izquierda">
            © Equipo 2 <br>
            Email: L201050207@pabellon.tecnm.mx <br>
            Tel: 4495026831
          </div>
      <div class="imagen-derecha">
        <img src="../../footer.png" alt="FooterImg">
      </div>
    </footer>
  </main>
</template>
<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  position: absolute;
  bottom: 0;
}

.texto-izquierda {
  flex: 1;
  padding: 10px;
}

.imagen-derecha {
  width: 180px;
  margin: 3px 0px;
}
body {
  overflow-x: hidden;
}
</style>




