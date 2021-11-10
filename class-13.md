# Read: 13 - Local Storage

From: http://diveinto.html5doctor.com/storage.html

### Persistent Local Storage

Browser applications are unable to store things easily to local storage like native client applications were.

Cookies were one of the only ways to store locally and they had some weaknesses, namely being required to go with every HTTP request, being unsecure, and maxed out at 4kb.

### History of Trying to Store Things via Browser

Legacy Attempts:

*userData**, *Flash 6*, *AMASS*, *ExternalInterface*, Google's *Gears*

### Intro to HTML5 Storage

A method of storing key/value pairs in the browser itself.
- Not transmitted to the server.
- Data persists even when away, or browser is closed.
- Does not require plugins or special browsers.

### How to check for HTML5 Storage (from html5doctor)

```
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
```

### Using HTML5 Storage

Based on key/value pairs. Create a named key based off a string. Data can be any JS supported datatype, but data is a string. Data returned from the value must be returned to its original datatype to re-use it properly.

Using an already named key will overwrite the data previously there. Using a non-existent key will throw an exception.

``localStorage`` is used/treated like an array.

**From Mozilla MDN Web Docs**

``Storage.setItem()`` Given a key name and value, will store it or update it.

``Storage.getItem()`` Given a key name will get the value of it as a string.

``Storage.key()`` Given a number ``n`` will give back the name of then nth key.

``Storage.removeItem()`` Given a key name will remove it from storage.

``Storage.clear()`` Clear all keys from storage.

### StorageEvent Object Properties

``key`` - named key

``oldValue`` - previous value now overwritten or null if was new

``newValue`` - new value, or null if was removed

``url`` or ``uri`` - page that called the method

### Limitations

# 5 MB

