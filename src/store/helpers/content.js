import firebase from 'firebase/compat/app'

export default {
    actions: {
        async fetchWorkExperience({ dispatch, commit }) {
            try {
                let records = await (await firebase.database().ref(`/workExperience`).once('value')).val()
                const result = Object.keys(records).map(key => ({ ...records[key], id: key }))
                return result
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async addNewRecord({ dispatch, commit }, formData) {
            try {
                console.log('formData', formData)
                return await firebase.database().ref(`/workExperience`).push(formData)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async fetchAllSkills({ dispatch, commit }) {
            try {
                let records = await (await firebase.database().ref(`/skills`).once('value')).val()
                const result = Object.keys(records).map(key => ({ ...records[key], id: key }))
                return result
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}