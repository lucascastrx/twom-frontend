const textarea = document.getElementById('userInput');
const form = document.querySelector('form');

// textarea.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter' && !e.shiftKey) {
//     e.preventDefault(); 
//     textarea.value += '\n';
//   }
// });

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = textarea.value;
  console.log(input);
  const bodyData = {
    'data': input
  } 

  // Test-env.eba-kpbbnm52.us-east-2.elasticbeanstalk.com/api/process-list/
  try {
    const response = await fetch('http://localhost:8000/api/process-list/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    console.log(response);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please verify your input');
  }
});
