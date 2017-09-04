import axios from 'axios';
import Moment from 'moment';
import { key } from './secrets.js';


export function getStories(desk, offset, search) {
  // Create a date object and roll it back 7 days
  // Then use that 7 day marker as the begin_date for article search

  const lastWeek = Moment().subtract(7, 'days').format('YYYYMMDD');

  if (desk === '') {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section:Today's Headlines&sort=newest&page=${offset}&begin_date=${lastWeek}&api-key=${key}`)
    .then(response => response.data);
  }

  if (arguments.length === 2) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:${desk}&sort=newest&page=${offset}&begin_date=${lastWeek}&api-key=${key}`)
      .then(response => response.data);
  }

  else {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&sort=newest&page=${offset}&begin_date=${lastWeek}&api-key=${key}`)
    .then(response => response.data);
  }
};



