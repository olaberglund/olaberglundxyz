const Program = {
  current: true,
  createdAt: "21-02-11 10:00",
  name: "Call of Booty",
  daysPerWeek: "3",

  days: {
    byId: {
      "d1": {
        id: "d1",
        schemes: [{ exercise: "squat", sets: '3', reps: '5', rpe: '8' }, /* ... */]
      },
      "d2": {
        id: "d2",
        schemes: [{ exercise: "squat", sets: '3', reps: '5', rpe: '8' }, /* ... */]
      }
      // ...
    },
    allIds: ["d1", "d2", /* ... */]
  },
}
