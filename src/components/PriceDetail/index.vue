<template>
    <div>
        <div class="de_top">
            <span>进件编号：{{this.orderNum}}</span>
            <span>客户姓名：{{userInfo.userName}}</span>
            <span>申请产品：{{orderInfo.productType}}</span>
            <span>申请金额：{{orderInfo.applicationLimit}}</span>
            <span>申请期限：{{orderInfo.productTerm}}</span>
            <span>产品用途：{{orderInfo.financingPurposes}}</span>
            <span>月还款额：{{orderInfo.financingPurposes}}</span>
            <span>进件门店：{{orderInfo.financingPurposes}}</span>
            <span>客户经理：{{orderInfo.financingPurposes}}</span>
        </div>
        <el-row>
            <el-col :span="10">
                <div class="de_attach clearfix">
                    <span class="de_att_title">附件信息</span>
                    <div class="de_att_btn">
                        <el-button type="primary" icon="el-icon-picture" size="mini"></el-button>
                        <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
                        <el-button type="primary" icon="el-icon-zoom-in" size="mini" @click="hide"></el-button>
                    </div>
                </div>
                <div class="de_img_container attachHeight" :style="attachHeight">
                    <div class="de_btn clearfix">
                        <template v-for="item in fileType">
                            <el-button class="de_tag" size="mini" @click="chooseType(item)">{{ item }}</el-button>
                        </template>
                    </div>
                    <div class="viewHeight" :style="viewHeight">
                        <div v-viewer="options" class="de_viewer images clearfix">
                            <div v-for="{source, thumbnail} in images" class="addMenu">
                                <img :src="thumbnail" :data-source="source" class="image" :key="source" :alt="source.split('/').pop()" @contextmenu.prevent="rightClick" @click="clickImg"/>         
                            </div>
                        </div>
                        <div :style="{left:clientLeft + 'px', top:clientTop + 'px', display:showContextMenu}" class="contextBtn"><el-button size="small">加入对比</el-button></div>
                    </div>                  
                </div>
            </el-col>
            <el-col :span="14">
                <div class="de_pdRight">
                    <el-tabs type="border-card" class="tabHeight" :style="tabHeight" @tab-click="handleTabClick">
                        <el-tab-pane label="车辆资料" v-if="displayTabs.carInfoObj">
                            <car-info :cars="this.carsInfo"></car-info>
                        </el-tab-pane>
                        <el-tab-pane label="定价结论" v-if="displayTabs.editAuditCarPriceObj">
                            <price-conclusion :paramPrice="this.paramsForPrice" :conclusionList="this.priceConclusion" :priceid="this.priceid" :orderNum="this.$route.params.order_number" :status="this.$route.params.status"></price-conclusion>
                        </el-tab-pane>
                        <el-tab-pane label="流程轨迹" v-if="displayTabs.logInfoObj">
                            <work-log :logs="this.historyLog"></work-log>
                        </el-tab-pane>
                        <el-tab-pane label="客户资料" v-if="displayTabs.customerInfoObj">
                            <custom-info :info="this.orderInfo" :user="this.userInfo" :contacts="this.contactsInfo"></custom-info>
                        </el-tab-pane>
                        <el-tab-pane label="历史匹配" v-if="displayTabs.matchInfoObj">
                            <history-match :carNumMatch="this.carNumberMatch" :carFraMatch="this.carFrameMatch" :idMatch="this.idCardMatch" :phoneMatch="this.phoneMatch"></history-match>
                        </el-tab-pane>
                        <el-tab-pane label="审核意见" v-if="displayTabs.editAuditInfoObj">
                            <check-opinion :paramAudit="this.paramsForAudit" :auditList="this.auditConclusion" :actName="this.actName" :bizType="this.bizType" :orderNumber="this.orderNum"></check-opinion>
                        </el-tab-pane>
                        <el-tab-pane label="客户复议" v-if="displayTabs.custorReconsiderObj">
                            <custom-reconsider :orderNum="this.$route.query.order_number"></custom-reconsider>
                        </el-tab-pane>
                        <el-tab-pane label="审核意见" v-if="displayTabs.auditInfoObj">
                            <final-check :auditList="this.auditConclusion"></final-check>
                        </el-tab-pane>
                        <el-tab-pane label="定价结论" v-if="displayTabs.auditCarPriceObj">
                            <final-conclusion :conclusionList="this.priceConclusion"></final-conclusion>
                        </el-tab-pane>
                        <el-tab-pane label="反欺诈" v-if="displayTabs.editAntiFraudObj">
                            <anti-fraud :paramAnit="this.paramsForAnit" :fraudList="this.fraudConclusion" :antifraudid="this.antifraudid"></anti-fraud>
                        </el-tab-pane>
                        <el-tab-pane label="反欺诈" v-if="displayTabs.antiFraudObj">
                            <anti-fraudlist :fraudList="this.fraudConclusion"></anti-fraudlist>
                        </el-tab-pane>
                         <el-tab-pane label="电核网核" v-if="displayTabs.surveyInfoObj">
                           <survey-contacts ></survey-contacts >
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import CarInfo from './Tabs/CarInfo'
import PriceConclusion from './Tabs/PriceConclusion'
import WorkLog from './Tabs/WorkLog'
import CustomInfo from './Tabs/CustomInfo'
import HistoryMatch from './Tabs/HistoryMatch'
import CheckOpinion from './Tabs/CheckOpinion'
import CustomReconsider from './Tabs/CustomReconsider'
import FinalCheck from './Tabs/FinalCheck'
import FinalConclusion from './Tabs/FinalConclusion'
import ReviewCheck from './Tabs/ReviewCheck'
import AntiFraud from './Tabs/AntiFraud'
import AntiFraudlist from './Tabs/AntiFraudlist'
import SurveyContacts from './Tabs/SurveyContacts'
export default {
  components: {
    CarInfo,
    PriceConclusion,
    WorkLog,
    CustomInfo,
    HistoryMatch,
    CheckOpinion,
    CustomReconsider,
    FinalCheck,
    FinalConclusion,
    ReviewCheck,
    AntiFraud,
    AntiFraudlist,
    SurveyContacts
  },
  created() {
      setTimeout(() => {
        this.chooseType();
      },3000)
  },
  data() {
    return {
      activeName: 'beforeCheck',
      tabHeight: {
          minHeight: document.documentElement.clientHeight - 80 + "px",
      },
      attachHeight: {
          height: document.documentElement.clientHeight - 120 + "px",
      },
      viewHeight: {
          height: document.documentElement.clientHeight - 196 + "px",
      },
      options: {
          url: 'data-source', 
          inline: true,
      },
      images: [],
      clientLeft: 0,
      clientTop: 0,
      showContextMenu:'none',
      show:false,
      orderNum:this.$route.query.order_number,
      status:this.$route.query.status,
      actName:this.$route.query.actName,
      bizType:this.$route.query.bizType
    }
  },
  computed:mapState({
    token: state => state.login.user_token,
    orderInfo: state => state.orderInfo.order_info,
    userInfo: state => state.orderInfo.user_info,
    contactsInfo: state => state.orderInfo.contacts_info,
    carsInfo: state => state.orderInfo.cars_info,
    carNumberMatch: state => state.historyMatch.carNumber_match,
    carFrameMatch: state => state.historyMatch.carFrame_match,
    idCardMatch: state => state.historyMatch.idCard_match,
    phoneMatch: state => state.historyMatch.phone_match,
    carsFile: state => state.orderInfo.cars_file,
    auditTabs: state => state.myTask.audit_tabs,
    priceConclusion: state => state.orderInfo.conclusionList,
    auditConclusion: state => state.orderInfo.auditList,
    fraudConclusion: state => state.orderInfo.fraudList,
    historyLog: state => state.orderInfo.historyLogs,
    priceid:state => state.orderInfo.priceid,
    antifraudid:state => state.orderInfo.antifraudid,
    fileType(state) {
        let fileTypeArr = [];
        state.orderInfo.cars_file.map((item) => {
            if(fileTypeArr.indexOf(item.fileName) == -1) {
                fileTypeArr.push(item.fileName);
            }
        });
        return fileTypeArr;
    },
    displayTabs(state) {
         //let showTab =  Object.keys(state.myTask.audit_tabs);
        // let showTab = state.myTask.audit_tabs;
        // return showTab;
        let showTab = {
            "logInfoObj": false,
            "matchInfoObj": false,
            "carInfoObj": false,
            "customerInfoObj": false,
            "surveyInfoObj": false,
            "auditInfoObj": true,
            "auditCarPriceObj": false,
            "antiFraudObj": false,
            "editAuditCarPriceObj": false,
            "editAuditInfoObj": false,
            "editAntiFraudObj": false,
            "custorReconsiderObj": false
         
        };       
        
        let showArr = Object.keys(state.myTask.audit_tabs);
      
        //先判断有哪几个标签显示，如果显示则让它为true
        for(let i in showTab) {
            if(showArr.indexOf(i) !== -1) {
                showTab[i] = true;
            }
        }
        if(showTab.auditCarPriceObj == true) {
            if(state.myTask.audit_tabs.auditCarPriceObj == "true") {
                showTab.editAuditCarPriceObj = true;
                showTab.auditCarPriceObj = false;
            }
        }
        if(showTab.auditInfoObj == true) {
            if(state.myTask.audit_tabs.auditInfoObj == "true") {
                showTab.editAuditInfoObj = true;
                showTab.auditInfoObj = false;
            }
        }
        if(showTab.antiFraudObj == true) {
            if(state.myTask.audit_tabs.antiFraudObj == "true") {
                showTab.editAntiFraudObj = true;
                showTab.antiFraudObj = false;
            }
        }       
        return showTab;
    },
    paramsForPrice: state => state.myTask.params_price,
    paramsForAudit: state => state.myTask.params_audit,
    paramsForAnit: state => state.myTask.params_anit
  }),
  methods: {
      rightClick(event) {
        this.clientLeft = event.clientX;
        this.clientTop = event.clientY - 60;
        this.showContextMenu = "block";
        setTimeout(() => {
            this.showContextMenu = "none";
        },3000)
      },
      hide() {
          const viewer = this.$el.querySelector('.images').$viewer;
          viewer.hide();
          document.querySelector('.viewer-container').style.display = 'none';
      },
      clickImg() {
          document.querySelector('.viewer-container').style.display = 'block';
      },
      chooseType(item) {
          this.images = [];
          if(item) {
              this.carsFile.map((i) => {

              if(i.fileName == item) {
                  let imgObj = {};
                  imgObj.source = i.fileUrl;
                  imgObj.thumbnail = i.fileUrl + '?x-oss-process=image/resize,m_fill,w_157,h_112,limit_0/auto-orient,0/quality,q_90';
                  this.images.push(imgObj);
                }
            })
          }else{
              this.images.push({
                source: this.carsFile[0].fileUrl,
                thumbnail: this.carsFile[0].fileUrl + '?x-oss-process=image/resize,m_fill,w_157,h_112,limit_0/auto-orient,0/quality,q_90'
              })
          }
      },
      handleTabClick(tab,event) {
          console.log(tab,event);
      }
      
  },
  mounted() { 
     
      //从url过来的参数保存到localStorage中
      //this.saveParams(),
      //获取订单信息
      this.$store.dispatch('getOrderInfo',{
          headers: {'token': this.token},
          params: {order_number: this.$route.query.order_number }
      }),
      //获取用户信息
      this.$store.dispatch('getUserInfo',{
          headers: {'token': this.token},
          params: {order_number: this.$route.query.order_number }
      }),
      //获取申请人联系人信息
      this.$store.dispatch('getContactsInfo',{
          headers: {'token': this.token},
          params: {order_number: this.$route.query.order_number }
      }),
      //获取车辆信息
      this.$store.dispatch('getCarsInfo',{
          headers: {'token': this.token},
          params: {order_number: this.$route.query.order_number }
      })
      //获取车牌号匹配
      this.$store.dispatch('getCarNumberMatch',{
          headers: {'token': this.token},
          params: {orderNumber: this.$route.query.order_number }
      }),
      //获取车架号匹配
      this.$store.dispatch('getCarFrameMatch',{
          headers: {'token': this.token},
          params: {orderNumber: this.$route.query.order_number}
      }),
      //获取身份证号匹配
      this.$store.dispatch('getIdCardMatch',{
          headers: {'token': this.token},
          params: {orderNumber: this.$route.query.order_number }
      }),
      //获取手机号匹配
      this.$store.dispatch('getPhoneMatch',{
          headers: {'token': this.token},
          params: {orderNumber: this.$route.query.order_number }
      }),
      //获取附件信息
      this.$store.dispatch('getCarsFile',{
          headers: {'token': this.token},
          params: {order_number: this.$route.query.order_number }
      }),
      //获取定价结论列表
      this.$store.dispatch('getPriceConclusion',{
          headers: {'token': this.token},
          params: {ordernum: this.$route.query.order_number, status: this.$route.query.status}
      }),
      //获取审核意见列表
      this.$store.dispatch('getAuditConclusion',{
          headers: {'token': this.token},
          params: {ordernum: this.$route.query.order_number , status: this.$route.query.status, actName: this.$route.query.actName}
      }),
      //获取流程轨迹
      this.$store.dispatch('getHistoryLogs',{
          headers: {'token': this.token},
          params: {ordernum: this.$route.query.order_number}
      }),
      //获取反欺诈项
      this.$store.dispatch('getAntiFrauds',{
          headers: {'token': this.token},
          params: {ordernum: this.$route.query.order_number, status: this.$route.query.status}
      }),
      //获取标签
      this.$store.dispatch('getAuditTabs',{
          biztype: this.$route.query.bizType,
          actName: this.$route.query.actName,
          statusId: this.$route.query.status
      });
  }
}
</script>
<style lang="less">
.de_top{
    padding:20px;
}
.de_pdRight{
    padding-right:20px;
}
.hided{
    display:none;
}
.de_top span{
    margin-right:20px;
}
.de_attach{
    height:40px;
    width:97%;
    margin:0 auto;
    background-color:#f0f0f0;

    .de_att_title{
        display: block;
        float:left;
        line-height:40px;
        padding-left:20px;
    }
    .de_att_btn{
        float: right;
        margin: 6px;
    }
}
.de_img_container{
    width:97%;
    border:1px solid #eee;
    margin:0 auto;
    position:relative;

    .de_btn{
        padding:20px 0 0 10px;

        .de_tag{
            margin:0 0 10px 5px;
            float:left;
            cursor: pointer;
        }
    }
    .de_viewer{
        width:800px;
        margin:20px auto;

        .addMenu{
            display:inline-block;
            margin:5px;

            .image{
                border: 2px solid #d8d8d8;
                cursor: pointer;
            }
        }
    }
    .contextBtn{
        position:absolute;
    }
    
}

</style>
