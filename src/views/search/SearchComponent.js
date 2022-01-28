import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const SearchComponent = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (search) => {
    axios.get(`http://localhost:8000/api/search?tieude=${search.title}&noidung=${search.Content}`).then(response => {
      const result = response.data.list_news
      console.log("result:", result)
    })
    // fetch(`http://localhost:8000/api/search?tieude=${search.title}&noidung=${search.Content}`, {method:'GET'})
    // .then(res => res.json())
    // .then(
    //     (result) => {
    //       console.log(result)
    //     },
    //     (error) => {
    //       console.log(error)
    //     }
    //   )
  }
 
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Search News</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='Title'>Title</Label>
            <Input
              id='Title'
              name='title'
              innerRef={register({ required: true })}
              placeholder='Tiêu đề'
            />
          </FormGroup>
          <FormGroup>
            <Label for='Contents'>Contents</Label>
            <Input
              id='Contents'
              name='Content'
              innerRef={register({ required: true })}
              placeholder='Nội dung'
            />
          </FormGroup>
          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </Card> 
  )
}

export default SearchComponent