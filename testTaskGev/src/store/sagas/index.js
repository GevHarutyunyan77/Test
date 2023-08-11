import {all, fork} from 'redux-saga/effects'

import app from './app'

export default function* watchers(){
  yield all([
      app
  ].map(fork))
}
