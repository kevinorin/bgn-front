export const getAddress = (latitude, longitude) => {
    if (!latitude || !longitude) return;
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();

        const method = 'GET';
        const url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true&key=AIzaSyAEy8jluSZjZk8SGq9PgQuPN4Ufws0enGA';
        console.log('Testing the MAP', url);
        const async = true;

        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    const data = JSON.parse(request.responseText);
                    const address = data.results[0];
                    resolve(address);
                }
                else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
};

export const updateC = (ev) => {
    if (!ev) return null;
    const val = (+ev * 9 / 5 + 32).toFixed(2)
    if (val > 0) return `+${val}°F`
    else return `-${val}°F`;
};