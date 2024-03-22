const host = import.meta.env.VITE_BASE_URL;

export default {
    api: {
        test: `${host}/api/cases`,

        allMessage: `${host}/api/cases/`,
        messageByOrganization: `${host}/api/cases/by_org`,

        sendMessage: `${host}/api/message/respond`,
    }
}
