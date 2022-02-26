<template>
  <div class="contents">
    <div class="flex">
      <div class="img-wrapper">
        <img src="kaijou_header.png" class="header-img" />
      </div>
      <div v-if="placeToggle">
        <div class="map-btn-wrapper">
          <img
            src="kaijou_nihonchizu.png"
            class="map-btn"
            @click="changePlaceToggle"
          />
        </div>
      </div>
      <div v-else>
        <div class="map-btn-wrapper">
          <img
            src="kaijou_back.png"
            class="map-btn"
            @click="changePlaceToggle"
          />
        </div>
      </div>
    </div>
    <div v-if="placeToggle">
      <div class="card-position">
        <li
          v-for="place in placeList"
          :key="place.id"
          class="park-card"
          @click="goPlay"
        >
          <img :src="place.imageUrl" class="title-img" />
          <div>{{ place.name }}</div>
        </li>
      </div>
    </div>
    <div v-else>
      <h2 class="sub-header">目指せ全国制覇!!</h2>
      <img
        src="https://community.alteryx.com/t5/image/serverpage/image-id/167070iBB619376892CF7DA/image-size/medium?v=v2&px=400"
      />
    </div>
    <div class="btn-wrapper">
      <div class="back-btn" @click="backPage">
        <img src="kaijou_back.png" width="120px" height="50px" />
      </div>
      <div class="ranking-btn">
        <img
          src="kaijou_ranking.png"
          width="120px"
          height="50px"
          @click="goRanking"
        />
        <!-- <button class="ranking-btn" @click="goRanking">ランキング</button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  ref,
  onBeforeMount,
} from '@nuxtjs/composition-api'
// import { getFirestore, collection, doc } from 'firebase/firestore'
export default defineComponent({
  setup() {
    onBeforeMount(() => {
      // const docRef = doc(collection(getFirestore(), 'placelist'))
      // placeList.value = docRef
    })

    const router = useRouter()
    const goPlay = () => {
      router.push('/play')
    }
    const backPage = () => {
      router.push('/')
    }
    const goRanking = () => {
      router.push('/ranking')
    }
    type PlaceList = {
      id: number
      name: string
      imageUrl: string
    }
    // このplaceListがFireStoreから受け取れればOK
    const placeList = ref<PlaceList[]>([
      {
        id: 1,
        name: '近所の公園',
        imageUrl: 'park1.png',
      },
      {
        id: 2,
        name: '有名な公園',
        imageUrl: 'park2.png',
      },
      {
        id: 3,
        name: '大きな公園',
        imageUrl: 'park3.png',
      },
      {
        id: 4,
        name: '静かな公園',
        imageUrl: 'park4.png',
      },
      {
        id: 5,
        name: '緑な公園',
        imageUrl: 'park5.png',
      },
      {
        id: 6,
        name: '秘密の公園',
        imageUrl: 'park6.png',
      },
      {
        id: 7,
        name: '綺麗な公園',
        imageUrl: 'park7.png',
      },
      {
        id: 8,
        name: '昔遊んだ公園',
        imageUrl: 'park8.png',
      },
      {
        id: 9,
        name: '小さな公園',
        imageUrl: 'park9.png',
      },
    ])
    const placeToggle = ref<boolean>(true)
    const changePlaceToggle = () => {
      if (placeToggle.value === true) {
        placeToggle.value = false
      } else {
        placeToggle.value = true
      }
    }

    return {
      goPlay,
      backPage,
      goRanking,
      placeToggle,
      changePlaceToggle,
      placeList,
    }
  },
})
</script>

<style lang="scss" scoped>
.contents {
  text-align: center;
  background-color: yellow;
  overflow: hidden;
  li {
    list-style: none;
  }
  .flex {
    display: flex;
  }
  .img-wrapper {
    text-align: left;
    .header-img {
      width: 250px;
      height: 150px;
    }
  }
  .map-btn {
    width: 100px;
    height: 50px;
    padding-top: 90px;
  }

  .card-position {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 20px;
  }
  .park-card {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    .title-img {
      border-radius: 10px;
    }
  }
  .sub-header {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .btn-wrapper {
    justify-content: center;
    margin-bottom: 30px;
    display: flex;
    .back-btn {
      margin-top: 70px;
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: skyblue;
      color: white;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
    .ranking-btn {
      margin-left: 30px;
      margin-top: 70px;
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: skyblue;
      color: white;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.12em;
    }
  }
}
</style>
