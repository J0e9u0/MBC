<template>
  <f7-page id="infoPage">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:chevron_left" icon-if-md="material:chevron_left" back color="white"></f7-link>
      </f7-nav-left>
      <f7-nav-title id="infoTitle">{{this.$f7route.params.cid}}</f7-nav-title>
    </f7-navbar>

    <f7-block>
      <!-- Basic Info -->
      <infoCard
        title="Basic Info"
      >
        <f7-card-content class="card-content-padding">
          <f7-row width="100" class="text-label">
            <f7-col width="100">
              <div class="text-key">Applicant</div>
              <div class="text-value">{{infoArray[0].basicInfo.applicant}}</div>
            </f7-col>
            <f7-col width="100" class="gap-top">
              <div class="text-key">Asset Type</div>
              <div class="text-value">{{infoArray[0].basicInfo.assetType}}</div>
            </f7-col>
            <f7-col width="100" class="gap-top">
              <div class="text-key">Company Name</div>
              <div class="text-value">{{infoArray[0].basicInfo.companyName}}</div>
            </f7-col>
            <f7-col width="100" class="gap-top">
              <div class="text-key">Description</div>
              <div class="text-value">{{infoArray[0].basicInfo.description}}</div>
            </f7-col>
          </f7-row>
        </f7-card-content>
      </infoCard>
      <!-- Have Budgeted -->
      <infoCard
        title="Have Budgeted"
      >
        <f7-card-content class="card-content-padding">
          <f7-row width="100" class="info-value-label">
            <div class="text-key">Total Lease Commitment</div>
            <div class="text-value">{{infoArray[0].haveBudgeted.totalLeaseCommitment}}</div>
          </f7-row>
          <f7-row width="100" class="info-value-label">
            <div class="text-key">Previous application(s)</div>
            <div class="text-value">{{infoArray[0].haveBudgeted.previousApplications}}</div>
          </f7-row>
          <f7-row width="100" class="info-value-label">
            <div class="text-key">This Application</div>
            <div v-if="infoArray[0].haveBudgeted.application" class="number-value">{{infoArray[0].haveBudgeted.application}}</div>
            <div v-else class="text-value">--</div>
          </f7-row>
          <f7-row width="100" class="info-value-label">
            <div class="text-key">Budget Variance</div>
            <div class="text-value">{{infoArray[0].haveBudgeted.budgetVariance}}</div>
          </f7-row>
        </f7-card-content>
      </infoCard>
      <!-- Supporting Document -->
      <infoCard
        title="Supporting Document"
      >
        <f7-card-content class="file-content-padding" v-for="(value, key, index) in infoArray[0].supportingDocument">
          <f7-row width="100" class="info-file-label" v-bind:class="{ topLine: index != 0 }">
            <f7-col width="80" class="file-block">
              <img src="../img/doc.png" class="doc-img">
              <div class="file-info">
                <label class="text-value" data-bind="text: fileName">{{value.fileName}}</label><br>
                <span class="text-key" data-bind="text: fileDescription">{{value.fileDescription}}</span>
              </div>
            </f7-col>
            <div class="info-text-value file-download-img">
              <i class="icon f7-icons ios-only">download</i>
            </div>
          </f7-row>
        </f7-card-content>
      </infoCard>
    </f7-block>
  </f7-page>
</template>

<script>
  import infoCard from './info-card.vue';
  require('../css/info.css');
  export default {
    data() {
      return {
        infoArray: [{
          id: 'CER2018-0513',
          basicInfo: {
            applicant: 'GLADYS CHIU',
            assetType: 'OLL warehouses, depots, trucks & others',
            companyName: 'Gold Talent Business Consulting (Shanghai)...',
            description: 'Subject: ${FORM_TYPE} Form Number...'
          },
          haveBudgeted: {
            totalLeaseCommitment: '--',
            previousApplications: '--',
            application: '$123,456,789',
            budgetVariance: '--',
          },
          supportingDocument: [{
            fileId: '1',
            fileName: 'A4_CER1100.DOC',
            fileDescription: 'A4 CER1100'
          }, {
            fileId: '2',
            fileName: 'A4_CER1101.DOC',
            fileDescription: 'A4 OLD1101'
          }]
        }]
      }
    },
    components: {
      infoCard
    }
  }
</script>
