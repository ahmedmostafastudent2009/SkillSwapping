export function getFallbackQuestions(skill) {
  return [
    {q:`What is the most important principle when teaching ${skill} to beginners?`,options:['Start with advanced concepts','Build from fundamentals with practical examples','Skip theory entirely','Focus only on memorization'],correct:1},
    {q:`Which approach best assesses a student's practical understanding of ${skill}?`,options:['Written theory test only','Hands-on project or exercise','Multiple-choice quiz only','Attendance record'],correct:1},
    {q:`How should you handle a student who is falling behind in ${skill}?`,options:['Ignore and continue','Provide personalised feedback and alternative explanations','Ask them to leave','Move faster to cover more material'],correct:1},
    {q:'What makes online course content most engaging?',options:['Long uninterrupted video lectures','Short focused lessons with interactive elements','Text-only slides','No structure'],correct:1},
    {q:'What is the ideal length for a single instructional video segment?',options:['60+ minutes','5–12 minutes','1–2 minutes','Length does not matter'],correct:1},
    {q:'How do you measure the success of your online course?',options:['Number of enrolled students only','Completion rate, quiz scores, and student feedback','Revenue generated','Number of videos uploaded'],correct:1},
    {q:'Which teaching style promotes deeper understanding?',options:['Passive listening','Active learning with problem-solving','Rote memorisation','Copying examples'],correct:1},
    {q:'What is the best way to structure a complex topic into a course?',options:['Dump everything in one lesson','Break it into logical progressive modules','Teach randomly','Skip prerequisites'],correct:1},
    {q:'How should course assessments be distributed?',options:['One final exam only','Regular quizzes and assignments throughout','No assessments needed','Assessments at the start only'],correct:1},
    {q:`What distinguishes an expert ${skill} instructor from an average one?`,options:['More years of experience only','Ability to simplify, adapt, and inspire students','Knowing the most terminology','Teaching the fastest'],correct:1},
  ];
}
