const departments = async () => {
  const response = await fetch(
    "https://dummyproducts-api.herokuapp.com/api/v1/departments"
  );

  const data = await response.json();

  console.log(data);
};

departments();
