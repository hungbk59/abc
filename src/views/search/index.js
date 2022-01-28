// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import SearchComponent from './SearchComponent'
import TableExpandable from './TableExpandable'
// import TableBasic from './TableBasic'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Tables = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <SearchComponent/>
        </Col>
        <Col sm='12'>
          <TableExpandable />
        </Col>
        {/* <Col sm='12'>
          <TableBasic />
        </Col> */}
      </Row>
    </Fragment>
  )
}

export default Tables
