<template>
    <div>
        <el-collapse v-model="cus_col_val">
            <el-collapse-item title="融资信息" name="1">
                <el-row>
                    <el-col :span="4" class="bgColor">产品系列：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">产品类型：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">期限：</el-col>
                    <el-col :span="4" class="el_style">####</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">申请额度：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">融资用途：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">追加额度：</el-col>
                    <el-col :span="4" class="el_style">####</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">期望融资总额：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder">是否同意过户：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder"></el-col>
                    <el-col :span="4" class="el_style addborder"></el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人个人信息" name="2">
                <el-row>
                    <el-col :span="4" class="bgColor">承租人姓名：</el-col>
                    <el-col :span="4" class="el_style">张三</el-col>
                    <el-col :span="4" class="bgColor">性别：</el-col>
                    <el-col :span="4" class="el_style">女</el-col>
                    <el-col :span="4" class="bgColor">出生日期：</el-col>
                    <el-col :span="4" class="el_style">1990-01-01</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">联系电话：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">身份证号：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">证件有效期：</el-col>
                    <el-col :span="4" class="el_style">####</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">暂住证：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">联系住址电话：</el-col>
                    <el-col :span="4" class="el_style">010-12343234</el-col>
                    <el-col :span="4" class="bgColor">起始居住时间：</el-col>
                    <el-col :span="4" class="el_style">2000.5</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">初来本市年份：</el-col>
                    <el-col :span="4" class="el_style">2005.6</el-col>
                    <el-col :span="4" class="bgColor">供养亲属人数：</el-col>
                    <el-col :span="4" class="el_style">5</el-col>
                    <el-col :span="4" class="bgColor">婚姻状况：</el-col>
                    <el-col :span="4" class="el_style">已婚</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">学历：</el-col>
                    <el-col :span="4" class="el_style">研究生</el-col>
                    <el-col :span="4" class="bgColor">信用卡额度：</el-col>
                    <el-col :span="4" class="el_style">50000.00</el-col>
                    <el-col :span="4" class="bgColor">房产：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">户口所在地：</el-col>
                    <el-col :span="20" class="el_style">北京市海淀区####</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">现住址：</el-col>
                    <el-col :span="20" class="el_style addborder">北京市海淀区####</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人工作信息" name="3">
                <el-row>
                    <el-col :span="4" class="bgColor">单位名称：</el-col>
                    <el-col :span="4" class="el_style">北京市朝阳区</el-col>
                    <el-col :span="4" class="bgColor">所属部门：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">岗位名称：</el-col>
                    <el-col :span="4" class="el_style">前端</el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">单位电话：</el-col>
                    <el-col :span="4" class="el_style">010-12232423</el-col>
                    <el-col :span="4" class="bgColor">单位性质：</el-col>
                    <el-col :span="4" class="el_style">国企</el-col>
                    <el-col :span="4" class="bgColor">月基本薪金：</el-col>
                    <el-col :span="4" class="el_style">10000</el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">其他收入：</el-col>
                    <el-col :span="4" class="el_style">2000</el-col>
                    <el-col :span="4" class="bgColor">职位级别：</el-col>
                    <el-col :span="4" class="el_style">高级</el-col>
                    <el-col :span="4" class="bgColor">入司年限：</el-col>
                    <el-col :span="4" class="el_style">十年</el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">是否为私营业主：</el-col>
                    <el-col :span="4" class="el_style">否</el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">单位详细地址：</el-col>
                    <el-col :span="20" class="el_style addborder">北京市东城区</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人配偶信息" name="4">
                <el-row>
                    <el-col :span="4" class="bgColor">配偶姓名：</el-col>
                    <el-col :span="4" class="el_style">李四</el-col>
                    <el-col :span="4" class="bgColor">配偶联系电话：</el-col>
                    <el-col :span="4" class="el_style">13234532443</el-col>
                    <el-col :span="4" class="bgColor">学历：</el-col>
                    <el-col :span="4" class="el_style">研究生</el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">身份证号：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">证件有效期：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">配偶居住地址：</el-col>
                    <el-col :span="20" class="el_style">###</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">配偶单位名称：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">配偶单位电话：</el-col>
                    <el-col :span="4" class="el_style">010-12345678</el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">配偶单位地址：</el-col>
                    <el-col :span="20" class="el_style">北京市朝阳区</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">单位性质：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">月基本薪金：</el-col>
                    <el-col :span="4" class="el_style"></el-col>
                    <el-col :span="4" class="bgColor">其他收入：</el-col>
                    <el-col :span="4" class="el_style"></el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">职位级别：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder">入司年限：</el-col>
                    <el-col :span="4" class="el_style addborder"></el-col>
                    <el-col :span="4" class="bgColor addborder">是否为私营业主：</el-col>
                    <el-col :span="4" class="el_style addborder"></el-col> 
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人联系人信息" name="5">
                <el-table
                    :data="relativeData"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="relative"
                        label="和本人关系">
                    </el-table-column>
                    <el-table-column
                        prop="indexno"
                        label="序号">
                    </el-table-column>  
                    <el-table-column
                        prop="name"
                        label="姓名">
                    </el-table-column> 
                    <el-table-column
                        prop="tel"
                        label="联系电话">
                    </el-table-column>   
                    <el-table-column
                        prop="gzdw"
                        label="工作单位">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="家庭住址或单位地址">
                    </el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="业务归属信息" name="6">
                <el-row>
                    <el-col :span="4" class="bgColor addborder">客户来源：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder">业务联系人：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder">业务联系电话：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="审核信息" name="7">
                <el-row>
                    <el-col :span="4" class="bgColor">单位具体描述：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">家庭具体描述：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">融资用途：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">征信报告情况：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">人法网查询情况：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                    <el-col :span="4" class="bgColor">工商网查询情况：</el-col>
                    <el-col :span="4" class="el_style">###</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">电核情况：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder">其他情况说明：</el-col>
                    <el-col :span="4" class="el_style addborder">###</el-col>
                    <el-col :span="4" class="bgColor addborder"></el-col>
                    <el-col :span="4" class="el_style addborder"></el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default{
    data() {
        return {
            cus_col_val: ['1','2','3','4','5','6','7'],
            relativeData: [{
                relative: '夫妻',
                indexno: '1',
                name: '张三',
                tel: '13899999999',
                gzdw: '某学校',
                address: '朝阳区光华路'
            },{
                relative: '姐妹',
                indexno: '1',
                name: '李四',
                tel: '13899999999',
                gzdw: '某学校',
                address: '朝阳区光华路'
            }]
        }
    }
}
</script>
<style lang="less">
.el-collapse-item__header{
    background-color: #d0d0d0;
    padding-left: 20px;
}
</style>

