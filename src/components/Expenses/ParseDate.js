function ParseDate(date) {
    const parsed_date = {
        month: date.toLocaleString('en-US', {month: 'long'}),
        year: date.getFullYear(),
        day: date.toLocaleString('en-US', {day: '2-digit'})
    }
    return parsed_date;
}

export default ParseDate;