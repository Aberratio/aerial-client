export const buildFilesUrl = (ref: string) => {
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${ref.replace('file-', '').replace('-', '.')}`;
};
