import express from 'express';

import routes from './routesdemo1';

// Middleware to parse JSON
app.use(express.json());

// Mount the router
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
