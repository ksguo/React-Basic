
import './index.css'

//项目的根组件 一切组件的根
// app ->index.js->public->index.html



/* usestate基础使用，数据驱动 hook函数

实现一个计数按钮
*/
import {useState} from "react";

/*
修改状态的规则：状态是只读的，不是修改而是替换
setcount（count +1）而不是count ++

修改对象状态也是始终用set来传递新对象
 */

//行内样式控制
const style2  ={
    color:'red',
    fontSize:'30px'
}




//基础事件绑定 语法： on+事件名称 = {事件处理程序} 整体遵循驼峰命名法
const handleClick = ()=>{
    console.log('button 被点击了')
}

//如何获取事件对象e
const handleClick2 = (e)=>{
    console.log('button 被点击了',e)
}
//传递自定义参数
const handleClick3 = (name)=>{
    console.log('button 被点击了',name  )
}

//传递自定义参和事件对象e
const handleClick4 =(name,e) => {
    console.log('button 杯点击了',name,e)
}


//复杂条件渲染：自定义函数+if语句

//定义文章类型
const articleType  = 1
//定义自定义函数

function getArticleType(){
    if(articleType === 0){
        return <div>我是无图模式</div>
    }
    else if(articleType === 1){
        return <div>我是单图模式</div>
    }else{
        return <div>我是三图模式</div>
    }


}





//jsx的条件渲染，比如isLogin true就返回spike false就返回请登录
//一般用&& 或者三元运算符号 ？：
const isLogin = false

//map schleife
const list = [
    {id: 1001,name : 'Vue'},
    {id: 1002,name : 'React'},
    {id: 1003,name : 'Angular'}
]

const count = 100 // variable in js


//function in js
function  getName(){
    return "spike"
}

function App() {

    //1.调用usestate添加一个状态变量
    //count 就是状态变量。setcount就是修改状态变量的方法
    const [count2 , setCount] = useState(0)

    //点击事件回调函数
    const handelClick5 = ()=> {
        setCount(count2+1)
    }

    //修改对象状态
    const [form ,setForm] = useState({name:'spike'})
    const changeForm = ()=>{
        setForm({
            ...form,
            name:'faye'
        })

    }
  return (
      <div className="App">
          this is title
          {/*use jsx for javascript */}

          {/* use '' transform string */}
          {'this is message '}
          {/* identify variable*/}
          {count}
          {/*function  call*/}
          {getName()}
          {/*method call*/}
          {new Date().getDate()}

          {/*use js object */}
          <div style={{color: 'red'}}> js object</div>

          {/* jsx实现列表渲染：使用js的map方法循环渲染*/}
          {/*注意要加key：可以是字符串或number；map循环哪个结构return那个结构*/}

          <ul>
              {list.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>


          {/*逻辑与 && isLogin true 则显示 false就不显示*/}
          {isLogin && <span>this is spann</span>}

          {/*三元运算*/}
          {isLogin ? <span> spike </span> : <span>loading....</span>}

          {/*复杂条件渲染*/}
          {getArticleType()}

          <button onClick={handleClick}>click me</button>
          <button onClick={handleClick2}>click me2</button>

          <button onClick={() => handleClick3('spike')}>click me3</button>
          <button onClick={(e) => handleClick4('spike',e)}>click me4</button>

          {/*状态变量*/}

          <button onClick={handelClick5}>{count2}</button>
          {/*状态对象*/}
          <button onClick={changeForm}>change Form {form.name}</button>

          {/*行内样式控制*/}
          <span style={{color:'blue',fontSize:'50px'}}>行内样式控制</span>

          <span style={style2}>行内样式控制2</span>

          {/*通过class类名控制*/}
          <span className="foo">类名控制</span>


      </div>
  );
}

export default App;
