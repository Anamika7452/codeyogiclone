import React from 'react';
import H1 from './H1';
import SecondaryCard from './SecondaryCard'
import AssignmentCard from './AssignmentCard'
import assignmentData from './MockData/assignments';

 console.log(`assignmentData`, assignmentData[0] )

const AssignmentsList = props => {
	return (
			<>
			<H1>Assignments List</H1>
			<SecondaryCard>
				<div className="sm:px-16 mx-5 py-5 space-y-5">
           {assignmentData.map((assignment) => (<AssignmentCard assignment={assignment}></AssignmentCard>))}
				</div>
			</SecondaryCard>
		</>
	);
};
export default AssignmentsList;
