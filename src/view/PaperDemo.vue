<template>
    <div class="paper-show">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">试卷名:  大一下学期历史试题(一)</span>
            <el-button style="float: right;" type="primary">查看所有题目</el-button>
          </div>
          <div class="papertext">
            <p>
              第一大题: 选择题
            </p>
            <div class="item">
             1. 武则天历经几朝？
              <el-radio class="radio" v-model="radio" label="1">3</el-radio>
              <el-radio class="radio" v-model="radio" label="2">2</el-radio>
              <el-radio class="radio" v-model="radio" label="2">4</el-radio>
              <el-radio class="radio" v-model="radio" label="2">5</el-radio>
            </div>
            <div class="item">
             2. 徽剧与汉剧相互融合，兼收昆曲、秦腔以及其他民间曲调的唱腔、剧目和表演方式，形成了一个新剧种：
              <el-radio class="radio" v-model="radio" label="1">黄梅戏</el-radio>
              <el-radio class="radio" v-model="radio" label="2">元杂剧</el-radio>
              <el-radio class="radio" v-model="radio" label="2">京剧　</el-radio>
              <el-radio class="radio" v-model="radio" label="2">粤剧</el-radio>
            </div>
            <div class="item">
             3. 1925年初，土耳其改革者发动对旧式礼拜帽的批判，引起了社会上得强烈不满，但欧式帽还是在土耳其流行起来。在百姓中最流行的是鸭舌帽，因为在做礼拜时可以把帽舌反过来朝后戴，前额依旧可以贴在地上。这种现象反映了  
              <el-radio class="radio" v-model="radio" label="1">现代与传统之间的一种妥协</el-radio>
              <el-radio class="radio" v-model="radio" label="2">现代是假，传统是真</el-radio>
              <el-radio class="radio" v-model="radio" label="2">传统是假，现代是真</el-radio>
              <el-radio class="radio" v-model="radio" label="2">百姓被迫戴鸭舌帽</el-radio>
            </div>
            <div class="item">
             4. 宗法制将“国”与“家”结合在一起，其结合点主要是
              <el-radio class="radio" v-model="radio" label="1">以嫡长子继承制为核心，保障周王的权威和政治隶属关系</el-radio>
              <el-radio class="radio" v-model="radio" label="2">以家族的分配继承制度，保障各级贵族的世卿世禄特权</el-radio>
              <el-radio class="radio" v-model="radio" label="2">以血缘亲属确立土地、财产、权力的继承，保障国家的内部稳定</el-radio>
              <el-radio class="radio" v-model="radio" label="2">以宗法制保障权力和财产的再分配，从而稳定各级贵族的统治</el-radio>
            </div>
          </div>
        </el-card >
    </div>
</template>
<script>
export default {
    name: 'paperdemo',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.paper-show {
    padding: 20px 20px;
    .box-card {
        margin-bottom: 20px;
    }
}
.papertext {
    .item {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        text-align: left;
    }
    .el-radio {
        padding: 1rem;
        margin-left: 0;
    }
}
</style>
