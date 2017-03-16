<template>
    <div class="source">
        <el-form ref="form" :label-position="position" :model="form" label-width="80px">
            <el-form-item label="试题类型">
                <el-select v-model="form.type" placeholder="请选择试题类型">
                    <el-option label="单选题" value="1"></el-option>
                    <el-option label="多选题" value="2"></el-option>
                    <el-option label="填空题" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="试题内容">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="所属学科">
                <el-select v-model="form.point_ids" multiple filterable placeholder="请选择试题所属学科">
                    <el-option v-for="item in selectoptions" :label="item.name" :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- 单选题和多选题题目选项 -->
            <el-form-item :label="item.sign + ' 选项'" v-show="form.type==='1'||form.type==='2'" v-for="(item, index) in form.items">
                <el-input v-model="item.detail"></el-input>
                </el-input>
                <el-button @click.prevent="removeChoice(form.items, item)">删除</el-button>
            </el-form-item>
            <el-form-item v-show="form.type==='1'||form.type==='2'">
                <el-button @click="addChoice(form.items)">新增选项</el-button>
            </el-form-item>
            <!-- 单选题正确答案 -->
            <el-form-item label="正确答案" v-show="form.type==='1'">
                <el-radio-group v-model="form.single_answer">
                    <el-radio :label="item.sign" v-for="(item, index) in form.items"></el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 多选题正确答案 -->
            <el-form-item label="正确答案" v-show="form.type==='2'">
                <el-checkbox-group v-model="form.multiple_answer">
                    <el-checkbox :label="item.sign" v-for="(item, index) in form.items" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <!-- 填空题答案 -->
            <el-form-item :label="item.sign + '空 答案'" v-show="form.type==='3'" v-for="(item, index) in form.completion_answer">
                <el-input v-model="item.detail"></el-input>
                </el-input>
                <el-button @click.prevent="removeChoice(form.completion_answer, item)">删除</el-button>
            </el-form-item>
            <el-form-item v-show="form.type==='3'">
                <el-button @click="addChoice(form.completion_answer)">新增答案</el-button>
            </el-form-item>
            <el-form-item label="分数">
                <el-input v-model="form.score"></el-input>
            </el-form-item>
            <el-form-item label="难度">
                <el-input v-model="form.difficulty"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="onDestroy">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'topiccreate',
    data() {
        return {
            position: 'left',
            selectoptions: [{
                _id: '',
                name: ''
            }],
            form: {
                title: '',
                point_ids: [],
                type: '',
                single_answer: '',
                multiple_answer: [],
                completion_answer: [{
                    sign: 'A',
                    detail: ''
                }],
                items: [{
                    sign: 'A',
                    detail: ''
                }, {
                    sign: 'B',
                    detail: ''
                }, {
                    sign: 'C',
                    detail: ''
                }, {
                    sign: 'D',
                    detail: ''
                }],
                difficulty: '',
                score: ''
            },
            AZlist: []
        }
    },
    created() {
        function charcode() {
            let arr = [];
            for (var i = 65; i < 91; i++) {
                let charcode = String.fromCharCode(i);
                arr.push(charcode)
            }
            return arr
        }
        this.AZlist = charcode()
        this.$http.get('points').then(response => {
            this.selectoptions = response.body
        }, response => {
            this.$message.error('学科分类获取失败');
        });
    },
    methods: {
        onSubmit() {
            this.$http.post('topics', this.form).then(response => {
                this.$message({
                    message: '题目创建成功',
                    type: 'success',
                    showClose: true,
                    duration: 2300,
                    onClose: () => {
                        // return this.$router.go({name: 'topic'});                    
                    }
                });
            }, response => {
                console.log("response", response)
                this.$message.error('题目创建失败');
            });
        },
        onDestroy() {
            this.$router.go({
                name: 'topic'
            });
        },
        addChoice(items) {
            const length = items.length;
            const limit = length + 65;
            if (limit > 91) return
            let arr = [];
            for (var i = 65; i < 91; i++) {
                let charcode = String.fromCharCode(i);
                arr.push(charcode)
            }
            for (let j = 0; j < length; j++) {
                let choice = items[j].sign;
                let index = arr.indexOf(choice);
                if (index !== -1) {
                    arr.splice(index, 1)
                }
            }
            items.push({
                sign: arr[0],
                detail: ''
            })
            items.sort(function(a, b) {
                return a.sign > b.sign;
            })
        },

        removeChoice(items, item) {
            const index = items.indexOf(item)
            if (index === -1) return
            items.splice(index, 1)
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
</style>
