let marks = prompt('Enter your Marks');
let grade;

if(marks>90 && marks<100){
	grade = 'A';
}
else if(marks>80 && marks<90){
	grade = 'B';
}
else if(marks>70 && marks<80){
	grade = 'C';
}
else if(marks>60 && marks<70){
	grade = 'D';
}
else if(marks>50 && marks<60){
	grade = 'E';
}
else{
	grade = 'F'
}
console.group('If-Else-If')
console.log('Marks are: ' + marks + '. Grade is: ' + grade);
console.groupEnd('If-Else-If')

grade = (marks>90 && marks<100)? 'A': (marks>80 && marks<90)? 'B': (marks>70 && marks<80)? 'C': (marks>60 && marks<70)? 'D': (marks>50 && marks<60)? 'E':'F';
console.group('Ternary')
console.log('Marks are: ' + marks + '. Grade is: ' + grade);
console.groupEnd('Ternary')

switch(true){
	case (marks>90 && marks<100):
		grade = 'A';
		break;
	case (marks>80 && marks<90):
		grade = 'B';
		break;
	case (marks>70 && marks<80):
		grade = 'C';
		break;
	case (marks>60 && marks<70):
		grade = 'D';
		break;
	case (marks>50 && marks<60):
		grade = 'E';
		break;
	default:
		grade = 'F';
}
console.group('Switch')
console.log('Marks are: ' + marks + '. Grade is: ' + grade)
console.groupEnd('Switch')