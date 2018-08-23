module.exports.findURLsInText = function findURLsInText(text) {
  var regex_url = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}/g);
  var urls = text.match(regex_url);

  return urls ? urls : [];
};
