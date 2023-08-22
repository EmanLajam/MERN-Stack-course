import React from 'react'
import {FormRowSelect, FormRow, Alert} from '../../components'
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isLoading,
     isEditing,
     showAlert, 
     displayAlert,
     position,
     company,
     jobLocation,
     jobType, 
     jobTypeOptions,
     status, 
     statusOptions, 
     handleChange,
     clearValues,
     createJob,
     editJob
     } = useAppContext()

     const handleSubmit = (e) =>{
      e.preventDefault()
      if(!position || !company || !jobLocation ){
        displayAlert()
        return
      }
     if(isEditing){
      editJob()
      return
     }
     createJob()
    }
     const handleJobInput = (e) =>{
    
      handleChange({name: e.target.name, value: e.target.value})

     }
  return (
    <Wrapper>
    <form className='form'>
      <h3>{isEditing ? 'edit job' : 'add job' }</h3>
      {showAlert && <Alert/>}
      <div className='form-center'>
        {/* position */}
          <FormRow type="text" name="position" value={position} handleChange={handleJobInput}
          />
          {/* company name */}
          <FormRow type="text" name="company" value={company} handleChange={handleJobInput}
          />
          {/* location */}
            <FormRow type="text" labelText='Job location' name="jobLocation" value={jobLocation} handleChange={handleJobInput}
          />
          {/* job Type */}
        <FormRowSelect type="text" labelText="Type" name="jobType" value={jobType} 
        onChange={handleJobInput} list={jobTypeOptions}
        
        />
         <FormRowSelect type="text" name="status" value={status} 
        onChange={handleJobInput} list={statusOptions}
        
        />

          {/* job status */}
            {/* <FormRow type="text" name="position" value={position} handleChange={handleJobInput}
          /> */}
          <div className='btn-container'>
          <button className='btn btn-block submit-btn' type="submit" onClick={handleSubmit} disabled={isLoading}>
            Submit
            </button>
            <button className='btn btn-block clear-btn' type="submit" onClick={(e) =>{
              e.preventDefault()
              clearValues()
            }}>
            clear
            </button>
          </div>
          </div>
      </form>
      </Wrapper>
  )
}

export default AddJob