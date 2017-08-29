import axios from 'axios';

export function getStories(desk, offset, search) {
  // Create a date object and roll it back 7 days
  // Then use that 7 day marker as the begin_date for article search
  Date.prototype.yyyymmdd = function() {
    var mm = (this.getMonth() + 1).toString();
    var dd = (this.getDate()-7).toString();
    return [this.getFullYear(), mm.length===2 ? '' : '0', mm, dd.length===2 ? '' : '0', dd].join('');
  };

  var date = new Date();
  var lastWeekTodayString = date.yyyymmdd();

  if (desk === '') {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section:Today's Headlines&sort=newest&page=${offset}&begin_date=${lastWeekTodayString}&api-key=a8457610b68381085a3fff38d6a36337:6:74255139`)
    .then(response => response.data);
  }

  if (arguments.length === 2) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:${desk}&sort=newest&page=${offset}&begin_date=${lastWeekTodayString}&api-key=a8457610b68381085a3fff38d6a36337:6:74255139`)
      .then(response => response.data);
  }

  else {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&sort=newest&page=${offset}&begin_date=${lastWeekTodayString}&api-key=a8457610b68381085a3fff38d6a36337:6:74255139`)
    .then(response => response.data);
  }
};



