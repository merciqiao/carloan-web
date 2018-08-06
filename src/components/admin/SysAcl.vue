<template>
    <div id="app" >
        <div style=" width:50%;float:left;">
           <h5> 角色管理</h5> 
              角色名称： <el-input v-model="s_rolename" label="角色编码" placeholder="角色编码" style="width:200px; heght:30px;"></el-input>
              <br>
              角色编码：  <el-input v-model="s_rolecode" label="角色编码"  placeholder="角色编码" style="width:200px; heght:30px;"></el-input>
             <br>
              <!-- 角色类型：<select v-model="s_roletype"  style="width:200px;" >
                     <option v-for="(item,index) in roleTypeData":value="item.dictDetailValue">{{ item.dictDetailName }}</option>
                 </select>	
                    <br><br>		 -->
                <el-button type="success" icon="el-icon-search" @click="getResult(1)" size="mini">搜索</el-button>
                <br>
        <!--表格数据及操作-->
        <el-table :data="tableData" border style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark" @row-click="clickRow">
            <!--勾选框-->
            <el-table-column type="selection" width="55">
            </el-table-column>
            <!--索引-->
            <el-table-column type="index" :index="indexMethod">
            </el-table-column>
            <el-table-column prop="roleName" label="角色名称" width="180" sortable>
            </el-table-column>
            <el-table-column prop="roleCode" label="角色编码" width="180">
            </el-table-column>
            <el-table-column prop="roleType" label="角色类型">
            </el-table-column>
             <el-table-column prop="id" label="id" >
            </el-table-column>        
        </el-table>
        <br>
       
       
        <br>
        <!--分页条total, sizes, prev, pager, next, jumper-->
        
        <el-pagination
         @size-change="handleSizeChange" 
         @current-change="getResult"
         :current-page="currentPage"         
         :page-size="pageSize"
         layout="total, prev, pager, next"
         :total="roletotal" >
        </el-pagination>       
        </div>
        <div style=" width:45%;float:right;">
            <h5> 资源树</h5>
            <el-button type="success" icon="el-icon-search" @click="saveRoleacl" size="mini">保存</el-button>
         <el-tree
            :data="treeData"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
            </el-tree>

            <div class="buttons">
            <!-- <el-button @click="getCheckedNodes">通过 node 获取</el-button>
            <el-button @click="getCheckedKeys">通过 key 获取</el-button>
            <el-button @click="setCheckedNodes">通过 node 设置</el-button>
            <el-button @click="setCheckedKeys">通过 key 设置</el-button>
            <el-button @click="resetChecked">清空</el-button> -->
            </div>
            
        
        </div>
    </div>    
</template>
<script>
    export default {
        data() {
            return {
                tableData: [],
                roleTypeData:[],
                treeData:[],           
                input:"",
                curentroleid:"",
                curentrow:null,
                 //列表Loading加载   
        listLoading: false,       
        //添加按钮Loading加载
        addLoading: false,       
        roletotal:0,     
        currentPage:1,       
        pageSize:10,
        //检索字段
        s_rolename:"",
        s_rolecode:"",
    //     s_roleType:"",
      defaultProps: {
            children: 'children',
            label: 'name'           
            },   
       
            }
        },
            
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            indexMethod(index) {
                return index;
            },                    
             //获取角色列表
            getResult: function(val) {
                
            var _this = this;
            this.listLoading = true;            
            let param = Object.assign({}, {currentPage:val,pageSize:10,roleName:this.s_rolename,roleCode:this.s_rolecode});
            this.$ajax({
                method: "post",
                url: "/api/sysrole-api/querySysRoleList",
                data: param
            }).then(
                function(resultData) {

                _this.tableData = resultData.data.data;
                _this.roletotal=resultData.data.count;                
                _this.listLoading = false;
                },
                function(resultData) {
                // _this.tableData.message = "Local Reeuest Error!";
                //console.log(resultData);
                }
            );             
           
            },
             handleSizeChange(val) {
                this.pageSize=val;
                this.getResult(1);
              
            },           
             getresourceData()
            {
            var _this = this;
            //this.listLoading = true;  
            
            let param = Object.assign({}, {});
            this.$ajax({
                method: "post",
                url: "/api/sysResource_api/getSysResourceList",
                data: param
            }).then(
                function(resultData) {
                _this.treeData = resultData.data.data;
                         
               
                },
                function(resultData) {
                // _this.tableData.message = "Local Reeuest Error!";
                //console.log(resultData);
                }
            ); 
            },           
            clickRow:function(row)
            {
                var _this = this;            
                _this.roleuserSelect=[];           
                _this.curentroleid=row.id;
                _this.curentrow=row;
                  let param = Object.assign({}, {roleId:_this.curentroleid});
            this.$ajax({
                method: "post",
                url: "/api/sysAcl-api/getSysAclList",
                data: param
            }).then(
                function(resultData) {
                let list=[];
               
                resultData.data.data.forEach(item => { 
                   list.push(item.resoureId);                  
                     });
                     //alert(list);
                      _this.$refs.tree.setCheckedKeys(list);
               
                },
                function(resultData) {
                // _this.tableData.message = "Local Reeuest Error!";
                //console.log(resultData);
                }
            );
                
                  
            },           
           
           saveRoleacl:function()
           {
                var _this = this;
               if(this.curentroleid==""){
               alert("请选择要添加的角色，单击选择行。");
               }
               var sellist=this.$refs.tree.getCheckedKeys();
               var roleid=this.curentroleid;
               if (sellist.length>0) {
               
                        this.listLoading = true;            
                        let param = Object.assign({}, {id:0,roleId:roleid,resourceids:sellist});
                        this.$ajax({
                            method: "post",
                            url: "/api/sysAcl-api/insertSysAcl",
                            data: param
                        }).then(
                            function(resultData) {
                                alert(resultData.data.message);
                                _this.clickRow(_this.curentrow);

                            }
                        );      
            }
               
            }           
                   
            },
         mounted() {
    //获取列表
    this.getResult();
    this.getresourceData();
    
   
         }
    };
</script>
<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
    #roleuser {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }    
    el-input{width:200px;height: 50px;}
</style>