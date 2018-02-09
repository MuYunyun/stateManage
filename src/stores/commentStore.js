import { EventEmitter } from 'events'
import appDispathcer from '../dispatcher'

let comments = []

const CommentStore = Object.assign({}, EventEmitter.prototype, {
  getComment() {
    return comments
  },

  emitChange() {
    this.emit('change')
  },

  addListener(callback) {
    this.on('change', callback)
  }
})

appDispathcer.register((action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case 'GET_LIST_SUCCESS': {
      comments = action.payload.comment
      CommentStore.emitChange()
    }
  }
})

export default CommentStore