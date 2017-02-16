<template>
  <div class="source">
    <el-form ref="form" :label-position="left" :model="form" label-width="80px">
        <el-form-item label="试题类">
            <el-select v-model="form.region" placeholder="请选择试题种类">
                <el-option label="单选题" value="1"></el-option>
                <el-option label="多选题" value="2"></el-option>
                <el-option label="填空题" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="试题内容">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="单选题选项">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>

        <el-form-item>
            <el-button @click="addChoice">新增选项</el-button>
        </el-form-item>
        <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
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
    data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.source{
  padding: 24px;
  text-align: center;
  width: 40%;
}
.source form {
}
</style>
