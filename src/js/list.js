import React from 'react'
import ReactDOM from 'react-dom'
export default class Add extends React.Component {
    del(){

    }
    render() {
        let comment = this.props.list;
        return (
            <div>
                <div className="rightNav">
                    
                    <ul className="list-group">
                        {
                            comment.map((item,index) => {
                                return <li key = {index} className="list-group-item">
                                    {item.username}：{item.comment}
                                    <span className="delete" onClick={this.del.bind(this)}>删除</span>
                                    </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
