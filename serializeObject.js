var serializeObject = function(form) {
   var serializ = {};
   for (var i = 0; i < form.elements.length; i++) {
      var elem = form.elements[i];
      if (!elem.name || elem.disabled || elem.type === 'file' || elem.type === 'reset' || elem.type === 'submit' || elem.type === 'button') continue;
      if (elem.type === 'select-multiple') {
         for (var n = 0; n < elem.options.length; n++) {
            if (!elem.options[n].selected) continue;
            serializ[elem.name] = elem.value;
         }
      } else if ((elem.type !== 'checkbox' && elem.type !== 'radio') || elem.checked) {
         serializ[elem.name] = elem.value;
      }
   }
   return serializ;
};
// export default serializeObject;
