import React, { useState } from 'react'

export const Form = () => {

    const initialFormValues = {
        firstName : "" ,
        lastName : "" ,
        fatherName: "" , 
        mobileNumber : "",
        email: "",
        pinCode: "",
        aadharNumber: "",
        state: "",
        registeredAddress:"",
        communicationAddress:"",
        accountNumber: "",
        bankName:"",
        accountHolderName:"",
        ifscCode:"",
    }

    const [formValues, setFormValues] = useState(initialFormValues) 
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
          });
    }

    const submitFormResponse = (e) => {
        // logic for submitting form response 
        // values are in formValues
        console.log(formValues)
    }

    // responsible for filling communication address automatically if it is same as registered address 
    const handleAltAddressCheckbox = (e) => {
        if(e.target.checked){
            setFormValues({
                ...formValues,
                communicationAddress : formValues.registeredAddress,
              });
        }
    }


  return (
    <>
    <div className='kycForm'>
        <div className="personalDetailForm grid-box">
            
            <form className='grid-box'>
                {/* Personal Details */}
                <div style={{marginTop:"20px"}} ><span style={{fontSize:"24px"}} className='formHeadingsBlue'>Personal</span> <span style={{fontSize:"24px"}} className='formHeadingsRed'> Details</span> </div>
                <input className='styledInput'  type="text" value={formValues.firstName} onChange={handleInputChange} name="firstName" placeholder='First Name*' required  />
                <input className='styledInput'  type="text" value={formValues.lastName} onChange={handleInputChange} name="lastName" placeholder='Last Name*' required  />
                <input className='styledInput'  type="text" value={formValues.fatherName} onChange={handleInputChange} name="fatherName" placeholder="Father's Name*" required  />
                <input className='styledInput'  type="tel" value={formValues.mobileNumber} onChange={handleInputChange} name="mobileNumber" placeholder='Mobile No.*' required  />
                <input className='styledInput'  type="email" value={formValues.email} onChange={handleInputChange} name="email" placeholder='Email Address*' required  />
                <input className='styledInput'  type="Number" value={formValues.pinCode} onChange={handleInputChange} name="pinCode" placeholder='Pin Code*' required  />
                <input className='styledInput'  type="Number" value={formValues.aadharNumber} onChange={handleInputChange} name="aadharNumber" placeholder='Aadhar Number*' required  />
                <input className='styledInput'  type="text" value={formValues.state} onChange={handleInputChange} name="state" placeholder='State*' required  />
                <textarea rows="4"  type="text" placeholder='Registered Address*' onChange={handleInputChange} value={formValues.registeredAddress} name="registeredAddress" required />
                <input style={{margin:"0 !important"}} type="checkbox" name="sameAsAbove" value="Same as above" onChange={handleAltAddressCheckbox} />
                <label for="sameAsAbove">same as above</label><br></br>
                <textarea rows="4"  type="text" placeholder='Communication Address*' onChange={handleInputChange} value={formValues.communicationAddress} name="communicationAddress" required />

                {/* Bank Details */}
                <div style={{marginTop:'30px'}}><span style={{fontSize:"24px"}} className='formHeadingsBlue'>Bank</span> <span style={{fontSize:"24px"}} className='formHeadingsRed'> Details</span> </div>
                <input className='styledInput'  type="Number" value={formValues.accountNumber} onChange={handleInputChange} name="accountNumber" placeholder='Account Number*' required  />
                <input className='styledInput'  type="text" value={formValues.bankName} onChange={handleInputChange} name="bankName" placeholder='Bank Name*' required  />
                <input className='styledInput'  type="text" value={formValues.accountHolderName} onChange={handleInputChange} name="accountHolderName" placeholder='Account Holder Name*' required  />
                <input className='styledInput'  type="Number" value={formValues.ifscCode} onChange={handleInputChange} name="ifscCode" placeholder='IFSC Code*' required  />

                {/* Document Upload */}
                <div style={{marginTop:'30px'}}><span style={{fontSize:"24px"}} className='formHeadingsBlue'>Document</span> <span style={{fontSize:"24px"}} className='formHeadingsRed'> Upload</span> </div>
                <span className='fileUploadSection' style={{marginRight:"65px"}}> 
                    <label for="aadhar">Aadhar Number* (Self Attested)</label>
                    <input  type="file" id="aadhar" name="aadhar" required/>
                    <span className='uploadText'>Upload</span>

                </span>
                <span className='fileUploadSection'> 
                    <label for="pan">Pan Number* (Self Attested)</label>
                    <input  type="file" id="pan" name="pan" required/> 
                    <span className='uploadText'>Upload</span>

                </span>
                <span className='fileUploadSection' style={{marginRight:"65px"}}> 
                    <label for="selfie">selfie Proof* (Self Attested)</label>
                    <input  type="file" id="selfie" name="selfie" required/> 
                    <span className='uploadText'>Upload</span>

                </span>
                <span className='fileUploadSection'> 
                    <label for="bank">Bank Proof* (Self Attested)</label>
                    <input  type="file" id="bank" name="bank" required/> 
                    <span className='uploadText'>Upload</span>
                </span>
                

                <button onClick={submitFormResponse} className='submitButton' type='submit'>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}
