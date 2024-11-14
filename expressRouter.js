const express = require('express');
const app = express();

const userRoutes = require('./userRoute');


app.use('/users', userRoutes);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
