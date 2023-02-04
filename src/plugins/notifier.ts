import {App} from "vue";

enum NotificationType {
    Message="message",
    Warning="warning",
    Error="error"
}

interface Notification {
    title: string;
    text: string;
    type: NotificationType
}

const DURATION = 1500;
const INTERVAL = 300;
const store = {
    notifications: [],
    subscribers: [],
    showing: false
};

export default {
    install: (app: App, options) => {
        const clearView = () => {
            store.subscribers.forEach((item) => {
                item(null);
            });
        };
        const show = () => {
            if (!store.subscribers.length || store.showing || !store.notifications.length)
                return;
            const notification = store.notifications.pop();
            store.showing = true;
            store.subscribers.forEach((item) => {
                 item(notification);
            });
            setTimeout(() => {
                clearView();
                setTimeout(() => {
                    store.showing = false;
                    show();
                }, INTERVAL);
            }, DURATION);
        };

        const notify = (notification: Notification) => {
            store.notifications.push(notification);
            show();
        };

        const subscribe = (callback) => {
            console.log("subscribed");
            store.subscribers.push(callback);
            show();
        };
        app.provide("subscribe", subscribe);
        app.config.globalProperties.$notify = notify;
    }
};

export { NotificationType, Notification };