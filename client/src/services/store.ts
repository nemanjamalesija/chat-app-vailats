const store = {};

const proxiedStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;

    return true;
  },
});

export default proxiedStore;
