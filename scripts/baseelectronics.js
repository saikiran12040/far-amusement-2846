import {navbar} from '../components/navbar.js'

//import {navbar} from './components/navbar.js'

let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

import { sort, last, footer } from "../components/footer.js";
const sort_div = document.getElementById("footer");
sort_div.innerHTML = sort();
footer();

const last_div = document.getElementById("last_portion");
last_div.innerHTML = last();

