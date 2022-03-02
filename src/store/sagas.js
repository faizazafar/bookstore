import { call , all , put , takeLatest, takeEvery } from 'redux-saga/effects'
import * as api from './api'
import * as actions from './actions'


function* getPosts(action)
{
    try {
    console.log("getposts")
    const {data} = yield api.getPosts();
    // destructure data 
    yield put ( actions.getPostsSuccess(data))
    console.log(data)
    }
    catch(e){

    yield put(actions.getPostsFailure('error', e))
     

    }

    //apicall
}

function* getComments()
{
    console.log("getcomments")
    const data = yield api.getComments();
    console.log(data)

    //apicall
}


function* watchGetPost(){

    console.log('watchgetpost')
    yield takeLatest('GET_POST', getPosts)
    //    yield takeLatest('actiontype', getPosts)


    // yield jao yh kaam kro 

}


function* watchGetComment(){

    console.log('watchgetcomment')
    yield takeLatest('GET_COMMENT', getComments)
    //    yield takeLatest('actiontype', getPosts)


    // yield jao yh kaam kro 

}

function* getBooks(action){

    try {
        const {data} = yield api.getBooks();
        console.log(data);
        yield put(actions.getBooksSuccess(data));
     } catch (e) {
        yield put(actions.getBooksFailure('error',e));
     }
   }
   


function* watchGetBooks(){

    yield takeLatest('GET_BOOKS', getBooks)
    //    yield takeLatest('actiontype', getPosts)


    // yield jao yh kaam kro 

}
export default function* rootSaga() {

    yield all([

        // all watcher func
        watchGetPost(), watchGetComment(),
        watchGetBooks()
    ])
}