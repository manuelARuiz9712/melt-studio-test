import logo from 'assets/images/logo.svg';
import { DatePicker, message } from 'antd';
import { useState } from 'react';

const Index = ()=>{

    const [date, setDate] = useState(null);
    const handleChange = value => {
      message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
      setDate(value);
    };
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
        
        </div>
      </div>
    );
}

export {
    Index
}