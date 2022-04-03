export const parseTime = (date: string) => {
    const time = new Date(date).toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
    return time;
};