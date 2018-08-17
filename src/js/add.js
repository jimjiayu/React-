import React from 'react'
import ReactDOM from 'react-dom'
export default class Add extends React.Component{

    addList(){
      var username = this.refs.username.value;
      var comment = this.refs.comment.value;
      if (username == '' || comment == ''){
          alert("请输入内容必须完整！")
          return false;
      }
      var obj = {username,comment}
      this.props.getComment(obj)
      //清空输入框
      this.refs.username.value = ""
      this.refs.comment.value = ""
    }
    render(){
        return (
            <div>
                <div className="leftNav">
                     <p>
                         <label>用户名：</label><br/>
                         <input ref="username" type="text" className="form-control"></input>
                     </p>
                     <p>
                         <label>评论：</label><br />
                         <input ref="comment" type="text" className="form-control"></input>
                     </p>
                     <button type="button" onClick= {this.addList.bind(this)} className="btn btn-primary">提交</button>
                </div>
                
            </div>
            
        )
    }
}
