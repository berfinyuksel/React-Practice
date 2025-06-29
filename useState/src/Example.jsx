import { useState } from 'react';

function Example() {
  const [exam1, setExam1] = useState(0);

  const incrementExam1 = () => setExam1(exam1 + 1);

  return (
    <>
      <div>Example</div>
      <button onClick={() => setExam1(90)}></button>
      <button onClick={incrementExam1}>Increment Exam 1</button>
    </>
  )
}

export default Example

