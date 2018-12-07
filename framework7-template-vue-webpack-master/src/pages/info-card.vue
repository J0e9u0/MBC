<template>
  <f7-card card-outline id="info-card">
    <f7-card-header>
      <div class="info-panel-title">
        {{title}}
      </div>
    </f7-card-header>
    <!-- f7-card-content -->
    <slot></slot>
    <f7-card-footer class="info-bottom-label">
      <label class="more-text" v-on:click="$emit('getMoreInfo')">More</label>
      <i class="icon f7-icons color-gray ios-only chevron-right-img">chevron_right</i>
    </f7-card-footer>
  </f7-card>
</template>

<script>
    export default {
      name: "info-card",
      props:{
        title:{
          type: String,
          required: true
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  #info-card .card{
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 15px;
    padding-right: 15px;
  }

  #info-card .card-header{
    padding-left: 0px;
    padding-right: 0px;
  }

  #info-card .card-footer{
    padding: 0px;
    min-height:30px
  }

  .info-panel-title {
    border-left-style: solid;
    border-left-width: 5px;
    border-left-color: cornflowerblue;
    padding-left: 10px;
    margin-left: -2px;
  }

  .more-text{
    padding-top: 3px;
    color: cornflowerblue;
    font-size: 14px;
    font-weight: 100;
    width: 40px;
  }

  .info-bottom-label{
    display: flex;
    width: 100%;
    margin: 0px;
    padding-left: 25px;
    word-break: break-word;
    justify-content:flex-end;
  }

  .chevron-right-img{
    font-size: 15px;
  }

</style>
