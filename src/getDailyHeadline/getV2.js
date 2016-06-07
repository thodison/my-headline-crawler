import axios from '../utils/aaxios.js';

/**
* sample return: [{title:.., url:..},..]
*/
async function getV2() {
  const linkArray = [];
  const res = await axios.get("https://www.v2ex.com").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /item_hot_topic_title">\s*?<a\s*?href="(.*?)">(.*?)<\/a>/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {
    linkArray.push({
      url: `https://www.v2ex.com${regRes[1]}`,
      title: `${regRes[2]}`,
    });
  }

  console.log('v2 linkArray.length', linkArray.length);
  return linkArray;

}

export default getV2;
