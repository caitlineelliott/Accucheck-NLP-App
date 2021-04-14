function checkURL(userURL) {
    try {
        let url = new URL(userURL);
        let validURL = url.href;
        return validURL;
    }
    catch (e) {
        alert('Invalid URL!');
        console.log('ERROR, INVALID URL:', e);
        return false;
    }
}

export { checkURL }