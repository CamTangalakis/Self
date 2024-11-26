const searchDistricts = async (term, state) => {
  const result = await fetch(
    `https://api.schooldigger.com/v2.0/districts?st=${state}&q=${term}&appID=5d1bac41&appKey=c5356291905848156e2c640bbad10c9c`
  )
    .then((res) => res.json())
    .catch((err) => console.log("Error fetching districts: " + err));

  return result;
};

const searchSchools = async (term, state) => {
  const result = await fetch(
    `https://api.schooldigger.com/v2.0/autocomplete/schools?q=${term}&st=${state}&appID=5d1bac41&appKey=c5356291905848156e2c640bbad10c9c`
  )
    .then((res) => res.json())
    .catch((err) => console.log("Error fetching schools: " + err));
  return result;
};

export { searchDistricts, searchSchools };
