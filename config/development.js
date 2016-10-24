// config.js
export default {
  cosmicjs: {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'cross-platform-blog',
      read_key: process.env.COSMIC_READ_KEY,
      write_key: process.env.COSMIC_WRITE_KEY
    }
  }
}