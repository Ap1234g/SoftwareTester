Tester name:Nontlantla Nyamfu
Date : 06/07/2026


TC ID|---|Description|-----------|Preconditions|--------	|Test Steps	Expected Result	Actual Result	Priority	Status
TC001|	Verify Bank Manager Login	Application launched	Click Bank Manager Login	Manager dashboard displayed	Dashboard displayed	High	Pass
TC002|	Verify Home button navigation	User logged in	Click Home	User redirected to home page	Redirected successfully	Medium	Pass
TC003|	Verify Add Customer page opens	Manager logged in	Click Add Customer	Add Customer form displayed	Form displayed	High	Pass
TC004|	Add customer with valid details	On Add Customer page	Enter valid details and submit	Customer added successfully	Customer added	High	Pass
TC005|	Verify success alert after adding customer	Customer details entered	Click Add Customer	Success alert displayed	Alert displayed	High	Pass
TC006|	Verify First Name is mandatory	On Add Customer page	Leave First Name blank	Customer should not be added	Validation prevented submission	High	Pass
TC007|	Verify Last Name is mandatory	On Add Customer page	Leave Last Name blank	Customer should not be added	Validation prevented submission	High	Pass
TC008|	Verify Postal Code is mandatory	On Add Customer page	Leave Postal Code blank	Customer should not be added	Validation prevented submission	High	Pass
TC009	Verify all fields blank	On Add Customer page	Leave all fields empty and submit	Customer should not be added	Validation prevented submission	High	Pass
TC010	Verify numbers in First Name	On Add Customer page	Enter 12345 as First Name	System should reject numbers	Numbers rejected	Medium	Pass
TC011	Verify numbers in Last Name	On Add Customer page	Enter 12345 as Last Name	System should reject numbers	Numbers rejected	Medium	Pass
TC012	Verify duplicate customer cannot be added	Customer already exists	Add same customer twice	Duplicate should be rejected	Duplicate customer added	High	Fail
TC013	Verify special characters in First Name	On Add Customer page	Enter @#$%	System should reject special characters	Accepted special characters	Medium	Fail
TC014	Verify spaces only	On Add Customer page	Enter spaces in all fields	System should reject input	Accepted spaces	Medium	Fail
TC015	Verify maximum character length	On Add Customer page	Enter 100-character name	System should reject long input	Accepted long name	Medium	Fail
TC016	Verify leading spaces	On Add Customer page	Enter " John"	System should trim or reject spaces	Accepted leading spaces	Low	Fail
TC017	Verify trailing spaces	On Add Customer page	Enter "John "	System should trim spaces	Accepted trailing spaces	Low	Fail
TC018	Verify Open Account page	Manager logged in	Click Open Account	Open Account page displayed	Page displayed	High	Pass
TC019	Verify account creation	Open Account page	Select customer and currency, click Process	Account created successfully	Account created	High	Pass
TC020	Verify customer dropdown	Open Account page	Click customer dropdown	Customer list displayed	Customer list displayed	Medium	Pass
TC021	Verify currency dropdown	Open Account page	Click currency dropdown	Currency list displayed	Currency list displayed	Medium	Pass
TC022	Verify account creation alert	Account created	Click Process	Success alert displayed	Alert displayed	High	Pass
TC023	Verify Customers page	Manager logged in	Click Customers	Customers table displayed	Table displayed	High	Pass
TC024	Search existing customer	Customer exists	Search customer by full name	Matching customer displayed	Customer displayed	High	Pass
TC025	Search using lowercase	Customer exists	Search using lowercase letters	Customer should be found	Customer found	Medium	Pass
TC026	Search using partial name	Customer exists	Search using first three letters	Matching customer displayed	Customer displayed	Medium	Pass
TC027	Search using surname	Customer exists	Search by last name	Matching customer displayed	Customer displayed	Medium	Pass
TC028	Search using postal code	Customer exists	Search by postal code	Matching customer displayed	Customer displayed	Medium	Pass
TC029	Search non-existing customer	Customers page	Search "XYZ123"	No records found	No records displayed	Medium	Pass
TC030	Search deleted customer	Customer deleted	Search deleted customer	Customer should not appear	Customer not found	High	Pass
TC031	Delete customer	Customer exists	Click Delete	Customer removed	Customer removed	High	Pass
TC032	Verify deleted customer removed	Customer deleted	Search deleted customer	Customer should not exist	Customer not displayed	High	Pass
TC033	Verify rapid clicking	Add Customer page	Click Add Customer multiple times quickly	One customer should be created	Multiple customers created	High	Fail
TC034	Verify refresh during data entry	Add Customer page	Enter data and refresh page	Form should reset	Form reset successfully	Medium	Pass
TC035	Verify application remains stable after multiple operations	Manager logged in	Add customer, open account, search and delete	Application functions correctly	Application remained stable	High	Pass