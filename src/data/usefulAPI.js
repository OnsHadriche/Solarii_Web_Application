const fs = require('fs');

// All these APIs does not add _id to a new object Please don't forget to add it when needed


/* --------------------------------- REST API For a simple schema ---------------------------------*/

/*Function Name: deleteByID
This function allow to remove an object from the json DB file
Params: filePath: the path of the json file to be updated
        Id: the object ID to be removed
Example usage remove 60f8c31f9bcf3c001c6d6f99 object ID from isoCertification.json
const filePath = 'path/to/isoCertification.json';
const IdToDelete = '60f8c31f9bcf3c001c6d6f99';
deleteByID(filePath, IdToDelete);
Note: this will remove it only from isoCertification.json and will not be removed from EntrepriseProfilData.json
      To delete it from EntrepriseProfilData please use deleteObjByKeyAndId()
*/

function deleteByID(filePath, Id) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const updatedData = jsonData.filter(item => item._id !== Id);
      fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          return;
        }
        console.log(`Successfully deleted item with ID: ${Id}`);
      });
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}

/*Function Name: getObjById
This function allow to Get an object by its ID
Params: filePath: the path of the json file to be updated
        Id: the object ID 
Example usage get 60f8c31f9bcf3c001c6d6f99 object ID from isoCertification.json
const filePath = 'path/to/isoCertification.json';
const itemId = '60f8c31f9bcf3c001c6d6f99';
getObjById(filePath, itemId);
Note: this will get it only from isoCertification.json and will not get it from EnterepriseProfil.json
*/
function getObjById(filePath, itemId) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const item = jsonData.find(item => item._id === itemId);
      if (item) {
        console.log('Retrieved item:', item);
      } else {
        console.error(`Item with ID: ${itemId} not found.`);
      }
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}

/*Function Name: updateObjById
This function allow to update an object by ID in the JSON file
Params: filePath: the path of the json file to be updated
        idToUpdate: the object ID that will be updated
        updatedObj: The updated object or new data to be merged with the existing object.
Example usage update 60f8c31f9bcf3c001c6d6f99 object ID from isoCertification.json
const filePath = 'path/to/isoCertification.json';
const itemId = '60f8c31f9bcf3c001c6d6f99';
const obj: {issuedBy: ISO certification company}
updateObjById(filePath, itemId, obj);
Note: this will update the issuedBy field of the object with itemId
*/

function updateObjById(filePath, idToUpdate, updatedObj) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const objIndex = jsonData.findIndex(item => item._id === idToUpdate);
      if (objIndex === -1) {
        console.error(`Object with ID: ${idToUpdate} not found.`);
        return;
      }
      jsonData[objIndex] = { ...jsonData[objIndex], ...updatedObj };

      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          return;
        }
        console.log(`Successfully updated object with ID: ${idToUpdate}`);
      });
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}

/*Function Name: addObj 
This function allow to add an object to a JSON file
Params: filePath: The path to the JSON file where the new object will be added.
        Obj: The object that will be appended to the array in the JSON file.
Example usage add a new user to User.json
const filePath = 'path/to/User.json';
const itemId = '60f8c31f9bcf3c001c6d6f99';
const newObject = {
  _id: "60f8c31f9bcf3c001c6d6f100", // Unique ID
  username: "newUser",
  email: "newuser@example.com",
  password: "encryptedPassword", // Replace with actual encryption
  phoneNumber: "+1-555-555-5559",
  type: "Entreprise d'installation photovoltaïque",
  createdAt: new Date().toISOString(),
  status: "active"
};
addObj(filePath,newObject);
*/

function addObj(filePath, Obj) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      jsonData.push(Obj);
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          return;
        }
        console.log(`Successfully added the new object.`);
      });
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}


/* --------------------------------- REST API For a complex schema ---------------------------------*/



/*Function Name: deleteObjByIdFromArray
This function allow to Delete an object by ID from a specified array in the JSON file
Params: filePath: The path to the JSON file.
        itemId: The ID of the item containing the array from which you want to delete an object.
        key: The name of the key that contains the array.
        idToDelete: The ID of the object you want to delete from the array.
Example usage remove 60f8c31f9bcf3c001c6d6f99 object ID from isoCertification key for the entrepriseProfil ID
const filePath = 'path/to/entrepriseProfilData.json';
const itemId = '60f8c31f9bcf3c001c6d6f99'; entreprise profil ID
const key = 'ISOCertification'
const IdToDelete = '60f8c31f9bcf3c001c6d6f99';
deleteObjByIdFromArray(filePath, itemId, key, IdToDelete);
*/

function deleteObjByIdFromArray(filePath, itemId, key, idToDelete) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const itemIndex = jsonData.findIndex(item => item._id === itemId);
      if (itemIndex === -1) {
        console.error(`Item with ID: ${itemId} not found.`);
        return;
      }
      const keyArray = jsonData[itemIndex][key];
      const objIndex = keyArray.findIndex(obj => obj._id === idToDelete);
      if (objIndex === -1) {
        console.error(`Object with ID: ${idToDelete} not found in the array.`);
        return;
      }
      keyArray.splice(objIndex, 1);
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          return;
        }
        console.log(`Successfully deleted object with ID: ${idToDelete} from ${key} of item with ID: ${itemId}`);
      });
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}

/*
Function Name: addObjToArrayInJSON
This function allow to add a new object to a specified key's array within an item identified by itemId
Params: filePath: the path of the json file to be updated
        itemId: the Id of item wich contain the key array
        key: the key of the array
        newObj: the object be added to the key array in json db
Example usage add a new reference object to entrepriseProfil.json
const filePath = 'path/to/entrepriseProfil.jsonjson';
const itemId = '60f8c31f9bcf3c001c6d6f99'; entreprise profil ID
const newObj = {
  name: 'New ISO Certification',
  describtion: 'New description for ISO certification.',
  photo: 'https://example.com/photo.jpg',
  issuedBy: 'New ISO Organization',
  issueDate: new Date().toISOString(),
  expirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString()
};
will add a new reference for the entrepriseProfil(id: 60f8c31f9bcf3c001c6d6f99)
*/

function addObjToArray(filePath, itemId, key, newObj) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const itemIndex = jsonData.findIndex(item => item._id === itemId);
      if (itemIndex === -1) {
        console.error(`Item with ID: ${itemId} not found.`);
        return;
      }
      if (!Array.isArray(jsonData[itemIndex][key])) {
        console.error(`Key "${key}" does not exist or is not an array in the item with ID: ${itemId}.`);
        return;
      }
      jsonData[itemIndex][key].push(newObj);
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          return;
        }
        console.log(`Successfully added new object to "${key}" in item with ID: ${itemId}`);
      });
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}


/*
Function Name: updateObjByIdFromArray
This function allow to Update an object by ID in a specified array within the JSON file
Params: filePath: the path of the json file to be updated
        itemId: the Id of item wich contain the key array
        key: the key of the array
        idToUpdate: the object Id to be updated
        updatedObj: The updated object or new data to be merged with the existing object
Example usage update a reference object to entrepriseProfil.json
*/
function updateObjByIdFromArray(filePath, itemId, key, idToUpdate, updatedObj) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const itemIndex = jsonData.findIndex(item => item._id === itemId);
      if (itemIndex === -1) {
        console.error(`Item with ID: ${itemId} not found.`);
        return;
      }
      const keyArray = jsonData[itemIndex][key];
      const objIndex = keyArray.findIndex(obj => obj._id === idToUpdate);
      if (objIndex === -1) {
        console.error(`Object with ID: ${idToUpdate} not found in the array.`);
        return;
      }
      keyArray[objIndex] = { ...keyArray[objIndex], ...updatedObj };
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          return;
        }
        console.log(`Successfully updated object with ID: ${idToUpdate} in ${key} of item with ID: ${itemId}`);
      });
    } catch (parseErr) {
      console.error(`Error parsing JSON data: ${parseErr}`);
    }
  });
}
