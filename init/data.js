const sampleListings = [
  // TRENDING
  {
    title: "Royal Haveli Stay in Jaipur",
    description:
      "Experience traditional Rajasthani architecture with modern comforts in this beautiful haveli near the heart of Jaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Jaipur",
    country: "India",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },

  {
    title: "Riverside Retreat in Rishikesh",
    description:
      "Relax beside the Ganges in this peaceful retreat, perfect for a weekend escape surrounded by mountains and nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },

  {
    title: "Goan Beach Villa",
    description:
      "A beautiful tropical villa close to the beach with a private pool and relaxing outdoor space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "North Goa",
    country: "India",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [73.911, 15.4909],
    },
  },

  // ROOMS
  {
    title: "Cozy Room in South Delhi",
    description:
      "A comfortable private room in a peaceful neighborhood with easy access to cafes, markets and Delhi attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "New Delhi",
    country: "India",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [77.209, 28.6139],
    },
  },

  {
    title: "Modern Room in Bangalore",
    description:
      "A clean and modern private room located close to Bangalore's popular restaurants, cafes and tech hubs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Bangalore",
    country: "India",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },

  {
    title: "Heritage Room in Udaipur",
    description:
      "Stay in a beautifully decorated heritage property overlooking the old city and nearby lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Udaipur",
    country: "India",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854],
    },
  },

  // ICONIC CITIES
  {
    title: "City Apartment in Mumbai",
    description:
      "Stay in the middle of Mumbai with stunning city views and convenient access to major attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },

  {
    title: "Luxury Apartment in Hyderabad",
    description:
      "A stylish city apartment with modern interiors, perfect for exploring Hyderabad's food and historic landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Hyderabad",
    country: "India",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.385],
    },
  },

  {
    title: "Old City Apartment in Kolkata",
    description:
      "A charming apartment close to Kolkata's historic neighborhoods, markets and famous food spots.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Kolkata",
    country: "India",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726],
    },
  },

  // MOUNTAINS
  {
    title: "Mountain Cabin in Manali",
    description:
      "Wake up to spectacular Himalayan views from this cozy wooden cabin surrounded by pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },

  {
    title: "Himalayan Retreat in Kasol",
    description:
      "A peaceful mountain stay surrounded by forests and dramatic Himalayan scenery, perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Kasol",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.3152, 32.0098],
    },
  },

  {
    title: "Snow View Cottage in Gulmarg",
    description:
      "A cozy cottage with breathtaking snow-covered mountain views, ideal for a winter getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Gulmarg",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [74.38, 34.0484],
    },
  },

  {
    title: "Valley View Stay in Mussoorie",
    description:
      "Enjoy peaceful mornings and panoramic valley views from this charming hillside property.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Mussoorie",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [78.0669, 30.4598],
    },
  },

  // CASTLES
  {
    title: "Heritage Haveli in Jodhpur",
    description:
      "Live like royalty in this restored heritage haveli surrounded by the blue houses of Jodhpur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Jodhpur",
    country: "India",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389],
    },
  },

  {
    title: "Royal Palace Stay in Jaipur",
    description:
      "Experience the grandeur of Rajasthan with traditional interiors, courtyards and royal hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046827-dacff0c2c1a1?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Jaipur",
    country: "India",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },

  {
    title: "Fort View Heritage Home",
    description:
      "A traditional heritage home offering beautiful views of the historic fort and surrounding old city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602643163981-7a9c2b0c9e7d?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Jaisalmer",
    country: "India",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
  },

  // AMAZING POOLS
  {
    title: "Infinity Pool Villa in Goa",
    description:
      "Relax beside an infinity pool overlooking lush tropical surroundings just minutes from the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Goa",
    country: "India",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993],
    },
  },

  {
    title: "Luxury Pool Retreat in Alibaug",
    description:
      "A spacious private villa with a beautiful swimming pool, perfect for a relaxing weekend away from Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4b0f2c?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Alibaug",
    country: "India",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [72.8722, 18.6414],
    },
  },

  {
    title: "Poolside Villa in Kerala",
    description:
      "Surrounded by tropical greenery, this peaceful villa features a refreshing private pool and spacious rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Alleppey",
    country: "India",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
  },

  // CAMPING
  {
    title: "Desert Camping in Jaisalmer",
    description:
      "Spend a magical night under the stars with traditional Rajasthani food, music and desert adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
  },

  {
    title: "Riverside Camping in Rishikesh",
    description:
      "Camp beside the Ganges with mountain views, bonfires and exciting outdoor activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },

  {
    title: "Forest Camp in Jim Corbett",
    description:
      "Stay close to nature in a comfortable forest camp surrounded by greenery and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Jim Corbett",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [79.1267, 29.53],
    },
  },

  // FARMS
  {
    title: "Mango Farm Stay in Maharashtra",
    description:
      "Enjoy a peaceful countryside experience surrounded by mango trees, open fields and fresh local food.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Ratnagiri",
    country: "India",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [73.312, 16.9902],
    },
  },

  {
    title: "Organic Farmhouse in Punjab",
    description:
      "Experience rural Punjab with spacious fields, traditional food and a peaceful farmhouse stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Amritsar",
    country: "India",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [74.8723, 31.634],
    },
  },

  {
    title: "Coffee Estate Stay in Coorg",
    description:
      "Wake up among coffee plantations and misty hills in this peaceful estate surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Coorg",
    country: "India",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [75.8069, 12.3375],
    },
  },

  // ARCTIC
  {
    title: "Snow Cabin in Auli",
    description:
      "Stay in a cozy snow-covered cabin with incredible Himalayan views and easy access to winter activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Auli",
    country: "India",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [79.3588, 30.5286],
    },
  },

  {
    title: "Snow Retreat in Gulmarg",
    description:
      "A warm and comfortable mountain retreat surrounded by snow-covered landscapes and pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Gulmarg",
    country: "India",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [74.38, 34.0484],
    },
  },

  {
    title: "Winter Lodge in Manali",
    description:
      "Enjoy a warm wooden lodge surrounded by snowy mountains, perfect for a cozy winter holiday.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-5b8d2d2f9c6f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Manali",
    country: "India",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
];

module.exports = { data: sampleListings };
