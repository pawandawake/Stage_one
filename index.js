const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})

app.get('/api/', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const time= currentDate.toISOString().slice(0,currentDate.toISOString().length -2)+"Z";
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = daysOfWeek[currentDay];
  
res.json({
  "slack_name": slack_name,
  "current_day": currentDayName,
  "utc_time": time,
  "track": track,
  "github_file_url": "https://github.com/pawandawake/Stage1/blob/main/server.js",
  "github_repo_url": "https://github.com/pawandawake/Stage1",
  "status_code": 200 
  });
});

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})
