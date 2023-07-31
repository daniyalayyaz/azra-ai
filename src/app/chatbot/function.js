export const preprocessResponse = (response) => {
    // Replace all occurrences of \n with <br> tags
    let processedResponse = response.replace(/\n/g, "<br>");
  
    // Replace all occurrences of '+' with '&#43;' to preserve the '+'
    processedResponse = processedResponse.replace(/\+/g, "&#43;");
  
    return processedResponse;
};

export  const renderResponseContent = (content) => {
    return { __html: content };
  };