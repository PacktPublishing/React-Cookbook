import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './List.css';

const List = props => (
  <ul>
    <ReactCSSTransitionGroup transitionName="todo" transitionAppear={true}>
      {props.items.map((item, key) => (
        <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
          {item.task}

          <div className="actions">
            <span className={item.completed ? 'hide' : 'done'} onClick={() => props.markAsCompleted(item.id)}>
              <i className="fa fa-check"></i>
            </span>

            <span className="trash" onClick={() => props.removeTask(item.id)}>
              <i className="fa fa-trash"></i>
            </span>
          </div>
        </li>
      ))}
    </ReactCSSTransitionGroup>
  </ul>
);

export default List;
