function fetchPage(page) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then(response => response.json());
  }

async function runManyPages(totalPages) {
    try {
      for (let i = 1; i <= totalPages; i++) {
        const data = await fetchPage(i);
        console.log(`Page ${i}:`, data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  
  runManyPages(5); // Try with 5 pages
  