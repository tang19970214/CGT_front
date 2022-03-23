export default async({ $api, store }) => {
    const listQuery = {
        page: 1,
        limit: 999,
      };

    let list = [
      {
        id: "",
        name: "全部",
        dtCode: "",
        dtValue: "",
        sort: 0,
      },
    ];
    const res = await $api.category.load(listQuery);
    const { code, data } = res.data;
    if (code !== 200) return;
    list.push(...data);

    store.dispatch('GetProductCategory', list)
}