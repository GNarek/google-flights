function CityMapper() {
  const cityToSkyId = (city: string) => {
    const cityToSkyId: Record<string, string> = {
      London: "LOND",
      "New York": "NYCA",
      // Add more cities as needed
    };

    return cityToSkyId[city];
  };

  const cityToEntityId = (city: string) => {
    const cityToEntityId: Record<string, string> = {
      London: "27544008",
      "New York": "27537542",
      // Add more cities as needed
    };

    return cityToEntityId[city];
  };

  return { cityToSkyId, cityToEntityId };
}

const cityMapper = CityMapper();

export { cityMapper };
