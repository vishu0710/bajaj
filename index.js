npm install
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
app.get('/bfhl', (req, res) => {
    const response = {
        "operation_code": 1
    }
    res.send(response);
});
app.post('/bfhl', (req, res) => {
    var tempData = req.body.data;
    var isAlpha = [];
    var isNum = [];
    for(data in tempData) {
        if (isCharacterALetter(tempData[data])) {
            isAlpha.push(tempData[data]);
        } else {
            isNum.push(tempData[data]);
        }
    }
    var highAlpha = [];
    for(data in isAlpha) {
        if (highAlpha == undefined) {
            highAlpha.push(isAlpha[data]);
        } else if (highAlpha < isAlpha[data]) {
            highAlpha.push(isAlpha[data]);
        }
    }
    const response = {
        "is_success": true,
        "user_id": "vg0233", "email": "vg0233@srmist.edu.in",
        "roll_number": "RA2011027010020",
        "numbers": isNum,
        "alphabets": isAlpha,
        "highest_alphabet": highAlpha
    }
    res.send(response);
    console.log(isAlpha);
    console.log(isNum);
    console.log(highAlpha);
    res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
