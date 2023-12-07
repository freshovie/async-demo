async function fetchDataFromApi() {
  const res = await fetch('https://countriesnow.space/api/v0.1/countries/currency');
  const json = await res.json();
  console.log(json)
}

async function init() {
    await fetchDataFromApi();
    console.log('Finished fetching data');
}

init();


  
    
    
    