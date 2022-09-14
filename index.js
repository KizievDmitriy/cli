const argv = require("yargs").argv;
const contacts = require("./contacts");


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await contacts.listContacts();
      break;

    case "get":
      await contacts.getContactById(id);
      break;

    case "add":
      await contacts.addContact(name, email, phone);
      break;

    case "remove":
      await contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);