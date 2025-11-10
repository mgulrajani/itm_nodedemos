function fetchPage(page) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then(response => response.json());
  }

async function runPages() {
    try {
      const data1 = await fetchPage(1);
      console.log("Page 1:", data1);
  
      const data2 = await fetchPage(2);
      console.log("Page 2:", data2);
  
      const data3 = await fetchPage(3);
      console.log("Page 3:", data3);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      console.log("Finished fetching all pages");
    }
  }
  
  runPages();
  