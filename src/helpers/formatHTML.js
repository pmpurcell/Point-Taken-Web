const formatHTML = (fileContent) => {
    const htmlFormattedLyrics = fileContent.replace(/\n/g, '<br>');
    return htmlFormattedLyrics;
}

export {formatHTML};