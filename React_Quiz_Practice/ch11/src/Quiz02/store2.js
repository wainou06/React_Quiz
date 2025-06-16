import { createStore } from 'redux'
import counterReducer2 from './counterReducer2' // 리듀서 파일에서 가져오기

const store2 = createStore(counterReducer2)

export default store2
