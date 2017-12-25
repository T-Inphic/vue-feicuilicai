<template>
  <div>
    <mu-dialog :open="dialog.dialog" title="提示" @close="close">
      {{dialog.text}}
      <mu-flat-button slot="actions" v-if="dialog.cancel" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'alert',
  computed: {
    dialog: {
      get: function() {
        return this.$store.getters.dialog
      },
      set: function() {
        
      }
    }
  },
  methods: {
    close () {
      this.dialog = this.$store.dispatch('changeDialog',{dialog: false})
    }
  }
}
</script>