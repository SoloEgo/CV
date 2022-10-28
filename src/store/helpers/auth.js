import firebase from 'firebase/compat/app'

export default {
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            try {
                console.log('login')
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async register({ dispatch, commit }, { email, password, name }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    uid: uid,
                    name: name,
                    email: email
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logoutUser({ dispatch, commit }) {
            try {
                await firebase.auth().signOut()
                commit('clearInfo')
                console.log('logout')
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
    }
}