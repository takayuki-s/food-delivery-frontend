import Head from 'next/head'
import { Alert, Button } from 'reactstrap'

export default function Home() {
  return (
    <div>
      <div>
        <Alert color="primary">Hello Project</Alert>
        <Button color="primary">Hello from nextjs</Button>
      </div>
    </div>
  )
}
