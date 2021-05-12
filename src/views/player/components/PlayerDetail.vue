<template>
  <div>
    <el-form ref="form" :model="playerForm">
      <el-form-item prop="accountname" label="账户名">
        <el-input v-model="playerForm.accountname"></el-input>
      </el-form-item>
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="playerForm.nickname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { defaultPlayerData, getPlayer, updataPlayer, createPlayer } from '@/api/players'

@Component
export default class player extends Vue {
  // 编辑模式
  @Prop({ default: false })
  isEdit!: boolean;

  // 数据模型：默认为空
  playerForm = Object.assign({}, defaultPlayerData);

  // 加载状态
  loading = false;

  // 根据isEdit状态决定是否需要获取玩家详情信息
  created() {
    // 编辑状态路由： player/edit/:id
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(parseInt(id))
    }
  }

  async fetchData(id: number) {
    try {
      const { data } = await getPlayer(id)
      this.playerForm = data.player
    } catch (error) {
      console.error(error)
    }
  }

  // 提交表单
  async submitForm() {
    this.loading = true

    try {
      if (this.isEdit) {
        await updataPlayer(this.playerForm.id, this.playerForm)
      } else {
        await createPlayer(this.playerForm)
      }

      this.$notify({
        title: '操作成功',
        message: '新增玩家数据成功',
        type: 'success',
        duration: 2000
      })

      this.loading = false
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
</style>