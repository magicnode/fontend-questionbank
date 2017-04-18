<template>
    <div class="paper-show">
        <el-card v-for="item in papers" class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">{{'试卷名:  ' + item.title}}</span>
            <el-button style="float: right;" type="primary">查看所有题目</el-button>
          </div>
          <div v-for="classify in item.classify" class="text item">
            {{'大题名字:  ' + classify.name }}
          </div>
        </el-card >
    </div>
</template>
<script>
export default {
    name: 'papershow',
    created() {
        this.$http.get('papers').then(response => {
            this.papers = response.body
        }, response => {
            this.$message.error('学科分类获取失败');
        });
    },
    data() {
        return {
            position: 'left',
            dialogFormVisible: false,
            papers: [{
                _id: '',
                title: '',
                classify: [{
                    name: '',
                    order: 0,
                    topic_id: []
                }]
            }]
        }
    },
    methods: {
        handleClick() {
            console.log()
        },
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.paper-show {
    padding: 20px 20px;
    .box-card {
        margin-bottom: 20px;
    }
}
</style>
