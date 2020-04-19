import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonConditional = () => (
  <Button.Group>
    <Button>Delete</Button>
    <Button.Or />
    <Button positive>Update</Button>
  </Button.Group>
)

export default ButtonConditional