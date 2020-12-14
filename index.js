

// var userData={
// 	firstName:"",
// 	lastName:"",
// 	email:"",
// 	phoneNumber:"",
// 	gender:"",
// 	city:"",
// 	summary:"",
// 	college:""
// }
// var setPersonalFilled=false;
// if(document.getElementsByName("firstName")[0]){
// 	if(document.getElementsByName("firstName")[0].value=="") {

// 	return false;	
// 	}
// }
fillData();

function getSummary() {

	let userStrings=['I am a hard worker who always gives his 100%. ','Honesty and dedication at work is my motto. ',
	'I am a fast learner who has a knack for learning. ','I always try to come up with innovative and creative solutions at work. '
	,'I am punctual in my work and complete all my work in estimated deadlines. '];
	let radOptsNumb=5;
	let optionRadio = [];
	for (let k=0;k<radOptsNumb;k++) {
		let optVal='qual'+k;
		let val= document.getElementById(optVal);
		if(val && val.checked) {
			optionRadio[k]=true;
		} else {
			optionRadio[k]=false;
		}
	}
	let userFinalSummary="";
	for(let i=0;i<radOptsNumb;i++){
		if(optionRadio[i]){
			userFinalSummary =userFinalSummary + userStrings[i];
		}
	} 
	let userCustomSummary=document.getElementsByName("summary")[0].value;
	if( userCustomSummary && userCustomSummary!='' ) {
		userFinalSummary+=userCustomSummary;
	}
	if(userFinalSummary =='') {
		userFinalSummary = 'I am a hard worker who always gives his 100%. Honesty and dedication at work is my motto. I am a fast learner who has a knack for learning. I always try to come up with innovative and creative solutions at work. I am punctual in my work and complete all my work in estimated deadlines.';
	}
	return(userFinalSummary);
}

function fillData(){
	if(document.getElementsByName('firstName')[0]) {
		document.getElementsByName('firstName')[0].innerText=localStorage.getItem("fname");
	}
}


function getWorkExperience1() {
	let expYears= document.getElementById('exp1').value;
	let compName=document.getElementById('compName1').value;
	let positionCompany = document.getElementById('pos1').value;
	let duties = document.getElementById('duty1').value;
	let achievements = document.getElementById('achiev1').value;
	let finalWorkExpr='';
	if(expYears && compName && positionCompany) {
	finalWorkExpr = 'I have worked for '+expYears+' months in '+compName+' as '+positionCompany+'. My daily duties involved '
	+duties+'.';
	}
	if( achievements ) {
	finalWorkExpr+=' Some Notable Achievements in my tenure are ' +achievements+'.'
	}
	localStorage.setItem("compName",document.getElementById('compName1').value);
	localStorage.setItem("work1",finalWorkExpr);
}

function setPersonal()
{
			
	localStorage.setItem("fname",document.getElementsByName("firstName")[0].value);
	localStorage.setItem("lname",document.getElementsByName("lastName")[0].value);
	localStorage.setItem("email",document.getElementsByName("email")[0].value);
	localStorage.setItem("phone",document.getElementsByName("phone")[0].value);
	localStorage.setItem("address",document.getElementsByName("address")[0].value);
	window.location.href = "third.html";	
}		

function setSummary()
{
	let summaryCustom = getSummary();
	localStorage.setItem("summary",summaryCustom);	

	window.location = "forth.HTML";


}

function setEducation()
{
	localStorage.setItem("collegeName",document.getElementsByName("collegeName")[0].value);
	localStorage.setItem("degree",document.getElementsByName("degree")[0].value);
	localStorage.setItem("passingYearCollege",document.getElementsByName("passingYearCollege")[0].value);
	localStorage.setItem("marksCollege",document.getElementsByName("marksCollege")[0].value);
	localStorage.setItem("juniorCollegeName",document.getElementsByName("juniorCollegeName")[0].value);
	localStorage.setItem("field",document.getElementsByName("field")[0].value);
	localStorage.setItem("passingYearJrCollege",document.getElementsByName("passingYearJrCollege")[0].value);
	localStorage.setItem("marksJrCollege",document.getElementsByName("marksJrCollege")[0].value);
	localStorage.setItem("schoolName",document.getElementsByName("schoolName")[0].value);
	localStorage.setItem("board",document.getElementsByName("board")[0].value);
	localStorage.setItem("passingYearSchool",document.getElementsByName("passingYearSchool")[0].value);
	localStorage.setItem("marksSchool",document.getElementsByName("marksSchool")[0].value);
}

function setSkillsAndInternship()
{
	localStorage.setItem("skill1",document.getElementsByName("skill1")[0].value);
	localStorage.setItem("skill2",document.getElementsByName("skill2")[0].value);
	localStorage.setItem("skill3",document.getElementsByName("skill3")[0].value);
	localStorage.setItem("skill4",document.getElementsByName("skill4")[0].value);
	localStorage.setItem("skill5",document.getElementsByName("skill5")[0].value);
	localStorage.setItem("skill6",document.getElementsByName("skill6")[0].value);
	localStorage.setItem("internProject1",document.getElementsByName("internProject1")[0].value);
	localStorage.setItem("internProject2",document.getElementsByName("internProject2")[0].value);
}

function setHobby()
{
	event.preventDefault();
	localStorage.setItem("hobby1",document.getElementsByName("hobby1")[0].value);
	localStorage.setItem("hobby2",document.getElementsByName("hobby2")[0].value);
	printCv();
	

}

function printCv()
{
	localStorage.setItem("hobby1",document.getElementsByName("hobby1")[0].value);
	localStorage.setItem("hobby2",document.getElementsByName("hobby2")[0].value);
	var pdfContent={};	
	if(localStorage.getItem("skill1")&&localStorage.getItem("skill2")&&localStorage.getItem("skill3")&&localStorage.getItem("skill4")&&localStorage.getItem("skill5")&&localStorage.getItem("skill6")){
	pdfContent = {
			columns: [
				{
					ul: [
						`${localStorage.getItem("skill1")}`,
						`${localStorage.getItem("skill2")}`,
						`${localStorage.getItem("skill3")}`
						
					]
				},
				{
					ul: [
						`${localStorage.getItem("skill4")}`,
						`${localStorage.getItem("skill5")}`,
						`${localStorage.getItem("skill6")}`														
					]
				}
			]
		};
	}else if(localStorage.getItem("skill1")&&localStorage.getItem("skill2")&&localStorage.getItem("skill3")&&localStorage.getItem("skill4")&&localStorage.getItem("skill5")){
	pdfContent = {
			columns: [
				{
					ul: [
						`${localStorage.getItem("skill1")}`,
						`${localStorage.getItem("skill2")}`,
						`${localStorage.getItem("skill3")}`
						
					]
				},
				{
					ul: [
						`${localStorage.getItem("skill4")}`,
						`${localStorage.getItem("skill5")}`													
					]
				}
			]
		};
	} else if(localStorage.getItem("skill1")&&localStorage.getItem("skill2")&&localStorage.getItem("skill3")&&localStorage.getItem("skill4")){	pdfContent = {
			columns: [
				{
					ul: [
						`${localStorage.getItem("skill1")}`,
						`${localStorage.getItem("skill2")}`,
						`${localStorage.getItem("skill3")}`
						
					]
				},
				{
					ul: [
						`${localStorage.getItem("skill4")}`														
					]
				}
			]
		};		
	}else if(localStorage.getItem("skill1")&&localStorage.getItem("skill2")&&localStorage.getItem("skill3")){
	pdfContent = {
			columns: [
				{
					ul: [
						`${localStorage.getItem("skill1")}`,
						`${localStorage.getItem("skill2")}`,
						`${localStorage.getItem("skill3")}`
						
					]
				}
				
			]
		};		
	}				

		
	
	var docDefinition={
	content: [		
		{
			text: `${localStorage.getItem("fname")} ${localStorage.getItem("lname")}`,
			style: 'header',
			alignment:'center'		
		},			
		{
			text: `${localStorage.getItem("email")} | ${localStorage.getItem("phone")} || ${localStorage.getItem("address")}`,
			style: 'subheader',
			alignment:'center'
		},	
		'\n',	
		{   
			fillColor: '#F1C40F',
	    	table: {
				body: [
					['.Professional Summary                                                                                                                              /']
					
				]
		}	},
		{
		    text:`\n ${localStorage.getItem("summary")}`,
			style: 'small'
		},
		'\n',
		{   fillColor: '#F1C40F',
		
	    table: {
				body: [
					['.Education                                                                                                                                                     /']
					
				],
				
	}	},
	'\n',
		{
			table: {
			   	widths: [218,120, 70,70],
				body: [
				    [`${localStorage.getItem("collegeName")}`,`${localStorage.getItem("degree")}`,`${localStorage.getItem("passingYearCollege")}`,`${localStorage.getItem("marksCollege")}`],
					[`${localStorage.getItem("juniorCollegeName")}`,`${localStorage.getItem("field")}`,`${localStorage.getItem("passingYearJrCollege")}`,`${localStorage.getItem("marksJrCollege")}`],
					[`${localStorage.getItem("schoolName")}`,`${localStorage.getItem("board")}`,`${localStorage.getItem("passingYearSchool")}`,`${localStorage.getItem("marksSchool")}`]									
			]
			}
		},
	'\n',
		{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Skills and Certifications                                                                                                                             /']
					
				]
	}	},
    '\n',
    	pdfContent,
		'\n',
		
			{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Work Experience/Internships                                                                                                                  /']
					
				]
	}	},
	
	'\n',
	{
		text:`${localStorage.getItem("compName")}`,
			style:'work'
	},
		{

			ul: [
				
				`${localStorage.getItem("work1")}`
				
			]
		},
	'\n',	{   fillColor: '#F1C40F',
		
	    table: {
				body: [
					['.Hobbies and Interests    	   	                                                                                                                /']
					
				]
	    	
				
	
	        
	  }  },
	  '\n',
	  {
		ul: [
				`${localStorage.getItem("hobby1")}`,
				`${localStorage.getItem("hobby2")}`
				
			]
	},
	

	
	
	],

	styles: {
		header: {
		    decoration: 'underline',
			fontSize: 30,
			bold: true
		},

		work:{
			bold: true
		},

		subheader: {
			fontSize: 18,
			italics: true,
			color:"gray"

		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 13
		}
	},
	

};
	pdfMake.createPdf(docDefinition).download();
}

// var docDefinition = 
// 	{
// 	 content:
// 	[
// 		{text:`name:${localStorage.getItem("name")}`}
// 	]
// 	}
//  	pdfMake.createPdf(docDefinition).download();
//  	localStorage.clear();
	
// function print()
// {
// 	var docDefinition = {
// 		content: [
// 		{
		
// 		`Last Name${userData.lastName}`
// 		`Summary:${userData.summary}`
// 		}
// 		]
// 	}
// 	pdfMake.createPdf(docDefinition).download();
// }


/*

// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
		
		
		{
			text: 'Name',
			style: 'header',
			alignment:'center'
		},
		
		
		
		{
			text: 'Post',
			style: 'subheader',
			alignment:'center'
		},
		{
			text: 'email | phoneNumber',
			style: 'subheader',
			alignment:'center'
		},
		
	{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Professional Summary                                                                                                                              /']
					
				]
	}	},
		{
			text: '\n Summary',
			style: 'small'
		},
		{   fillColor: '#F1C40F',
		
	    table: {
				body: [
					['.Education                                                                                                                                                     /']
					
				],
				
	}	},
	'\n',
		{
			table: {
			   	widths: [218,120, 70,70],
				body: [
				    ['name','degree','year','marks'],
					['collegeName', 'degreeName', 'year of passing','9.0 CGPA'],
					['junoir college', 'field', 'year of passing','marks'],
					['school','board','year of passing','marks']
				]
			}
		},
	'\n',
		{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Skills and Certifications                                                                                                                             /']
					
				]
	}	},
    '\n',
    	{
			columns: [
				{
					ul: [
						'skill1',
						'skill2',
						'skill3'
					]
				},
				{
					ul: [
						'skill4',
						'skill5',
						'skill6'
					]
				}
			]
		},
		'\n',
		
			{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Internship/Experience/Projects                                                                                                               /']
					
				]
	}	},
	
	'\n',
		{
			ul: [
				'item 1',
				'item 2'
				
			]
		},
	
	],
	
	
	
	styles: {
		header: {
			fontSize: 30,
			bold: true
		},
		subheader: {
			fontSize: 18,
			bold: true
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 13
		}
	}
	
}

*/