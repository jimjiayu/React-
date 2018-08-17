import React from 'react'
import ReactDOM from 'react-dom'
import Add from './add'
import List from './list'
export default class App extends React.Component{
    constructor() {
        super()
        this.data = [
            {username:"张三",comment:"第一天"},
            {username:"张三",comment:"第一天"},
            {username:"张三",comment:"第一天"},
            {username:"张三",comment:"第一天"},
        ];
    }
    getComment(event){
       this.data.unshift(event)
    //    更新最新的状态
       this.setState(this.data)
    }
    render(){
        return (
            <div>
                <Add getComment={this.getComment.bind(this)}></Add>
                <List list = {this.data}></List>
            </div>
            
        )
    }
}
