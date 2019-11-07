const compareMinMax = (curr, min, max) =>
  curr > min ? (curr - min) / (max - min) : curr / max

const ratio = (curr, values) =>
  compareMinMax(curr, Math.min(...values), Math.max(...values))

export default (starship, related) => {
  const reduced = related.reduce(
    (acc, { node: s }) => ({
      cost: [...acc.cost, s.cost],
      crew: [...acc.crew, s.crew],
      maxAtmosphericSpeed: [...acc.maxAtmosphericSpeed, s.maxAtmosphericSpeed],
      maxMLPerHour: [...acc.maxMLPerHour, s.maxMLPerHour],
      hyperdriveRating: [...acc.hyperdriveRating, s.hyperdriveRating],
    }),
    {
      cost: [],
      crew: [],
      maxAtmosphericSpeed: [],
      maxMLPerHour: [],
      hyperdriveRating: [],
    },
  )
  return [
    {
      data: {
        crew: ratio(starship.crew, reduced.crew),
        cost: ratio(starship.cost, reduced.cost),
        maxAtmosphericSpeed: ratio(
          starship.maxAtmosphericSpeed,
          reduced.maxAtmosphericSpeed,
        ),
        maxMLPerHour: ratio(starship.maxMLPerHour, reduced.maxMLPerHour),
        hyperdriveRating: ratio(
          starship.hyperdriveRating,
          reduced.hyperdriveRating,
        ),
      },
    },
  ]
}
