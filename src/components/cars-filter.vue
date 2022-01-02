<script>
import { brands, models, complectations } from '@/data/cars'
import BaseRadio from '@/components/base-radio.vue'

export default {
  name: 'CarsFilter',
  components: {
    BaseRadio,
  },
  data() {
    return {
      selectedBrand: null,
      selectedModel: null,
      selectedComplectation: null,
      carsBrands: brands,
      carsModels: models,
      carsComplectations: complectations,
    }
  },
  methods: {
    changeCheckedBrands(newValue) {
      this.carsBrands = this.carsBrands.map(
        item => {
          if (item?.slug === newValue?.slug) {
            item.checked = true
          } else {
            item.checked = false
          }
          return item
        }
      )
    },
    changeCheckedModels(newValue) {
      this.carsModels = this.carsModels.map(
        item => {
          if (item?.slug === newValue?.slug) {
            item.checked = true
          } else {
            item.checked = false
          }
          return item
        }
      )
    },
    // Filter models depends on selected brand
    filterModels(brand) {
      if (brand && brand.slug) {
        this.carsModels = models.filter(
          item => {
            item.checked = false
            return item.brandSlug === brand.slug
          }
        )
      }
    },
    clearSelectedModel() {
      // Clear selected model
      this.selectedModel = null
      // Uncheck all the model's radio buttons
      this.carsModels = this.carsModels.map(
        item => {
          item.checked = false
          return item
        }
      )
    },
    clearCheckedModels() {
      this.carsModels = this.carsModels.map(
        item => {
          item.checked = false
          return item
        }
      )
    },
    // Filter complectations depends on selected model
    filterComplectations(model) {
      if (model && model.slug) {
        this.carsComplectations = complectations.filter(
          item => item.modelSlug === model.slug
        )
      }
    },
    clearSelectedComplectation() {
      // Clear selected complectation
      this.selectedComplectation = null
    },
    clearCheckedComplectations() {
      // Uncheck all the complectation's radio buttons
      this.carsComplectations = this.carsComplectations.map(
        item => {
          item.checked = false
          return item
        }
      )
    },
    changeCheckedComplectations(newValue) {
      this.carsComplectations = this.carsComplectations.map(
        item => {
          if (item?.slug === newValue?.slug) {
            item.checked = true
          } else {
            item.checked = false
          }
          return item
        }
      )
    },
  },
  watch: {
    // Watch the brand and filter models on changes
    selectedBrand(newValue) {
      this.clearSelectedModel()
      this.changeCheckedBrands(newValue)
      this.clearSelectedComplectation()
      this.filterModels(this.selectedBrand)
      // this.clearCheckedModels()
    },
    // Watch the model and filter complectations on changes
    selectedModel(newValue) {
      this.changeCheckedModels(newValue)
      this.clearCheckedComplectations()
      this.clearSelectedComplectation()
      this.filterComplectations(this.selectedModel)
    },
    // Watch the model and filter complectations on changes
    selectedComplectation(newValue) {
      this.changeCheckedComplectations(newValue)
    },
  },
  computed: {
    // The case when all of the filters has been selected
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

            <div
              v-if="selectedBrand && carsModels"
            >
              <base-radio
                v-for="(option, key) in carsModels"
                :option="option"
                :key="key"
                :option-index="key"
                group-name="cars-models"
                @pick="val => selectedModel = val"
              />
            </div>

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

            <pre>
              carsBrands {{ carsBrands }}
            </pre>

            <pre>
              carsModels {{ carsModels }}
            </pre>

            <pre>
              carsComplectations {{ carsComplectations }}
            </pre>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>