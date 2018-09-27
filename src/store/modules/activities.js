import activityAPI from '../../api/activity';

const state = {
  activities: []
}

const mutations = {
  SET_ACTIVITIES(state, activities) {
    state.activities = activities
  }
}

const actions = {
  async getActivities({commit}) {
    const {data: activities} = await activityAPI.list();
    commit("SET_ACTIVITIES",activities)
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