<template lang="pug">
  div.tries
    h3.tries__title Tries
    span.tries__text {{ tries || 0 }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class TriesComponent extends Vue {
  @Prop({ required: true, type: Number })
  private tries!: number;
}
</script>

<style scoped lang="sass">
@import "../../assets/style/main.sass"

.tries
  position: relative
  width: 100vw
  height: $tries-height
  top: 0
  left: 0
  border: 1px solid $border-color
  background: $white
  font-size: 3.5rem
  color: $blue
  font-weight: 600
  text-align: center
  border-radius: 0
  @include flex(column)

  @include desktop
    position: absolute
    max-width: $tries-desk-size
    height: $tries-desk-size
    border-radius: 6px
    font-size: 1.4rem
</style>
