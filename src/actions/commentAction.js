import appDispathcer from '../dispatcher'

const commentAction = {
  submit() {
    appDispathcer.dispatch({
      type: 'SUBMIT'
    })

    fetch('./submit.json')
      .then((res) => res.json())
      .then(result => result.data
        ? this.getList()
        : '')
  },
  getList() {
    appDispathcer.dispatch({
      type: 'GET_LIST'
    })

    fetch('./list.json')
      .then((res) => res.json())
      .then(result => result.data
        ? appDispathcer.dispatch({
            type: 'GET_LIST_SUCCESS',
            payload: {
              comment: result.data
            }
          })
        : '')
  }
}

export default commentAction