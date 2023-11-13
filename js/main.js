const doc = document;

const userForm = doc.forms.userForm;
const fields = userForm.fields.elements;

userForm.onsubmit = function (e) {
  e.preventDefault();

  let allFields = true;

  for (let item of fields) {
    const value = item.value;
    const name = item.name;

    if (!value) {
      console.log(`field [${name}] is not valid`);
      item.style.background = 'red'
      allFields = false;
    } else {
      item.style.background = 'initial';
    }
  }
  if (allFields) {
    console.log('все поля заполнены')
  }
}

