const currentUser = { id: '', firstName: '', lastName: '' };

const proxiedUserStore = new Proxy(currentUser, {
  get: (obj, prop) => {
    return Reflect.get(obj, prop);
  },

  set(obj, prop, value) {
    return Reflect.set(obj, prop, value);
  },
});

export default proxiedUserStore;
