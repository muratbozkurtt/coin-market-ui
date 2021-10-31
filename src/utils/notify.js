import Vue from 'vue';

const showError = (errorMessage) => {
    Vue.notify({
        group: 'notify',
        title: 'Hata:',
        text: errorMessage,
        type: 'error',
    });
};

const showWarning = (warningMessage) => {
    Vue.notify({
        group: 'notify',
        title: 'Uyarı:',
        text: warningMessage,
        type: 'error',
        ignoreDuplicates: true,
        closeOnClick: true,
    });
};

const showNotification = (notificationMessage) => {
    Vue.notify({
        group: 'notify',
        title: 'Bildiri:',
        text: notificationMessage,
        type: 'success',
        ignoreDuplicates: true,
        closeOnClick: true,
    });
};

const clear = () => {
    Vue.notify({
        group: 'notify',
        clean: true,
    });
};

export default {
    showNotification,
    showWarning,
    showError,
    clear,
};
