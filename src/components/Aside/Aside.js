import React from 'react';
import './style.css';
import { Button } from 'react-materialize';

const Aside = () => {
  return (
    <div className="aside">
      <div>
        <Button floating large className='grey' waves='light'>
        <i class="fab fa-linkedin-in"></i>
        </Button>
      </div>
      <div>
        <Button floating large className='grey' waves='light'>
        <i class="fas fa-file"></i>
        </Button>
      </div>
    </div>
  )
}

export default Aside;