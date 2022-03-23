export default async({ app, $api, store }) => {
    const listQuery = {
        page: 1,
        limit: 999,
      };
  
    const res = await $api.language.load(listQuery);
    const { code, data } = res.data;
    if (code !== 200) return;

    store.dispatch('GetLoales', data);

    const getLangList = data.filter((i) => i.langCode === app.$cookies.get("lang"));
    store.dispatch('GetLangList', getLangList[0]?.contents)
    console.log('getLangList', getLangList, app.$cookies.get('lang'));
}