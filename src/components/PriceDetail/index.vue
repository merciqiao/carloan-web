<template>
    <div>
        <div class="de_top">进件编号：BD232756366</div>
        <el-row>
            <el-col :span="10">
                <div class="de_attach clearfix">
                    <span class="de_att_title">附件信息</span>
                    <div class="de_att_btn">
                        <el-button type="primary" icon="el-icon-picture" size="mini"></el-button>
                        <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
                        <el-button type="primary" icon="el-icon-zoom-in" size="mini"></el-button>
                    </div>
                </div>
                <div>
                    暂时不做，没想到合适的交互。。。
                </div>
            </el-col>
            <el-col :span="14">
                <div class="de_pdRight">
                    <el-tabs type="border-card">
                        <el-tab-pane label="车辆资料">
                            <car-info></car-info>
                        </el-tab-pane>
                        <el-tab-pane label="定价结论">定价结论</el-tab-pane>
                        <el-tab-pane label="流程轨迹">流程轨迹</el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import CarInfo from './Tabs/CarInfo'
export default {
  components: {
    CarInfo,
  },
  data() {
    return {
      activeName: 'beforeCheck'
    }
  },
}
</script>
<style lang="less">
.de_top{
    padding:20px;
}
.de_pdRight{
    padding-right:20px;
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
</style>
