import activityAPI from '../../api/activity';
import moment from 'moment';
const state = {
  activities: []
}
const getDateActivities = (activity) => {
  const [hourStart,minuteStart] = activity.hour_initial.split(':');
  const [hourEnd,minuteEnd] = activity.hour_end.split(':');
  const start = moment(activity.date).hour(hourStart).minute(minuteStart);
  const end = moment(activity.date).hour(hourEnd).minute(minuteEnd);
    return {
      title: activity.title,
      start,
      end,
      editable: false,
      url:'https://fullcalendar.io/docs/event-object'
    }
}

const mutations = {
  SET_ACTIVITIES(state, activities) {
    state.activities = activities;
  }
}

const actions = {
  async getActivities({commit}) {
    const {data: activitiesData} = await activityAPI.list();
    const activities = activitiesData.data.map(getDateActivities);
    commit("SET_ACTIVITIES",activities)
    // return activities;
  }
}

const getters = {
  getActivities: state => state.activities
}

export default {
  state,
  actions,
  mutations,
  getters
}