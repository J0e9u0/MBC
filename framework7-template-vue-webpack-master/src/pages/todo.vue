<template>
  <f7-page id="todoPage">
    <f7-navbar>
      <f7-nav-title id="todoTitle">Todo</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right" class="color-white"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-toolbar tabbar labels>
      <f7-link tab-link="#tab-1" tab-link-active text="Todo" icon-ios="f7:data_fill" icon-md="material:email"></f7-link>
      <f7-link tab-link="#tab-2" text="Approval" icon-ios="f7:favorites" icon-md="material:today"></f7-link>
      <f7-link tab-link="#tab-3" text="Me" icon-ios="f7:person" icon-md="material:file_upload"></f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="todoTab" tab-active>
        <f7-block>
          <f7-row no-gap v-for="card in cardArray">
            <f7-col width="100" tablet-width="50">
              <f7-card class="left-color-belt">
                <f7-card-content class="card-content-padding img-arror-right">
                  <div class="col-100 row text-label">
                    <f7-col width="50">
                      <div><strong>{{card.cid}}</strong></div>
                      <i class="icon f7-icons ios-only calendar-img-size">calendar</i>
                      <span class="text-key">2018-11-18</span>
                    </f7-col>
                    <f7-col width="50">
                      <button type="button" class="btn btn-primary btn-xs btn-state">
                        <span>{{card.state}}</span>
                      </button>
                    </f7-col>
                  </div>
                  <f7-row width="100" class="text-label">
                    <f7-col width="50">
                      <div class="text-key">Total Amount</div>
                      <div class="text-number-value">{{card.totalAmount}}</div>
                    </f7-col>
                    <f7-col width="50">
                      <div class="text-key">Unbudgete</div>
                        <div v-if="card.unbudgete" class="text-number-value value-color-blue">{{card.unbudgete}}</div>
                      <div v-else class="text-number-value">—</div>
                    </f7-col>
                  </f7-row>
                  <div class="col-100 row text-label">
                    <f7-col width="50">
                      <div class="text-key">Applicant</div>
                      <div class="text-value">{{card.applicant}}</div>
                    </f7-col>
                    <f7-col width="50">
                      <div v-if="card.revenveMode" class="text-key">Revenve Mode</div>
                      <div v-if="card.revenveMode" class="text-value">{{card.revenveMode}}</div>
                      </f7-col>
                  </div>
                </f7-card-content>
              </f7-card>
            </f7-col>
          </f7-row>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<style>

</style>


<script>
  require('../css/todo.css');
  export default {
    data() {
      return {
        cardArray : [{
          cid: 'CER2018-0513',
          state: 'Pending for FINCON',
          totalAmount: '$2,500,001',
          unbudgete: null,
          applicant: 'HELEN TONG',
          revenveMode: 'Acquisiton'
        }, {
          cid: 'CER2018-0063',
          state: 'Initial Checking',
          totalAmount: '$250,001',
          unbudgete: null,
          applicant: 'HELEN TONG',
          revenveMode: null
        }, {
          cid: 'CER2018-0475',
          state: 'Initial Checking',
          totalAmount: '$2,500,000',
          unbudgete: null,
          applicant: 'CHRISTINE S YAO',
          revenveMode: 'Acquisiton'
        }, {
          cid: 'CER2018-0458',
          state: 'Initial Checking',
          totalAmount: '$50,000,001',
          unbudgete: '$50,000,002',
          applicant: 'HELEN TONG',
          revenveMode: 'Acquisiton'
        }]
      }
    }
  }
</script>
