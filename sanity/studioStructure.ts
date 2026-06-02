// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
