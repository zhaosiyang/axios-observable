import Axios from "../dist";

const subscription = Axios.get('https://google.ca').subscribe(response => console.log(response));
setTimeout(() => subscription.unsubscribe(), 10);

