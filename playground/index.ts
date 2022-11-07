import Axios from "../dist";

Axios.get('https://google.ca').subscribe(response => console.log(response));