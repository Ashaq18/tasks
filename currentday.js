const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();
const dayOfWeek = date.getDay();

console.log(`Today is: ${days[dayOfWeek]}`);
