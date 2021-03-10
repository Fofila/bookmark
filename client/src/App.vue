<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header></Header>
    <Menu></Menu>
    <div class="mdl-layout__content">
      <div class="mdl-grid">
        <Card size="huge" title="Dough for pizza"
          description="500g farina 00, 500g acqua, 5g lievito secco, far la pastella
          e lasciar riposare per 12-18 ore a seconda della temperatura, il preimpasto
          fa bolle grandi, cresce e poi cala, quandi ti accorgi che è calato è pronto.
          Aggiungere 500g di farina 00, 75g di acqua e un cucchiaio di miele, impastare
          fino a che non si stacca dia bordi della ciotola, aggiungere 25g di sale e altri
          75g di acqua ma pochissima per volta.
          Far riposare l'impasto per 30 minuti, prenderlo e ripiegarlo su se stesso
          come piegare un foglio a metà, ripetere le pieghe per 4 o 5 volte, far riposare
          per 30 minuti e poi altre pieghe, questa cosa per 3 o 4 volte, ti accorgi
          che a ogni sessione di pieghe l'impasto è sempre più legato, da qui in
          avanti coprire e far lievitare come al solito"></Card>
        <Card size="medium" title="Medium"
          description="The best ideas can change who we are. Medium is where those ideas take
          shape, take off, and spark powerful conversations. We’re an open platform where 170
          million readers come to find insightful and dynamic thinking. Here, expert and
          undiscovered voices alike dive into the heart of any topic and bring new ideas to the
          surface. Our purpose is to spread these ideas and deepen understanding of the world."
          url="https://medium.com/"></Card>
        <Card size="big" title="" description=""></Card>
        <Card size="small" title="" description=""></Card>
        <Card size="medium" title="" description=""></Card>
        <Card size="small" title="" description=""></Card>
        <Card size="mini" title="Google" url="https://www.google.com"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Menu from './components/vert_menu.vue';
import Card from './components/card.vue';

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Card,
  },
};
</script>

<style lang="scss">
</style>
