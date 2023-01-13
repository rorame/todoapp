import React, { Fragment } from 'react'
import Form from './Form';
import List from './List';

export default function DashBoard() {
  return (
    <div>
      <Fragment>
        <List />
        <Form />
      </Fragment>
    </div>
  )
}
