function humanReadable (seconds) {

    let hours1=Math.floor(seconds / 60 / 60);
    let minutes1=Math.floor(seconds / 60)- (hours1 * 60);;
    let seconds1=seconds % 60;
    let hours=hours1.toString().padStart(2, '0')
    let minutes=minutes1.toString().padStart(2, '0')
    let seconds2=seconds1.toString().padStart(2, '0')
    let formatted = hours + ':' + minutes + ':' + seconds2;
    return formatted;
    }
    humanReadable (1)