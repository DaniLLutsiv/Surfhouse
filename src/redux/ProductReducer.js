let initialState = { 
	LengthNewProduct:6,
	ActivePageNewProducts:1,
	LengthElseProduct:3,
	ActivePageTopProducts:1,
	ActivePageSaleProducts:1,
	ActivePageFromSurfApparel:1,
	LengthSurfApparel:9,
	Quantity:1,
	ActiveTabs:1,
	
	NewProducts:[{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:1, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:32,Length:[32,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,0,0,0],Tags:['Men,Duper'] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:2, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[30,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,0,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:3, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[30,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0],Tags:['Men,Duper'] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:4, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,30], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0],Tags:['Kids,Duper'] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:5, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,30], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0],Tags:['Men,Duper'] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:6, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:27,Length:[30,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0],Tags:['Men,Duper'] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:7, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'985.00',id:8, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[31,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:9, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:26,Length:[32,31], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:10, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:11, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,31], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:12, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:28,Length:[32,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:13, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,31], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:14, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:27,Length:[31,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:15, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:28,Length:[32,31], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'985.00',id:16, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:17, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:26,Length:[31,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,1,0,0] }],
	
	TopProducts:[{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster ',Prise:'865.00',Sale:'',id:1, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,0,0,0,0],Tags:['Kids,Duper'] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster ',Prise:'865.00',Sale:'',id:2, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Kids,Duper'] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster ',Prise:'865.00',Sale:'',id:3, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Kids,Duper'] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster ',Prise:'865.00',Sale:'€.985.00',id:4, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Kids,Duper'] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster ',Prise:'865.00',Sale:'',id:5, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster ',Prise:'865.00',Sale:'€.985.00',id:6, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster ',Prise:'865.00',Sale:'€.985.00',id:7, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:8, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster ',Prise:'865.00',Sale:'€.985.00',id:9, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:10, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster ',Prise:'865.00',Sale:'',id:11, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:12, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:13, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:14, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:15, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:16, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,0,0,0] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:17, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] }],
	
	SaleProducts:[{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:1, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0],Tags:['Kids,Duper'] },
	{img:`https://cdn2.top-shop.ru/ff/11/img615_9bba141f1ad4a59df5505bbe63c111ff.JPG`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:2, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,0,0,0],Tags:['Kids,Duper'] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single  2014',Prise:'865.00',Sale:'',id:3, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Kids,Duper'] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:4, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Kids,Duper'] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single  2014',Prise:'865.00',Sale:'',id:5, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:6, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:7, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single  2014',Prise:'865.00',Sale:'€.985.00',id:8, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:9, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single  2014',Prise:'865.00',Sale:'',id:10, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://cdn2.top-shop.ru/ff/11/img615_9bba141f1ad4a59df5505bbe63c111ff.JPG`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:11, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single  2014',Prise:'865.00',Sale:'€.985.00',id:12, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://moskva.i-mne.com/img/p/moskva.i-mne.com/1089-4132-large.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'',id:13, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:14, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://cdn2.top-shop.ru/ff/11/img615_9bba141f1ad4a59df5505bbe63c111ff.JPG`, text:'Single  2014',Prise:'865.00',Sale:'€.985.00',id:15, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:16, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://cdn2.top-shop.ru/ff/11/img615_9bba141f1ad4a59df5505bbe63c111ff.JPG`, text:'Single Thruster 2014',Prise:'865.00',Sale:'€.985.00',id:17, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] }],
	
	SurfProduct:[{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:1, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Women,Duper'] },
	{img:`https://shopme.am/wa-data/public/shop/products/08/88/28808/images/276589/276589.750.jpg`,text:'Surf Apparel Surf Apparel Surf Apparel Surf Apparel',Prise:'36.00',Sale:'',id:2, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In used',Size:30,Length:[32,34,874], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[0,0,0,0,0],Tags:['Women,Duper'] },
	{img:`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'€.985.00',id:3, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0],Tags:['Women,Duper'] },
	{img:`https://shopme.am/wa-data/public/shop/products/08/88/28808/images/276589/276589.750.jpg`,text:'Surf Apparel Surf Apparel Surf Apparel',Prise:'36.00',Sale:'',id:4, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:27,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0],Tags:['Men,Duper'] },
	{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'€.985.00',id:5, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In used',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0],Tags:['Women,Duper'] },
	{img:`https://shopme.am/wa-data/public/shop/products/08/88/28808/images/276589/276589.750.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:6, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel Surf Apparel',Prise:'36.00',Sale:'€.985.00',id:7, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:26,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://shopme.am/wa-data/public/shop/products/08/88/28808/images/276589/276589.750.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:8, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In used',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,1] },
	{img:`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'€.985.00',id:9, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:30,Length:[1], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:10, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,87], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,text:'Surf Apparel Surf Apparel Surf Apparel text',Prise:'36.00',Sale:'€.985.00',id:11, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In used',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:12, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:32,Length:[32,37], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:13, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,1,0] },
	{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'€.985.00',id:14, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In used',Size:30,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,0,0,0] },
	{img:`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:15, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,0,0,0] },
	{img:`https://cdn-5ca51fc3f911c91ddc742258.closte.com/wp-content/uploads/2014/07/wetsuit.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:16, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32,34,78], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] },
	{img:`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,text:'Surf Apparel',Prise:'36.00',Sale:'',id:17, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[32], Small_img:[`https://cdn.sptmr.ru/upload/resize_cache/iblock/850/600_600_1/19490630299.jpg`,`https://images.ua.prom.st/1606817428_w640_h640_gidrokostyum-tribord-olaian.jpg`],Star:[1,1,1,0,0] }
	]
}

const ProductReducer = (state = initialState , action) => {

	switch(action.type){
		case 'ACTIVE-TABS' :
		return{
			...state,	
			ActiveTabs : action.num
		}
		case 'DELETE-PARAMS' :
		return{
			...state,
			Quantity:1,
			ActiveTabs:1	
			
		}
		case 'NEW-STYLE' :
		return{
			...state,	
			style : 'auto'
		}
		case 'CHANGE-QUANTITY' :
		if (action.num<1) {action.num = 1}
		return{
			...state,	
			Quantity : action.num
		}
		
		
		case 'NEW-ACTIVE-SLIDE-PRODUCT-NEW-PRODUCT':
			if (action.ActivePageNewProducts < 1) {action.ActivePageNewProducts = 1}
			if (action.ActivePageNewProducts > Math.ceil(state.NewProducts.length/6)) { action.ActivePageNewProducts = 1}
			return{
				...state,	
				ActivePageNewProducts:action.ActivePageNewProducts
			}


		case 'NEW-ACTIVE-SLIDE-PRODUCT-TOP-PRODUCT':
			if (action.ActivePageNewProducts < 1) {action.ActivePageNewProducts = 1}
			if (action.ActivePageNewProducts > Math.ceil(state.NewProducts.length/3)) { action.ActivePageNewProducts = 1}
			return{
				...state,	
				ActivePageTopProducts:action.ActivePageNewProducts
			}
		
		case 'NEW-ACTIVE-SLIDE-PRODUCT-SALE-PRODUCT':
			if (action.ActivePageNewProducts < 1) {action.ActivePageNewProducts = 1}
			if (action.ActivePageNewProducts > Math.ceil(state.NewProducts.length/3)) { action.ActivePageNewProducts = 1}
			return{
				...state,	
				ActivePageSaleProducts:action.ActivePageNewProducts
			}
		
		case 'NEW-ACTIVE-SLIDE-PRODUCT-SURFAPPAREL':
			if (action.ActivePageNewProducts < 1) {action.ActivePageNewProducts = 1}
			if (action.ActivePageNewProducts > Math.ceil(state.SurfProduct.length/state.LengthSurfApparel)) {action.ActivePageNewProducts = 1}
			return{
				...state,	
				ActivePageFromSurfApparel:action.ActivePageNewProducts
			}
		
		case 'CHANGE-LENGTH-SURF-APPAREL':
		return{
			...state,	
			LengthSurfApparel : action.Length
		}
		default:
			return state;	
	} 	
}

export const NewStyle = () => {
	return {
		type:'NEW-STYLE'
	}
}

export const NewActiveSlideProduct = (ActivePageNewProducts,text) =>{
	if (text === 'New Products') {
		return{
			type:'NEW-ACTIVE-SLIDE-PRODUCT-NEW-PRODUCT',
			ActivePageNewProducts
		}
	}
	if (text === 'Top Products') {
		return{
			type:'NEW-ACTIVE-SLIDE-PRODUCT-TOP-PRODUCT',
			ActivePageNewProducts
		}
	}
	if (text === 'Sale Products') {
		return{
			type:'NEW-ACTIVE-SLIDE-PRODUCT-SALE-PRODUCT',
			ActivePageNewProducts
		}
	}
	if (text === 'SurfApparel') {
		return{
			type:'NEW-ACTIVE-SLIDE-PRODUCT-SURFAPPAREL',
			ActivePageNewProducts
		}
	}
}

export const ChangeLengthSurfApparel = (Length) =>{
	return {
		type:'CHANGE-LENGTH-SURF-APPAREL',
		Length
	}
}
export const QuantityChange = (num) =>{
	return {
		type:'CHANGE-QUANTITY',
		num
	}
}
export const ActiveTabsChange = (num) =>{
	return {
		type:'ACTIVE-TABS',
		num
	}
}

export const DelateParams = () => {
	return {
		type:'DELETE-PARAMS'
	}
}




export default ProductReducer;