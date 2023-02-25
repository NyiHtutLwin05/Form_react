import React, { Component } from 'react'
import './Form.css';
import {FiSend} from 'react-icons/fi'
import { frameworks,levels,learningTypes } from '../util/data';
export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Fname: '',
         Lname: '',
         email: '',
         phone: '',
         framework:'React',
         level : 'Basic',
         learningType:['Fundamentals'],
         feedback:''
      }
    }
    handleChg =(c)=>{
        const {name,value}=c.target;
        this.setState({
            [name]:value
        })
    }
    handleCheckBox =(d)=>{
        const {value,checked}=d.target;
        const {learningType} =this.state;
        if(checked){
        this.setState({
            learningType:[...learningType,value]
        })
        }else{
        this.setState({
            learningType:learningType.filter((t)=>t !== value)
        })
        }
    }
    handleSubmt =(e)=>{
        e.preventDefault(); 
        alert('Successfully');
        console.log('checkout state', this.state);
    }
  render() {
    
    const {Fname,Lname,email,phone,framework,level,learningType,feedback}=this.state;
    return (
       <div className='bgStyle'>
        <form action="" onSubmit={this.handleSubmt}>
            <div className='formStyle'>
               <div className='sendCircle'>
                  <FiSend className='send_icon' />
               </div>
               <p className='head'>hello</p>
               <div className='fullName'>
                <div>
                    <label htmlFor="" className='label'>First Name</label> <br />
                    <input type="text" value={Fname} onChange={this.handleChg} name='Fname'/>
                </div>
                <div>
                    <label htmlFor="" className='label'>Last Name</label> <br />
                    <input type="text" value={Lname} name='Lname'  onChange={this.handleChg} />
                </div>
               </div>
                  <div>
                    <label htmlFor="" className='label'>Email</label> <br />
                     <input type="email" value={email}  onChange={this.handleChg} name='email'/>
                  </div>
                  <div>
                    <label htmlFor="" className='label'>Mobile</label> <br />
                     <input type="number" value={phone} name='phone'  onChange={this.handleChg} />
                  </div>
                  <div>
                    <label htmlFor="" className='label'>Which framework is that you learn?</label><br />
                    <select name="framework" id="" value={framework}  onChange={this.handleChg} >
                        {
                            frameworks.map((e)=>(
                                <option  key={e.id}>{e.value}</option>

                            ))
                        }
                    </select>
                  </div>
                  <div className='label'>
                        <label htmlFor="" >level</label> <br />
                        <div className='wrapper'>
                            {
                                levels.map((e)=>(
                                    <div key={e.id} className='wrapperInner'>
                                        <input type="radio" name='level' value={e.name}  onChange={this.handleChg}  defaultChecked={level && e.name === level}/> <label htmlFor="">{e.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                  </div>
                  <div className='label'>
                        <label htmlFor="" >Which learning is your Favorite?</label> <br />
                        <div className='wrapper'>
                            {
                                learningTypes.map((r)=>(
                                    <div key={r.id} className='wrapperInner'>
                                        <input type="checkbox" name={r.name} value={r.name} defaultChecked={learningType && learningType.includes(r.name)} onChange={this.handleCheckBox}/> <label htmlFor="">{r.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                  </div>
                  <div>
                    <label htmlFor="" className='label'>Why like this?</label><br />
                    <textarea rows="50" value={feedback} onChange={this.handleChg} name='feedback'></textarea>
                  </div>
                  <div >
                    <button className='button' type='submit'>SEND</button>
                  </div>
            </div> 
        </form>
       </div>
    )
  }
}

export default Form