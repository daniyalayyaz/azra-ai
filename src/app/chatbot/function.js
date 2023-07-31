export const preprocessResponse = (response) => {
    // Replace all occurrences of \n with <br> tags
    return response.replace(/\n/g, "<br>");
};