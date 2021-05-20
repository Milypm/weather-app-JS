const shared = (() => {
  const setIcon = (main, description, iconId) => {
    const otherConditions = 'mist smoke haze dust fog sand ash squall';
    if (iconId.includes('d')) {
      if (main === 'Clear' && description === 'clear sky') { return 'fas fa-sun'; }
      if (main === 'Clouds' && description === 'few clouds') { return 'fas fa-cloud-sun'; }
      if (main === 'Clouds' && description === 'scattered clouds') { return 'fas fa-cloud-sun'; }
      if (main === 'Clouds') { return 'fas fa-cloud'; }
      if (main === 'Rain' && description === 'shower rain') { return 'fas fa-cloud-sun-rain'; }
      if (main === 'Rain') { return 'fas fa-cloud-rain'; }
      if (main === 'Thunderstorm') { return 'fas fa-bolt'; }
      if (main === 'Snow') { return 'fas fa-snowflake'; }
      if (main === 'Tornado') { return 'fas fa-exclamation-circle'; }
      if (otherConditions.includes(main)) { return 'fas fa-smog'; }
    } else {
      if (main === 'Clear' && description === 'clear sky') { return 'fas fa-moon'; }
      if (main === 'Clouds' && description === 'few clouds') { return 'fas fa-cloud-moon'; }
      if (main === 'Clouds' && description === 'scattered clouds') { return 'fas fa-cloud-moon'; }
      if (main === 'Clouds') { return 'fas fa-cloud'; }
      if (main === 'Rain' && description === 'shower rain') { return 'fas fa-cloud-moon-rain'; }
      if (main === 'Rain') { return 'fas fa-cloud-rain'; }
      if (main === 'Thunderstorm') { return 'fas fa-bolt'; }
      if (main === 'Snow') { return 'fas fa-snowflake'; }
      if (main === 'Tornado') { return 'fas fa-exclamation-circle'; }
      if (otherConditions.includes(main)) { return 'fas fa-smog'; }
    }
    return undefined;
  };

  const fahToCel = (current) => {
    const newTemp = (Math.floor((parseInt(current, 10) - 32) * 5) / 9).toString();
    return newTemp;
  };

  const celToFah = (current) => {
    const newTemp = (Math.floor((parseInt(current, 10) * 9) / 5) + 32).toString();
    return newTemp;
  };

  const convertWind = (currentTodayWind) => {
    if (currentTodayWind.split('').includes('k')) {
      const kmEl = currentTodayWind.split(' ').pop();
      const k = kmEl.split('');
      k.splice(-5, 5);
      const joinNumK = k.join('');
      const numK = parseInt(joinNumK[0], 10);
      return Math.round((numK / 1.609344));
    }
    const mhEl = currentTodayWind.split(' ').pop();
    const m = mhEl.split('');
    m.splice(-3, 3);
    const joinNumM = m.join('');
    const numMh = parseInt(joinNumM[0], 10);
    return Math.round((numMh * 1.609344));
  };

  return {
    setIcon, fahToCel, celToFah, convertWind,
  };
})();

export default shared;