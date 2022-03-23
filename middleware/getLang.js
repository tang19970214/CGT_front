export default async({ app, $api, store }) => {
    const listQuery = {
        page: 1,
        limit: 999,
      };
  
    const res = await $api.language.load(listQuery);
    const { code, data } = res.data;
    if (code !== 200) return;

    store.dispatch('GetLoales', data);

    const getLangCodeArr = data.map((i) => i.langCode);
    let langMsg = {}
    getLangCodeArr.forEach((key) => {
      const i18nContent = data.filter((i) => i.langCode === key)[0].contents
      langMsg[key] = typeof i18nContent === 'string' ? JSON.parse(i18nContent) : {}
    })

    console.log(langMsg);
    store.dispatch('GetLangList', langMsg)
}