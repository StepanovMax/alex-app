<script>
import { brands, models, complectations } from '@/cars'
import BaseRadio from './components/base-radio.vue'

export default {
  name: 'CarsFilter',
  components: {
    BaseRadio,
  },
  data() {
    return {
      test: null,
      selectedBrand: null,
      selectedModel: null,
      selectedComplectation: null,
      carsBrands: [],
    }
  },
  methods: {
    getBrands(array) {
      return array.map(
        item => item
      )
    },
    getModels(array, brand) {
      let newArray = []
      if (brand && brand.slug) {
        newArray = array.filter(
          item => {
            return item.brandSlug === brand.slug
          }
        )
      }
      return newArray
    },
    getComplectations(array, model) {
      let newArray = []
      if (model && model.slug) {
        newArray = array.filter(
          item => {
            return item.modelSlug === model.slug
          }
        )
      }
      return newArray
    },
    clearSelectedComplectation() {
      this.selectedComplectation = null
    },
    clearSelectedModel() {
      this.selectedModel = null
    },
  },
  watch: {
    selectedBrand() {
      this.clearSelectedModel()
      this.clearSelectedComplectation()
    },
    selectedModel() {
      this.clearSelectedComplectation()
    },
  },
  computed: {
    carsBrands() {
      return this.getBrands(brands)
    },
    carsModels() {
      return this.getModels(models, this.selectedBrand)
    },
    carsComplectations() {
      return this.getComplectations(complectations, this.selectedModel)
    },
    selectedAll() {
      return this.selectedBrand && this.selectedModel && this.selectedComplectation
    },
  },
}
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <div class="mb-10">
          <h1 class="h1">
            Фильтр автомобилей
          </h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-3">
        <h2 class="badge bg-primary text-wrap">
          Фильтр
        </h2>
        <form>

          <div class="mb-3">
            <h3 class="h5">
              Марка авто
            </h3>

            <base-radio
              v-for="(option, key) in carsBrands"
              :option="option"
              :key="key"
              :option-index="key"
              group-name="cars-brands"
              @pick="val => selectedBrand = val"
            />
          </div>

          <div class="mb-3">
            <h3 class="h5">
              Модель авто
            </h3>

            <base-radio
              v-for="(option, key) in carsModels"
              :option="option"
              :key="key"
              :option-index="key"
              group-name="cars-models"
              @pick="val => selectedModel = val"
            />

          </div>

          <div
            class="mb-3"
            v-if="selectedBrand"
          >
            <h3 class="h5">
              Комплектация авто
            </h3>

            <div v-if="selectedModel">
              <base-radio
                v-for="(option, key) in carsComplectations"
                :option="option"
                :key="key"
                :option-index="key"
                group-name="cars-complectations"
                @pick="val => selectedComplectation = val"
              />
            </div>

          </div>

        </form>
      </div>

      <div class="col col-9">
        <div class="">
          <h2 class="badge bg-primary text-wrap">
            Комплектация
          </h2>

          <div
            class="mb-3"
            v-if="selectedAll"
          >

            <h2 class="">
              {{ selectedComplectation.title }}
            </h2>

            <ul class="list-group">
              <li class="list-group-item">
                Антиблокировочная система {{ selectedComplectation.abs ? 'есть.' : 'отсутствует.' }}
              </li>
              <li class="list-group-item">
                Противоугонная система {{ selectedComplectation.signaling ? 'есть.' : 'отсутствует.' }}
              </li>
              <li class="list-group-item">
                Подушки безопасности {{ selectedComplectation.airbags ? 'есть' : 'отсутствуют.' }}
                <span
                  v-if="selectedComplectation.airbags"
                >
                  в количестве {{ selectedComplectation.airbagsCount }}
                </span>
              </li>
            </ul>

          </div>

          <div
            v-if="true"
          >
            <div
              class=""
            >
              carsBrands: {{ carsBrands }}
            </div>
            <hr>
            <div
              class=""
            >
              selectedBrand: {{ selectedBrand }}
            </div>
            <hr>
            <div
              class=""
            >
              carsModels: {{ carsModels }}
            </div>
            <hr>
            <div
              class=""
            >
              selectedModel: {{ selectedModel }}
            </div>
            <hr>
            <div
              class=""
            >
              carsComplectations: {{ carsComplectations }}
            </div>
            <hr>
            selectedComplectation: {{ selectedComplectation }}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>