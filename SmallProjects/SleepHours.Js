const getSleepHours = day => {
    switch(day.toLowerCase()) {
      case 'monday' :
      return 7;
      case 'tuesday' :
      return 7;
      case 'wednesday' :
      return 7;
      case 'thursday':
      return 7;
      case 'friday' :
      return 7;
      case 'saturday':
      return 7;
      case 'sunday' :
      return 8;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') +  getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(); 
  
    if (actualSleepHours === idealSleepHours){
    console.log('You got: ' + (actualSleepHours) + ' hours of sleep. You slept great this week!');
  } else if (actualSleepHours > idealSleepHours) { console.log('You got: ' + (actualSleepHours - idealSleepHours) + ' hours of sleep more then you needed this week. You slept too much this week!');
  } else {
    console.log('You got: ' + (idealSleepHours - actualSleepHours) + ' hours of less sleep then you needed this week. You need to get more rest!');
  };
  console.log('Total hour(s) slept this week: ' + actualSleepHours);
  };
  
  calculateSleepDebt();
  
  