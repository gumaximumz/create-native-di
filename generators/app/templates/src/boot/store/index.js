import Api from './FetchAPI.js'
import Job from './job';

export default {
  JobStore: new Job(Api),
  
};