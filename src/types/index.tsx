export type StopwatchProps = {
    time: number
}

export type Timer = NodeJS.Timer | null;
// type Timer = ReturnType<typeof setInterval> | null;
