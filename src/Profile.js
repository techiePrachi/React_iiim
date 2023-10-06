import React from 'react'
import Counter from './Counter'

function Test(props) {
    return(
        <>
            <div>
                <img src={props.url} width={300} height={200}/>
                <h2>{props.name} </h2>
                <Counter />
            </div>
        </>
    );
}

export default function Profile() {
  return (
    <>
        <div className='prod'>
        <Test url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" name="Product1" />
        <Test url="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" name="Product2" />
        <Test url="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" name="Product3" />
        <Test url="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" name="Product4" />
        <Test url="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" name="Product4" />
        <Test url="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" name="Product4" />
        <Test url="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" name="Product4" />
        </div>
    </>

  )
}
