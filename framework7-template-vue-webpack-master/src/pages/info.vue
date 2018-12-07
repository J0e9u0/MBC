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
        :dataArray=basicInfo
      ></detailCard>
      <!-- Have Budgeted -->
      <detailCard
        title="Have Budgeted"
        cardType="horizontal"
        :dataArray=budgeted
      ></detailCard>
      <!-- Supporting Document -->
      <detailCard
        title="Supporting Document"
        cardType="file"
        :dataArray=fileArray
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
        basicInfo: {
          'Applicant': 'GLADYS CHIU',
          'Asset Type': 'OLL warehouses, depots, trucks & others',
          'Company Name': 'Gold Talent Business Consulting (Shanghai)...',
          'Description': 'Subject: ${FORM_TYPE} Form Number...'
        },
        budgeted: {
          'Total Lease Commitment': null,
          'Previous Application(s)': null,
          'This Application': '$123,456,789',
          'Budget Variance': null
        },
        fileArray: {
          supportingDocument: [{
            fileId: '1',
            fileName: 'A4_CER1100.DOC',
            fileDescription: 'A4 CER1100'
          }, {
            fileId: '2',
            fileName: 'A4_CER1101.DOC',
            fileDescription: 'A4 OLD1101'
          }]
        }
      }
    },
    components: {
      detailCard
    },
    computed: {
      cid() {
        return this.$store.state.cid;
      },
      todoCard(){
        return this.$store.state.card;
      }
    }
  }
</script>

<style scoped></style>
