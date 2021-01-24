<template lang="pug">

  div.ranking
    h3.ranking__title Ranking
    div.ranking__list
      div.ranking__list-item
          span(id="name") Name 
          span(id="try") Tries
      ul.ranking__list(v-if="rankingList.lenght !== 0")
        li.ranking__list-item(v-for="user in rankingList") 
          span(id="name-list") {{ user.userName }}
          b(id="try-list") {{ user.userTries }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import User from "../user/user.entity";

@Component
export default class RankingComponent extends Vue {
  @Prop({ required: true, type: Array })
  private rankingList!: User[];
}
</script>

<style scoped lang="sass">
@import "../../assets/style/main.sass"

.ranking
  display: block
  width: 100vw
  height: $ranking-height
  margin-top: 5px
  border-radius: 0
  border: 1px solid $border-color
  background: $white
  color: $dark-green
  text-align: center
  overflow-y: auto

  +desktop()
    position: absolute
    width: 100%
    max-width: $ranking-width
    max-height: $ranking-desk-height
    right: 0
    bottom: 0
    min-height: 80px
    border-radius: 6px

  &__title
    font-size: 3rem
    margin-top: 50px

    +desktop()
      font-size: 1.2rem
      margin: 10px 0 10px 0

  &__list-item
    display: flex
    justify-content: space-between
    width: 90%
    span, b
      font-weight: bold

  &__list
    width: 100%
    +flex(column)
    justify-content: space-around

    li
      padding: .5rem 0 .5rem 0
      border-top: 1px solid $border-color
      &:first-child
        font-weight: bold

    &:last-child
      border-bottom: 1px solid $border-color

    span
      font-size: 3.1rem
      +desktop()
        font-size: 1.1rem

    b
      font-size: 3.2rem
      +desktop()
        font-size: 1.2rem

      color: $bold-text-color
</style>
