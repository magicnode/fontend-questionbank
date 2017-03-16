<template>
    <div class="source">
        <el-form ref="form" :label-position="position" :model="form" label-width="80px">
            <!-- 添加试卷名 -->
            <el-form-item label="试卷名">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <!-- 添加试卷所属学科 -->
            <el-form-item label="所属学科">
                <el-select v-model="form.paper_classify" filterable placeholder="请选择试卷所属学科" @change="getTableData">
                    <el-option v-for="item in paper_classifies" :label="item.name" :value="item._id">
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
                        <h4 v-show="form.paper_classify === ''">请先选择学科</h4>
                        <el-table :data="tableData" border style="width: 100%" height>
                            <el-table-column prop="type_name" label="题型">
                            </el-table-column>
                            <el-table-column prop="title" label="题目内容">
                            </el-table-column>
                            <el-table-column prop="score" label="题目分值">
                            </el-table-column>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template scope="scope">
                                    <el-button @click="handleClick" type="text" size="small">详细</el-button>
                                    <el-button type="text" size="small" @click="addTopic(item, scope.row)">添加</el-button>
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
            <el-form-item label="难度">
                <el-input placeholder="试卷难度" v-model="form.difficulty" :disabled="true">
                </el-input>
            </el-form-item>
            <el-form-item label="分数">
                <el-input placeholder="试卷分数" v-model="form.score" :disabled="true">
                </el-input>
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
    name: 'papercreate',
    created() {
        this.$http.get('points').then(response => {
            this.selectoptions = response.body
            this.paper_classifies = response.body
        }, response => {
            this.$message.error('学科分类获取失败');
        });
    },
    data() {
        return {
            position: 'left',
            dialogFormVisible: false,
            selectoptions: [{
                _id: '',
                name: ''
            }],
            paper_classifies: [{
                _id: '',
                name: ''
            }],
            form: {
                title: '',
                point_ids: [],
                paper_classify: '',
                point_name: [],
                points: [{
                    _id: '',
                    name: ''
                }],
                difficulty: 0,
                score: 0,
                classify: [{
                    name: '',
                    order: 0,
                    topic_id: []
                }]
            },
            //选择题目的集合
            topics: [{
                topic_id: '',
                title: ''
            }],
            AZlist: [],
            tableData: [],
            selectpoint: '',
            topicList: {}
        }
    },
    methods: {
        onSubmit() {
            this.$http.post('papers', this.form).then(response => {
                this.$message({
                    message: '题目创建成功',
                    type: 'success'
                });
            }, response => {
                this.$message.error('题目创建失败');
            });
        },
        handleClick() {
            console.log()
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
        },

        getTableData() {
            const point_id = this.form.paper_classify;
            if (this.topicList[point_id]) {
                return this.tableData = this.topicList[point_id];
            }
            this.$http.get('points/' + point_id + '/topics').then(response => {
                this.tableData = response.body;
                this.topicList[point_id] = response.body;
            }, response => {
                this.$message.error('获取试题失败');
            });
        },

        addTopic(item, row) {
            const topic_ids = item.topic_id;
            const topic_id = row._id;
            const difficulty = row.difficulty;
            const score = row.score;

            if (topic_ids.indexOf(topic_id) === -1) {
                item.topic_id.push(topic_id)
                this.form.difficulty += Number(difficulty);
                this.form.score += Number(score);
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
            } else {
                this.$message({
                    message: '该题已经添加',
                    type: 'info'
                });
            }
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
