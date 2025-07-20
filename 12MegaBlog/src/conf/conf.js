const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID
}
console.log("Appwrite URL:", import.meta.env.VITE_APPWRITE_URL);
console.log("Appwrite Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log("Appwrite Database ID:", import.meta.env.VITE_APPWRITE_DATABASE_ID);
console.log("Appwrite Collection ID:", import.meta.env.VITE_APPWRITE_COLLECTION_ID);
console.log("Appwrite Bucket ID:", import.meta.env.VITE_APPWRITE_BUCKET_ID);

export default conf;
