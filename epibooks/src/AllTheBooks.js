import React from 'react'
import Card from 'react-bootstrap/Card'
import dati from './books/history.json'

function CardBooks (props){
    return (
        <Card className='p-0' style={{ width: '240px' }}>
          {/* <Card.Img variant="top" src={props.img}/> */}
          <div className='image-container'>
            <img src={props.img}/>
          </div>
          <Card.Body>
            <p>{props.title}</p>
          </Card.Body>
        </Card>
      );
}

function AllTheBooks () {
   return (
    <div className='row gap-4 justify-content-center'>
    {dati.map(books => (
        <CardBooks
            key={books.asin}
            img={books.img}
            title={books.title}
            >
        </CardBooks>
    ))}
</div>
   )
}


export default AllTheBooks