import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1/brazil'
  // baseURL: 'https://labs.wesleycota.com/covid19br/json/last_day_info.json'
  baseURL: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi',
});

export default api;