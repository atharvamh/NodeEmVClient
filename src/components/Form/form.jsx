import React from "react";
import "./form.sass";

const FormComponent = ({ 
	title, fields, submitText = "Submit", showSubmit = false, link = null,
	updateFieldValue, submitForm, showLink = false, linkTitle = null, linktext = null
}) => {
	return (
		<form className="bg-white form" onSubmit={(event) => submitForm(event)}>
			<div className="form-header d-flex justify-content-center align-items-center">
				<p>{title}</p>
			</div>
			{fields?.map((field, idx) => (
				<div className="form-group" key={idx}>
					<label htmlFor={field?.name} className="label">
						{field?.name}
						{
							field?.isRequired ?
							<span className='text-danger helper-text'>*</span> : <></>
						}
					</label>
					<input type={field?.type} className="form-control mt-1" 
                    id={field?.name} placeholder={field?.placeholder} value={field?.value} 
                    onChange={(event) => updateFieldValue(field, event)} required={field?.isRequired} />
					
				</div>
			))}
			{showSubmit ? (
				<div className="form-group d-flex justify-content-center align-items-center">
					<button type="submit" className="btn btn-primary btn-sm w-100">
						{submitText}
					</button>
				</div>
			) : (
				<></>
			)}
			{
				showLink ? 
					(
						<div className="form-group d-flex gap-1 justify-content-center align-items-center">
							<span className='link'>{linkTitle}</span>
							<span><a className='link' href={link}>{linktext}</a></span>
						</div>
					)
				 : <></>
			}
		</form>
	);
};

export default FormComponent;
