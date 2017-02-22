<template>
    <div class="source">
        <el-form ref="form" :label-position="position" :model="form" label-width="80px">
            <!-- 添加试卷名 -->
            <el-form-item label="试卷名">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <!-- 添加试卷所属学科 -->
            <el-form-item label="所属学科">
                <el-select v-model="form.point_ids" multiple filterable placeholder="请选择试卷所属学科">
                    <el-option v-for="item in selectoptions" :label="item.name" :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- 给试卷分层 并给每一层添加试题 -->
            <el-form-item :label=" '第' + (index+1) + '大题'" v-for="(item, index) in form.classify">
                <el-input v-model="item.name" placeholder="输入大题名"></el-input>
                </el-input>
                <el-button type="text" @click="dialogFormVisible = true">点击添加试题</el-button>
                <el-dialog title="试题库" v-model="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="所属学科">
                            <el-select v-model="form.point_ids" multiple filterable placeholder="请选择试卷所属学科">
                                <el-option v-for="item in selectoptions" :label="item.name" :value="item._id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div class="line"></div>
                        <h4>试题列表</h4>
                        <el-table :data="tableData" border style="width: 100%" height="250">
                            <el-table-column fixed prop="date" label="日期" width="150">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="120">
                            </el-table-column>
                            <el-table-column prop="province" label="省份" width="120">
                            </el-table-column>
                            <el-table-column prop="city" label="市区" width="120">
                            </el-table-column>
                            <el-table-column prop="address" label="地址" width="300">
                            </el-table-column>
                            <el-table-column prop="zip" label="邮编" width="120">
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="100">
                                <template scope="scope">
                                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'paperhand',
    data() {
        return {
            position: 'left',
            dialogFormVisible: false,
            selectoptions: [{
                _id: '',
                name: ''
            }],
            form: {
                title: '',
                point_ids: [],
                difficulty: '',
                score: '',
                classify: [{
                    name: '',
                    order: 0,
                    topic_id: []
                }]
            },
            AZlist: [],
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        }
    },
    created() {
        this.$http.get('http://localhost:3000/points').then(response => {
            this.selectoptions = response.body
        }, response => {
            console.log("response", response)
        });
    },
    methods: {
        onSubmit() {
            this.$http.post('http://localhost:3000/papers', this.form).then(response => {
                console.log("response", response)
            }, response => {
                console.log("response", response)
            });
        },
        handleClick() {
            console.log(1);
        },
        addChoice() {
            const length = this.form.items.length;
            const limit = length + 65;
            if (limit > 91) return
            let arr = [];
            for (var i = 65; i < 91; i++) {
                let charcode = String.fromCharCode(i);
                arr.push(charcode)
            }
            for (let j = 0; j < length; j++) {
                let choice = this.form.items[j].sign;
                let index = arr.indexOf(choice);
                if (index !== -1) {
                    arr.splice(index, 1)
                }
            }
            this.form.items.push({
                sign: arr[0],
                detail: ''
            })
            this.form.items.sort(function(a, b) {
                return a.sign > b.sign;
            })
        },

        removeChoice(item) {
            const index = this.form.items.indexOf(item)
            if (index === -1) return
            this.form.items.splice(index, 1)
        }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.source {
    padding: 24px;
    text-align: center;
    width: 60%;
}

.source form .el-input {
    width: 76%;
}

.source form {}

.el-dialog__body .el-form .el-form-item {
    padding: 1px 0;
}
</style>
