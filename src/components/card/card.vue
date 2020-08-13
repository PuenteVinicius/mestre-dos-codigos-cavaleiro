<template lang="pug">
  div.card
    marvel-card-component.card__marvel(:class="marvelClass")
    button.card__button(:class="cardClass" @click="onCardClick" :disabled="card.selected")
      object(
        type="image/svg+xml" 
        :data="card.svgPath" 
        width="80" 
        height="80"
      ) 

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Card from "@/components/card/card.interface";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import MarvelCardComponent from '@/components/marvel-card.vue';
library.add(faUserSecret);
@Component({ components: { MarvelCardComponent } })
export default class CardComponent extends Vue {
  @Prop({ required: true, type: Object })
  private card!: Card;
  
  public onCardClick() {
    this.card.selected = !this.card.selected;
    this.sendCards();
  }

  public sendCards() {
    setTimeout(() => {
      this.$emit("cardSelected", this.card);
    }, 800);
  }

  public get cardClass(): string {
    return this.card.selected ? 'card__button--open': 'card__button--close';
  }

  public get marvelClass(): string {
    return this.card.selected ? 'card__marvel--open': 'card__marvel--close';
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/style/mixins.sass";
@import "../../assets/style/variables.sass";
@import "../../assets/style/breakpoints.sass";
.card
  position: relative
  margin: 10px
  width: $card-size
  height: auto
  @include desktop
    width: $card-size-desktop
    height: auto

  &__marvel
    transition: transform .5s
    backface-visibility: hidden
    transform-style: preserve-3d
    &--open
      background: $white
      @include box-shadow ($card-animation-size, $card-animation-color)
      -webkit-animation: openCard .4s ease
      animation: openCard .4s ease

    &--close
      @include box-shadow($card-shadow, $card-shadow)
      -webkit-animation: closeCard .4s ease
      animation: closeCard .4s ease

  &__button
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    border: none
    background-color: transparent
    perspective: 100%
    background: none
    transition: transform .5s
    backface-visibility: hidden
    transform-style: preserve-3d

    @include flex(column)
    @include box-shadow($card-shadow, $card-shadow)

    &:hover
      cursor: pointer
    i ,
    object
      pointer-events: none

    object
      display: none
    i
      font-size: 3rem
      @include desktop
        font-size: 1.5rem

    &--open
      background: $white
      @include box-shadow ($card-animation-size, $card-animation-color)
      -webkit-animation: openCard .4s ease
      animation: openCard .4s ease
      i
        display: none
      object
        display: block

    &--close
      @include box-shadow($card-shadow, $card-shadow)
      -webkit-animation: closeCard .4s ease
      animation: closeCard .4s ease
      i
        display: block
      object
        display: none

@keyframes openCard
  0%
    i
      display: block

    object
      display: none

    transform: rotateY(0deg)

  50%
    transform: rotateY(180deg)

  75%
    i
      display: none

    object
      display: block

  100%
    transform: rotateY(360deg)


@keyframes closeCard
  0%
    i
      display: none


    object
      display: block

    transform: rotateY(0deg)

  50%
    transform: rotateY(180deg)
    i
      display: block

    object
      display: none

  75%
    i
      display: block

    object
      display: none

  100%
    transform: rotateY(360deg)
</style>
