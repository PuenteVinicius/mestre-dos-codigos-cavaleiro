<template lang="pug">
  section.board
    //- h1.board__game-title Puzzle
    //-   span Memory
    div(v-for="card in cards")
      card-component(:card="card" @cardSelected="updateBoard")
    tries-component(
      :tries="user.userTries"
    )
    ranking-component(
      :rankingList="rankingList"
    )
</template>

<script lang="ts">
import { Constants } from "@/constants";
import Card from "@/components/card/card.interface";
import User from "@/components/user/user.entity";
import CardsFactory from "@/factories/card.factory";
import UserFactory from "@/components/user/user.factory";
import CardComponent from "../components/card/card.vue";
import TriesComponent from "../components/tries/tries.vue";
import RankingComponent from "../components/ranking/ranking.vue";
import Swal from "sweetalert2";
import { Component, Vue } from "vue-property-decorator";
import HeroesService from "../services/heroes/heroes.service";

@Component({ components: { CardComponent, TriesComponent, RankingComponent } })
export default class Board extends Vue {
  selectedCards: Card[] = [];
  cards: Card[] = [];
  user: User = new User();
  rankingList: User[] = [];
  heroesService: HeroesService = new HeroesService();

  created() {
    this.heroesService.getAllHeroes().then(heroes => {
      this.cards = CardsFactory.heroesToCards(heroes);
      this.startGame();
      this.showCards();
    });
  }

  updateBoard(selectedCard: Card): void {
    this.selectedCards = CardsFactory.fillSelectedCards(
      this.selectedCards,
      selectedCard
    );

    if (this.selectedCards.length === Constants.CARDS_PEER_TRIE) {
      this.makeAtrie();
    }

    if (CardsFactory.isWinner(this.cards)) {
      this.endGame();
    }
  }

  makeAtrie(): void {
    this.user.addTrie();
    this.cards = CardsFactory.updateCards(this.selectedCards, this.cards);
    this.selectedCards = [];
  }

  endGame(): void {
    this.cards = CardsFactory.closeCards(this.cards);
    Swal.fire("Parábens você finalizou o jogo").then(() => {
      this.saveUser();
      this.user = new User();
      this.$router.push("/");
    });
  }

  saveUser(): void {
    this.rankingList.push(this.user);
    this.rankingList = UserFactory.orderRanking(this.rankingList);
    localStorage.setItem("rankingList", JSON.stringify(this.rankingList));
  }

  startGame(): void {
    this.setRankingList();
    this.user.saveUser(this.$router.currentRoute.params.userName);
  }

  showCards(): void {
    this.cards = CardsFactory.showCards(this.cards);
    setTimeout(() => {
      this.cards = CardsFactory.closeCards(this.cards);
    }, 5000);
  }

  setRankingList() {
    const rankingList = localStorage.getItem("rankingList");
    if (rankingList) {
      this.rankingList = JSON.parse(rankingList);
    }
  }
}
</script>

<style scoped lang="sass">
@import "../assets/style/main.sass"

.board
  width: 100%
  max-width: 900px
  height: min-content
  margin-bottom: 50px
  margin-top: 20px
  flex-wrap: wrap
  @include flex(wrap)
  &__game-title
    position: absolute
    display: block
    width: auto
    top: 50px
    text-transform: uppercase
    font-size: 4rem
    text-align: center
    span
      color: $dark-purple

  @include desktop
    max-width: 700px
    margin-bottom: unset
    margin-top: unset
</style>
