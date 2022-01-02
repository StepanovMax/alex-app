const brands = [
  {
    title: "BMW",
    slug: "bmw",
  },
  {
    title: "Mercedes Benz",
    slug: "mercedes-benz",
  },
]

const models= [
  {
    title: "X3",
    slug: "x3",
    brandSlug: 'bmw',
  },
  {
    title: "X4",
    slug: "x4",
    brandSlug: 'bmw',
  },
  {
    title: "A class",
    slug: "a-class",
    brandSlug: 'mercedes-benz',
  },
  {
    title: "B class",
    slug: "b-class",
    brandSlug: 'mercedes-benz',
  },
]

const complectations= [
  {
    title: "Basic X3",
    slug: "basic",
    modelSlug: 'x3',
    abs: false,
    signaling: false,
    airbags: false,
    airbagsCount: 0,
  },
  {
    title: "Premium X3",
    slug: "premium",
    modelSlug: 'x3',
    abs: false,
    signaling: false,
    airbags: true,
    airbagsCount: 1,
  },
  {
    title: "Basic X4",
    slug: "basic",
    modelSlug: 'x4',
    abs: false,
    signaling: true,
    airbags: true,
    airbagsCount: 1,
  },
  {
    title: "Premium X4",
    slug: "premium",
    modelSlug: 'x4',
    abs: true,
    signaling: true,
    airbags: true,
    airbagsCount: 2,
  },
  {
    title: "Basic A Class",
    slug: "basic",
    modelSlug: 'a-class',
    abs: false,
    signaling: true,
    airbags: true,
    airbagsCount: 1,
  },
  {
    title: "Premium A Class",
    slug: "premium",
    modelSlug: 'a-class',
    abs: true,
    signaling: true,
    airbags: true,
    airbagsCount: 2,
  },
  {
    title: "Basic B Class",
    slug: "basic",
    modelSlug: 'b-class',
    abs: false,
    signaling: true,
    airbags: true,
    airbagsCount: 1,
  },
  {
    title: "Premium B Class",
    slug: "premium",
    modelSlug: 'b-class',
    abs: true,
    signaling: true,
    airbags: true,
    airbagsCount: 2,
  },
]

export { brands, models, complectations }