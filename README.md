-------------- SETUP REDUX
// set up redux done
//state
//reducer: nó chỉ lá 1 function, chuysen đổi từ state cũ sang state mới thông qua action (khong phai 1 reducer qly nhieu state, minh sẽ ra nhieu reducer)
//store
Với Class component dùng HOC :: connect()
Với function component : hooks dùng useDispatch(), useSelector()

- install react-redux redux
- combineReducer quản lý các reducer lại với nhau,mõi reduer quản lý 1 state riêng và tập hợp cac1c state(reducer) thành 1 state lớn
  chứ khog6 phải 1 reducer mà quản ly nhiều state nhé

# Làm việc Redux với Hooks

useSelector() // strict comparion chứ k phải shallow comparision
useDispatch()

1. Setup Redux Store
   Reducer & Root Reducer(tong họp reducer, combineReducers({}): tong hop reducer)
   Store
   Action creator (1 hảm nhận vào 1 tham so rồi tạo ra 1 action object)

2.Setup redux provider (muon setup redux store này o bat ki noi nao)
Allow redux store to be asseccible from everywhere of the app
react-redux: giup ban ket nối vào ben trong redux từ react

3.Connect to redux store for component
Using the two hooks

## -- npm i --save casual : random data mock : chỉ sài trên server

## useSelector. useDispatch: react redux (homepage)
