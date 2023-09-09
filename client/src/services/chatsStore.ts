const chatsStore = { activeChannel: 'General discussion' };

const proxiedChatStore = new Proxy(chatsStore, {
  get: (obj, prop) => {
    return Reflect.get(obj, prop);
  },

  set(obj, prop, value) {
    Reflect.set(obj, prop, value);

    if (prop == 'activeChannel') {
      window.dispatchEvent(new Event('activeChannelChange'));
    }

    return true;
  },
});

export default proxiedChatStore;
