export const parseTime = (date: string) => {
    const time = new Date(date).toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
    return time;
};

export const parseDate = (date: string) => {
    const fullDate = new Date(date);
    const day = fullDate.toLocaleDateString("en-US", { weekday: 'short' });
    const monthDate = fullDate.toLocaleDateString("en-US", { day: 'numeric' });
    const month = fullDate.toLocaleDateString("en-US", { month: 'short' });

    return `${day}, ${monthDate} ${month}`;
};