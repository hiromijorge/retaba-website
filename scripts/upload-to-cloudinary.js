const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const foodImagesDir = path.join(__dirname, '../public/food-images');
const certImagesDir = path.join(__dirname, '../public/certification-images');

async function uploadFile(filePath, folder) {
  const basename = path.basename(filePath, path.extname(filePath));
  console.log(`Uploading ${basename} to folder ${folder}...`);
  
  const result = await cloudinary.uploader.upload(filePath, {
    folder: `retaba/${folder}`,
    public_id: basename,
    overwrite: true,
    resource_type: 'image',
  });
  
  console.log(`  ✅ ${result.secure_url}`);
  return result.secure_url;
}

async function main() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('❌ Missing Cloudinary credentials. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.local');
    process.exit(1);
  }

  const mapping = {
    food: {},
    certification: {},
  };

  // Upload food images
  const foodFiles = fs.readdirSync(foodImagesDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f));
  for (const file of foodFiles) {
    const id = path.basename(file, path.extname(file));
    const url = await uploadFile(path.join(foodImagesDir, file), 'food-images');
    mapping.food[id] = url;
  }

  // Upload certification images
  const certFiles = fs.readdirSync(certImagesDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f));
  for (const file of certFiles) {
    const id = path.basename(file, path.extname(file));
    const url = await uploadFile(path.join(certImagesDir, file), 'certification-images');
    mapping.certification[id] = url;
  }

  // Save mapping
  const mappingPath = path.join(__dirname, '../cloudinary-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`\n📁 Mapping saved to ${mappingPath}`);

  // Update src/data/menu.ts
  const menuPath = path.join(__dirname, '../src/data/menu.ts');
  let menuContent = fs.readFileSync(menuPath, 'utf8');
  
  Object.entries(mapping.food).forEach(([id, url]) => {
    const regex = new RegExp(`(/food-images/${id}\\.png)`, 'g');
    menuContent = menuContent.replace(regex, url);
  });
  
  fs.writeFileSync(menuPath, menuContent);
  console.log('📝 Updated src/data/menu.ts');

  // Update src/app/gallery/page.tsx
  const galleryPath = path.join(__dirname, '../src/app/gallery/page.tsx');
  let galleryContent = fs.readFileSync(galleryPath, 'utf8');
  
  Object.entries(mapping.food).forEach(([id, url]) => {
    const regex = new RegExp(`(/food-images/${id}\\.png)`, 'g');
    galleryContent = galleryContent.replace(regex, url);
  });
  
  fs.writeFileSync(galleryPath, galleryContent);
  console.log('📝 Updated src/app/gallery/page.tsx');

  // Update src/app/page.tsx
  const homePath = path.join(__dirname, '../src/app/page.tsx');
  let homeContent = fs.readFileSync(homePath, 'utf8');
  
  Object.entries(mapping.certification).forEach(([id, url]) => {
    const regex = new RegExp(`(/certification-images/${id}\\.png)`, 'g');
    homeContent = homeContent.replace(regex, url);
  });
  
  fs.writeFileSync(homePath, homeContent);
  console.log('📝 Updated src/app/page.tsx');

  // Update src/app/about/page.tsx
  const aboutPath = path.join(__dirname, '../src/app/about/page.tsx');
  let aboutContent = fs.readFileSync(aboutPath, 'utf8');
  
  Object.entries(mapping.certification).forEach(([id, url]) => {
    const regex = new RegExp(`(/certification-images/${id}\\.png)`, 'g');
    aboutContent = aboutContent.replace(regex, url);
  });
  
  fs.writeFileSync(aboutPath, aboutContent);
  console.log('📝 Updated src/app/about/page.tsx');

  console.log('\n✅ All done! Images are now on Cloudinary.');
}

main().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
