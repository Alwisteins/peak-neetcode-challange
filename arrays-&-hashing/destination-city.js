function destCity(paths) {
  const destinations = new Map();

  for (let i = 0; i < paths.length; i++) {
    destinations.set(paths[i][0], paths[i][1]);
  }

  for (let value of destinations.values()) {
    if (!destinations.has(value)) {
      return value;
    }
  }
}
