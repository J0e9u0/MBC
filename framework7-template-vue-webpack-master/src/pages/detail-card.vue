<template>
    <div>
      <infoCard
        :title=title
        v-on:getMoreInfo="getMoreInfo()"
      >
        <!-- Basic Info -->
        <f7-card-content class="cardContentPadding" v-if="cardType == 'vertical'">
          <f7-row width="100" class="text-label" v-for="(value, key, index) in dataArray">
            <f7-col width="100">
              <div class="text-key">{{key}}</div>
              <div class="text-value">{{value}}</div>
            </f7-col>
          </f7-row>
        </f7-card-content>
        <!-- Have Budgeted -->
        <f7-card-content class="cardContentPadding" v-if="cardType == 'horizontal'">
          <f7-row width="100" class="info-value-label" v-for="(value, key, index) in dataArray">
            <div class="text-key">{{key}}</div>
            <div v-if="value" class="number-value">{{value}}</div>
            <div v-else class="text-value">--</div>
          </f7-row>
        </f7-card-content>
        <!-- Supporting Document -->
        <f7-card-content class="fileContentPadding" v-if="cardType == 'file'">
          <f7-row width="100" class="info-file-label" v-for="(value, index) in dataArray.supportingDocument" v-bind:class="{ topLine: index != 0 }">
            <f7-col width="80" class="file-block">
              <img src="../img/doc.png" class="doc-img">
              <div class="file-info">
                <label class="text-value">{{value.fileName}}</label><br>
                <span class="text-key">{{value.fileDescription}}</span>
              </div>
            </f7-col>
            <div class="info-text-value file-download-img">
              <i class="icon f7-icons ios-only">download</i>
            </div>
          </f7-row>
        </f7-card-content>

      </infoCard>
    </div>
</template>

<script>
  import infoCard from './info-card.vue';
  export default {
    name: "detail-card",
    props: {
      title: {
        type: String,
        required: true
      },
      cardType: {
        type: String,
        required: true
      },
      dataArray: {
        type: Object,
        required: false
      }
    },
    methods:{
      getMoreInfo() {
        this.$f7.dialog.alert('Click More button');
      }
    },
    data() {
      return {

      }
    },
    components: {
      infoCard:infoCard
    }
  }
</script>

<style scoped>
  .info-value-label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .text-label{
    margin-top: 10px;
    margin-bottom: 10px;
    word-break: break-word;
  }

  .info-file-label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .number-value {
    font-weight: 700;
    color: cornflowerblue;
  }

  .text-key {
    font-size: 12px;
    color: gray;
  }

  .text-value {
    font-size: 13px;
    font-weight: 700;
    padding-right: 1px;
  }

  .cardContentPadding{
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
  }

  .fileContentPadding{
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
  }

  .doc-img {
    width: 45px;
    height: 50px;
  }

  .topLine{
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: whitesmoke;
  }

  .file-block {
    display: flex;
    flex-direction: row;
  }

  .file-info{
    padding-left: 20px;
  }

  .file-download-img{
    padding-top: 10px;
  }
</style>
