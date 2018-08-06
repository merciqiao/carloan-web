<template>
    <div>
        <el-collapse v-model="cus_col_val" @change="test">
            <el-collapse-item title="融资信息" name="1">
                <el-row>
                    <el-col :span="4" class="bgColor">产品系列：</el-col>
                    <el-col :span="4" class="el_style">{{ info.productSeries }}</el-col>
                    <el-col :span="4" class="bgColor">产品类型：</el-col>
                    <el-col :span="4" class="el_style">{{ info.productType }}</el-col>
                    <el-col :span="4" class="bgColor">期限：</el-col>
                    <el-col :span="4" class="el_style">{{ info.productTerm }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">申请额度：</el-col>
                    <el-col :span="4" class="el_style">{{ info.applicationLimit }}</el-col>
                    <el-col :span="4" class="bgColor">融资用途：</el-col>
                    <el-col :span="4" class="el_style">{{ info.financingPurposes }}</el-col>
                    <el-col :span="4" class="bgColor">追加额度：</el-col>
                    <el-col :span="4" class="el_style">{{ info.additionalCredits }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">期望融资总额：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.expectedTotalFinancing }}</el-col>
                    <el-col :span="4" class="bgColor addborder">是否同意过户：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.isAgreedChangeName }}</el-col>
                    <el-col :span="4" class="bgColor addborder"></el-col>
                    <el-col :span="4" class="el_style addborder"></el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人个人信息" name="2">
                <el-row>
                    <el-col :span="4" class="bgColor">承租人姓名：</el-col>
                    <el-col :span="4" class="el_style">{{ user.userName }}</el-col>
                    <el-col :span="4" class="bgColor">性别：</el-col>
                    <el-col :span="4" class="el_style">{{ user.sex }}</el-col>
                    <el-col :span="4" class="bgColor">出生日期：</el-col>
                    <el-col :span="4" class="el_style">{{ user.birthdayDate }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">联系电话：</el-col>
                    <el-col :span="4" class="el_style">{{ user.phoneNumber }}</el-col>
                    <el-col :span="4" class="bgColor">身份证号：</el-col>
                    <el-col :span="4" class="el_style">{{ user.idCard }}</el-col>
                    <el-col :span="4" class="bgColor">证件有效期：</el-col>
                    <el-col :span="4" class="el_style">{{ user.certificateValide }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">暂住证：</el-col>
                    <el-col :span="4" class="el_style">{{ user.theporaryPermit }}</el-col>
                    <el-col :span="4" class="bgColor">联系住址电话：</el-col>
                    <el-col :span="4" class="el_style">{{ user.contactAddressPhone }}</el-col>
                    <el-col :span="4" class="bgColor">起始居住时间：</el-col>
                    <el-col :span="4" class="el_style">{{ user.startLivingTime }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">初来本市年份：</el-col>
                    <el-col :span="4" class="el_style">{{ user.inCityYear }}</el-col>
                    <el-col :span="4" class="bgColor">供养亲属人数：</el-col>
                    <el-col :span="4" class="el_style">{{ user.supportNumber }}</el-col>
                    <el-col :span="4" class="bgColor">婚姻状况：</el-col>
                    <el-col :span="4" class="el_style">{{ user.maritalStatus }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">学历：</el-col>
                    <el-col :span="4" class="el_style">{{ user.education }}</el-col>
                    <el-col :span="4" class="bgColor">信用卡额度：</el-col>
                    <el-col :span="4" class="el_style">{{ user.creditCardAmount }}</el-col>
                    <el-col :span="4" class="bgColor">房产：</el-col>
                    <el-col :span="4" class="el_style">{{ user.houseProperty }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">户口所在地：</el-col>
                    <el-col :span="20" class="el_style">{{ user.houseAddress }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">现住址：</el-col>
                    <el-col :span="20" class="el_style addborder">{{ user.contactAddress }}</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人工作信息" name="3">
                <el-row>
                    <el-col :span="4" class="bgColor">单位名称：</el-col>
                    <el-col :span="4" class="el_style">{{ user.unitName }}</el-col>
                    <el-col :span="4" class="bgColor">所属部门：</el-col>
                    <el-col :span="4" class="el_style">{{ user.belongDepartment }}</el-col>
                    <el-col :span="4" class="bgColor">岗位名称：</el-col>
                    <el-col :span="4" class="el_style">{{ user.postName }}</el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">单位电话：</el-col>
                    <el-col :span="4" class="el_style">{{ user.companyPhone }}</el-col>
                    <el-col :span="4" class="bgColor">单位性质：</el-col>
                    <el-col :span="4" class="el_style">{{ user.companyNature }}</el-col>
                    <el-col :span="4" class="bgColor">月基本薪金：</el-col>
                    <el-col :span="4" class="el_style">{{ user.monthSalary }}</el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">其他收入：</el-col>
                    <el-col :span="4" class="el_style">{{ user.otherIncome }}</el-col>
                    <el-col :span="4" class="bgColor">职位级别：</el-col>
                    <el-col :span="4" class="el_style">{{ user.positionLevel }}</el-col>
                    <el-col :span="4" class="bgColor">入司年限：</el-col>
                    <el-col :span="4" class="el_style">{{ user.inCompanyYear }}</el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">是否为私营业主：</el-col>
                    <el-col :span="4" class="el_style">{{ user.isPrivateOwner }}</el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col>    
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">单位详细地址：</el-col>
                    <el-col :span="20" class="el_style addborder">{{ user.companyAddress }}</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人配偶信息" name="4">
                <el-row>
                    <el-col :span="4" class="bgColor">配偶姓名：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseName }}</el-col>
                    <el-col :span="4" class="bgColor">配偶联系电话：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spousePhone }}</el-col>
                    <el-col :span="4" class="bgColor">学历：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseEducation }}</el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">身份证号：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseIdCard }}</el-col>
                    <el-col :span="4" class="bgColor">证件有效期：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseCertificateValid }}</el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">配偶居住地址：</el-col>
                    <el-col :span="20" class="el_style">{{ user.spouseLivingAddress }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">配偶单位名称：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseUnitName }}</el-col>
                    <el-col :span="4" class="bgColor">配偶单位电话：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseCompanyPhone}}</el-col>
                    <el-col :span="4" class="bgColor"></el-col>
                    <el-col :span="4" class="el_style"></el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">配偶单位地址：</el-col>
                    <el-col :span="20" class="el_style">{{ user.spouseCompanyAddress }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">单位性质：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseCompanyNature }}</el-col>
                    <el-col :span="4" class="bgColor">月基本薪金：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseMonthSalary }}</el-col>
                    <el-col :span="4" class="bgColor">其他收入：</el-col>
                    <el-col :span="4" class="el_style">{{ user.spouseOtherIncome }}</el-col> 
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">职位级别：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ user.spousePositionLevel }}</el-col>
                    <el-col :span="4" class="bgColor addborder">入司年限：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ user.spouseInCompanyYear }}</el-col>
                    <el-col :span="4" class="bgColor addborder">是否为私营业主：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ user.spouseIsPrivateOwner }}</el-col> 
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请人联系人信息" name="5">
                <el-table
                    :data="contacts"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="relationship"
                        label="和本人关系">
                    </el-table-column>
                    <el-table-column
                        type="index"
                        label="序号"
                        width="55">
                    </el-table-column>  
                    <el-table-column
                        prop="name"
                        label="姓名">
                    </el-table-column> 
                    <el-table-column
                        prop="contactNumber"
                        label="联系电话">
                    </el-table-column>   
                    <el-table-column
                        prop="workUnit"
                        label="工作单位">
                    </el-table-column>
                    <el-table-column
                        prop="homeOrOfficeAddresses"
                        label="家庭住址或单位地址">
                    </el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="业务归属信息" name="6">
                <el-row>
                    <el-col :span="4" class="bgColor addborder">客户来源：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.customerSource }}</el-col>
                    <el-col :span="4" class="bgColor addborder">业务联系人：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.name }}</el-col>
                    <el-col :span="4" class="bgColor addborder">业务联系电话：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.phone }}</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="审核信息" name="7">
                <el-row>
                    <el-col :span="4" class="bgColor">单位具体描述：</el-col>
                    <el-col :span="4" class="el_style">{{ info.companyDescription }}</el-col>
                    <el-col :span="4" class="bgColor">家庭具体描述：</el-col>
                    <el-col :span="4" class="el_style">{{ info.familyDescription }}</el-col>
                    <el-col :span="4" class="bgColor">融资用途：</el-col>
                    <el-col :span="4" class="el_style">{{ info.financingPurposes }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor">征信报告情况：</el-col>
                    <el-col :span="4" class="el_style">{{ info.informationReport }}</el-col>
                    <el-col :span="4" class="bgColor">人法网查询情况：</el-col>
                    <el-col :span="4" class="el_style">{{ info.RFWQuerySituation }}</el-col>
                    <el-col :span="4" class="bgColor">工商网查询情况：</el-col>
                    <el-col :span="4" class="el_style">{{ info.GSWQuerySituation }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor addborder">电核情况：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.telephoneVerification }}</el-col>
                    <el-col :span="4" class="bgColor addborder">其他情况说明：</el-col>
                    <el-col :span="4" class="el_style addborder">{{ info.otherInformation }}</el-col>
                    <el-col :span="4" class="bgColor addborder"></el-col>
                    <el-col :span="4" class="el_style addborder"></el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default{
    props: ['info','user','contacts'],
    data() {
        return {
            cus_col_val: ['1','2','3','4','5','6','7']
        }
    },
    methods: {
        test() {
            console.log(info);
        }
    },
    
}
</script>
<style lang="less">
.el-collapse-item__header{
    background-color: #d0d0d0;
    padding-left: 20px;
}
</style>

