import { updateUI } from "./updateUI";

const sendData = async (url = '', data = {}) => {
    try {
        console.log(`DATA SENT TO SERVER`);
        fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ data })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('here is your data', res);
                updateUI(res);
            })
    } catch (e) {
        console.log(e);
    }
}

export { sendData }