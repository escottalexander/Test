// const https = require('https');


// https.get('https://slayapps.com', (resp) => {
//     let data = '';
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });
//     resp.on('end', () => {
//         console.log(data);
//     });

// }).on('error', (err) => {
//     console.log("Error: " + err.message);
// });

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    alert('Finished my homework');
}
doHomework('math', alertFinished);