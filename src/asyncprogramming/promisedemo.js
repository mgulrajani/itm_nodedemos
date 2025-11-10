function fetchPage(page) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then(response => response.json());
  }
  
  // Promise chaining
  fetchPage(1)
    .then(data1 => {
      console.log("Page 1:", data1);
      return fetchPage(2);
    })
    .then(data2 => {
      console.log("Page 2:", data2);
      return fetchPage(3);
    })
    .then(data3 => {
      console.log("Page 3:", data3);
    })
    .catch(err => console.error("Error fetching data:", err))
    .finally(() => console.log("Finished fetching all pages"));
  

    