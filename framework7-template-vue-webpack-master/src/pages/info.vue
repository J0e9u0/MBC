<template>
  <f7-page id="infoPage">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:chevron_left" icon-if-md="material:chevron_left" back color="white"></f7-link>
      </f7-nav-left>
      <f7-nav-title id="infoTitle">{{cid}}</f7-nav-title>
    </f7-navbar>

    <f7-block>
      <!-- Basic Info -->
      <detailCard
        title="Basic Info"
        cardType="vertical"
        :dataArray=infoCard.basicInfo
      ></detailCard>
      <!-- Have Budgeted -->
      <detailCard
        title="Have Budgeted"
        cardType="horizontal"
        :dataArray=infoCard.budgeted
      ></detailCard>
      <!-- Supporting Document -->
      <detailCard
        title="Supporting Document"
        cardType="file"
        :dataArray=infoCard.fileArray
      ></detailCard>
    </f7-block>
  </f7-page>
</template>

<script>
  import detailCard from './detail-card.vue';
  require('../css/info.css');
  export default {
    data() {
      return {

      }
    },
    components: {
      detailCard
    },
    computed: {
      cid() {
        console.log(this.$store.state.cid);
        return this.$store.state.cid;
      },
      infoCard(){
        console.log(this.$store.state.infoCard);
        return this.$store.state.infoCard;
      }
    }
  }
</script>

<style scoped></style>
