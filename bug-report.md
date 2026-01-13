                        
Bug Report						
                        
#BugID |#Title	|#Severity	|#Steps to Reproduce |#	Actual Results	|#Expected Results	 |#Status

|-----|---------|----------|----------------------|-----------------|-------------------|---------|

BUG01|	incorrect file upload format and no validation |High |	1.open homepage.2click on admission button 3. fill in the details and upload file 4.click on register form	|form submitted succesfully	|rejects unsupported format document and also it should verify details if are correct|	open.

BUG02|after registration doesnot navigate to login |	High|	1.click on login , 2.click on create account , 3.fill in details, 4.click on button create |creates accounts doesnot route to login page |	navigate to login page| open.

BUG03|	ReferenceID exceed 13 digits|	High |	1.click on login page, 2.click on payment button , 3.input refenceID that has 13 digits ,4. upload the pdf document , 5.click on submit button.	 |accepts referenceID that exceed 13 digits	reject unsupported format document, and referenceID that has more than 13 digits|reject unsupported format document, and referenceID that has more than 13 digits	|open

BUG04 |contact form doesnt validate email format|	Medium | 1.navigate to contact page, 2.input any character, 3.submit the form	|form Submitted succesfully	 |system should validates emailinput and accepts valide email format e.g nori@gmail.com |	open

BUG05|	no document validation	| Medium|	1.navigate to admission form, 2.enter details, 3.upload document , 4.click submit form |Submitted succesfully |	exception error stating uplaod the required documents |	open


                        

                        
