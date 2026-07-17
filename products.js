/* ================== DATA ================== */
const PRODUCTS = [
  {
    id:1, slug:'coconut-shell-bowl', name:'Coconut Shell Bowl', tagline:'Chén gáo dừa tự nhiên',
    img:'assets/p1-catalog.jpeg',
    short:'Chén ăn làm từ gáo dừa tái chế, thủ công và độc bản cho mỗi sản phẩm.',
    desc:'Được làm từ gáo dừa tái chế, Coconut Shell Bowl là lựa chọn bền vững, tái sử dụng và thân thiện với môi trường thay thế cho bát đĩa thông thường. Mỗi chiếc chén được chế tác thủ công với hình dáng độc đáo, phù hợp cho smoothie bowl, salad, trái cây, tráng miệng và kem — mang phong cách nhiệt đới tự nhiên cho mọi bữa ăn.',
    advantages:['100% tự nhiên & bền vững','Thủ công từ gáo dừa tái chế','Nhẹ, bền và tái sử dụng được','An toàn thực phẩm, dễ vệ sinh','Hình dáng & vân gỗ tự nhiên độc bản','Có thể phân hủy sinh học, không nhựa','Khắc logo theo yêu cầu'],
    specs:[
      ['Kích thước','Small: H5.5–6.5 x D8–10cm · Medium: H5.5–6.5 x D11–13cm · Jumbo: H7–8.5 x D10–13cm'],
      ['Hình dáng','Tròn, đáy cân bằng'],
      ['Kiểu bề mặt','Thô (Raw) hoặc Đánh bóng (Polish)'],
      ['Logo','Khắc laser, tùy chỉnh theo yêu cầu'],
      ['Phiên bản kem (Ice cream)','100gr / 150gr / 200gr / 250gr / 300gr — dáng oval, hình tự nhiên'],
    ]
  },
  {
    id:2, slug:'coconut-shell-cup', name:'Coconut Shell Cup', tagline:'Ly gáo dừa thủ công',
    img:'assets/p2-coconut-shell-cup.jpg',
    short:'Ly uống thức uống làm từ gáo dừa tái chế, phong cách nhiệt đới độc đáo.',
    desc:'Coconut Shell Cup được chế tác thủ công từ gáo dừa tái chế tự nhiên, mang đến giải pháp phục vụ đồ uống thời trang và bền vững. Bền, tái sử dụng và có thể phân hủy sinh học, lý tưởng cho cocktail, sinh tố, nước ép và các loại đồ uống nhiệt đới, tạo nên trải nghiệm thân thiện môi trường độc đáo cho khách hàng.',
    advantages:['100% gáo dừa tái chế tự nhiên','Thủ công, hình dáng & vân gỗ độc bản','Nhẹ, bền và tái sử dụng được','An toàn thực phẩm, dễ vệ sinh','Phân hủy sinh học, không rác thải','Có hoặc không có đế','Khắc logo theo yêu cầu'],
    specs:[
      ['Kích thước','Tùy chỉnh theo đơn hàng'],
      ['Kiểu bề mặt','Thô (Raw) hoặc Đánh bóng (Polish)'],
      ['Đế','Có đế hoặc không đế'],
      ['Logo','Khắc laser, tùy chỉnh theo yêu cầu'],
    ]
  },
  {
    id:3, slug:'coir-pellet', name:'Coir Pellet', tagline:'Viên nén xơ dừa gieo hạt',
    img:'assets/p3-coir-pellet.jpg',
    short:'Viên nén xơ dừa nén chặt, giữ nước tốt, lý tưởng để ươm hạt giống.',
    desc:'Đây là những viên nén được ép từ xơ dừa — sợi tự nhiên chiết xuất từ vỏ quả dừa. Xơ dừa nổi tiếng với khả năng giữ nước và thoáng khí tuyệt vời, là giá thể phổ biến cho việc gieo hạt và ươm cây con. Các viên nén nhỏ gọn, dễ bảo quản; khi thêm nước sẽ nở ra thành kết cấu tơi xốp như đất, tạo môi trường lý tưởng cho hạt nảy mầm.',
    advantages:['Giữ nước tối ưu','Độ thoáng khí tốt','Phân hủy sinh học, thân thiện môi trường','Nguồn tài nguyên tái tạo','Nhỏ gọn, tiện lợi','pH trung tính','Thúc đẩy bộ rễ phát triển khỏe mạnh','Ít nguy cơ sâu bệnh và cỏ dại','Nhẹ, dễ thao tác','Đa dụng trong trồng trọt'],
    specs:[
      ['Kích thước (bình thường)','35mm x dày 18mm · 42mm x dày 8mm'],
      ['Kích thước (sau khi nở)','38mm x dày 60mm · 43mm x dày 50mm'],
      ['Đóng gói','1.000 viên / thùng carton'],
    ]
  },
  {
    id:4, slug:'coco-peat-block', name:'Coco Peat Block', tagline:'Bánh xơ dừa nén trồng cây',
    img:'assets/p4-coco-peat-block.jpg',
    short:'Bánh xơ dừa nén chặt — giá thể trồng cây nhẹ, giữ ẩm tốt.',
    desc:'Coco Peat Block là bánh xơ dừa được nén chặt, thường dùng làm giá thể trồng cây. Khi được tưới nước, bánh xơ dừa nở ra thành kết cấu tơi xốp như đất. Giá thể nhẹ và thân thiện với môi trường này có khả năng giữ nước và thoáng khí tuyệt vời, được ưa chuộng trong gieo hạt, làm vườn và nghề trồng trọt.',
    advantages:['Bền vững & tái tạo được','Giữ nước tuyệt vời','Độ thoáng khí tốt','Trọng lượng nhẹ','pH trung tính','Không cỏ dại hay mầm bệnh','Dễ dàng ngậm nước trở lại'],
    specs:[
      ['Kích thước (2kg)','H5 x 30 x 30cm — Khối lượng 500gr → nở 5–6 lít'],
      ['Kích thước (5kg)','H15 x 30 x 30cm — Khối lượng 5kg → nở 70–75 lít'],
      ['EC','0.5'],
      ['pH','5.5 – 6.5'],
      ['Độ ẩm','< 20%'],
      ['Xử lý','Đã rửa (Washed)'],
      ['Đóng gói','1–1.1 MTS / pallet'],
      ['Xếp hàng','20 pallet / container 40’HC'],
    ]
  },
  {
    id:5, slug:'coco-husk-chips', name:'Coco Husk Chips', tagline:'Mảnh vỏ dừa cho giá thể',
    img:'assets/p5-coco-husk-chips.jpg',
    short:'Mảnh vỏ dừa cao cấp — thoát nước và thoáng khí vượt trội cho rễ cây.',
    desc:'Được làm từ vỏ dừa cao cấp, Coco Husk Chips mang lại khả năng giữ nước, thoáng khí và thoát nước tuyệt vời cho sự phát triển khỏe mạnh của rễ cây. Lý tưởng cho hoa lan, vườn ươm, thủy canh và làm vườn, đây là giá thể trồng trọt bền vững và thân thiện môi trường được người trồng tin dùng trên toàn thế giới.',
    advantages:['100% tự nhiên và phân hủy sinh học','EC thấp < 0.5 mS/cm','EC cao > 2.5 mS/cm','Giữ nước và thoát nước tuyệt vời'],
    specs:[
      ['Kích thước (4.5kg)','H15 x 30 x 30cm'],
      ['Khối lượng','4.5kg → nở 70–80 lít'],
      ['EC','0.5'],
      ['pH','5.5 – 6.5'],
      ['Độ ẩm','< 20%'],
      ['Xử lý','Đã rửa (Washed)'],
      ['Đóng gói','1 MTS / pallet'],
      ['Xếp hàng','20 pallet / container 40’HC'],
    ]
  },
  {
    id:6, slug:'coir-pot', name:'Coir Pot', tagline:'Chậu ươm xơ dừa phân hủy',
    img:'assets/p6-coir-pot.jpg',
    short:'Chậu trồng cây từ xơ dừa, phân hủy tự nhiên, tránh sốc rễ khi trồng lại.',
    desc:'Coir Pot là chậu trồng cây làm từ xơ dừa — sợi tự nhiên chiết xuất từ vỏ quả dừa. Những chiếc chậu này có khả năng phân hủy sinh học và thân thiện với môi trường, mang lại độ thoáng khí và giữ ẩm tuyệt vời, thúc đẩy bộ rễ phát triển khỏe mạnh. Theo thời gian, chậu xơ dừa sẽ phân hủy, cho phép trồng cây trực tiếp xuống đất mà không làm xáo trộn rễ — một giải pháp thay thế bền vững cho chậu nhựa truyền thống.',
    advantages:['Cây phát triển nhanh hơn','Thúc đẩy bộ rễ chắc khỏe','Giàu dinh dưỡng','pH trung tính, không mùi, nhẹ','Không cỏ dại, không sâu bệnh','Giữ ẩm mà không gây úng','Loại bỏ sốc khi trồng lại','Bền vững & phân hủy sinh học','Tăng độ thoáng khí'],
    specs:[
      ['Chậu tròn','No.3031 6x4xH5.5cm · No.3032 8.5x5.5xH8cm · No.3033 11x7.5xH10cm · No.3071 5.5x3.5xH5cm · No.3072 10x6.5xH9cm · No.3134 13x10xH11.5cm'],
      ['Chậu vuông','No.3078 8.5x7xH5.5cm · No.3099 10x9xH6.2cm · No.3136 11x10xH7.7cm'],
      ['Khay ươm','Khay 8 hốc No.3097 · Khay 10 hốc No.3096'],
    ]
  },
  {
    id:7, slug:'coconut-shell-pot', name:'Coconut Shell Pot', tagline:'Chậu gáo dừa nguyên khối',
    img:'assets/p7-coconut-shell-pot.jpg',
    short:'Chậu trồng cây từ gáo dừa nguyên khối, làm sạch và sấy khô tự nhiên.',
    desc:'Coconut Shell Pot là chậu trồng cây tự nhiên và thân thiện môi trường, được làm từ gáo dừa đã được làm sạch và sấy khô. Có khả năng phân hủy sinh học và vẻ ngoài bắt mắt, những chiếc chậu này là giải pháp bền vững thay thế cho các loại chậu truyền thống, hòa quyện liền mạch vào đất khi cây phát triển.',
    advantages:['Thân thiện môi trường & bền vững','Khả năng phân hủy sinh học','Thoát nước tốt','Nhẹ, dễ thao tác','Đặc tính cách nhiệt','Thúc đẩy lưu thông không khí','Độ bền cao, dùng lâu dài','Đa dụng trong trồng trọt'],
    specs:[
      ['Kích thước','Cao 9–10cm / Đường kính 9–11cm · Cao 5–6cm / Đường kính 7–9cm'],
      ['Tùy chỉnh','Kích thước theo yêu cầu khách hàng'],
    ]
  },
  {
    id:8, slug:'coir-moss-pole', name:'Coir Moss Pole', tagline:'Cọc leo xơ dừa cho cây dây leo',
    img:'assets/p8-coir-moss-pole.jpg',
    short:'Cọc đỡ cây leo bọc xơ dừa, giữ ẩm và tạo bề mặt bám rễ tự nhiên.',
    desc:'Coir Moss Pole là cấu trúc đỡ cho cây dây leo, được làm từ sợi xơ dừa chiết xuất từ vỏ quả dừa. Những chiếc cọc này mang đến giải pháp thay thế tự nhiên và thân thiện môi trường cho các hệ thống đỡ truyền thống. Người làm vườn thường dùng chúng cho các loại dây leo và cây nhiệt đới trong nhà. Cọc xơ dừa giữ ẩm tốt và có bề mặt nhám khuyến khích cây bám và leo lên. Khi xơ dừa phân hủy theo thời gian, nó làm giàu thêm cho đất.',
    advantages:['Hỗ trợ tự nhiên cho cây leo','Tăng cường lưu thông không khí','Phân hủy sinh học, thân thiện môi trường','Chất liệu bền vững','Dễ lắp đặt','Đa dụng cho nhiều loại cây leo','Cấu trúc chắc chắn, ổn định','Không hóa chất độc hại','Giữ ẩm tốt'],
    specs:[
      ['Chiều dài','50 / 60 / 80 / 90 / 100 / 110 / 120cm'],
      ['Tùy chỉnh','Kích thước theo yêu cầu khách hàng'],
    ]
  },
  {
    id:9, slug:'coir-mulch-mat', name:'Coir Mulch Mat', tagline:'Thảm phủ gốc xơ dừa',
    img:'assets/p9-coir-mulch-mat.jpg',
    short:'Thảm phủ gốc cây hình tròn từ xơ dừa, giữ ẩm và kiểm soát cỏ dại.',
    desc:'Coir Mulch Mat là lớp bảo vệ hình tròn được làm từ sợi dừa, quấn quanh gốc cây. Chất liệu tự nhiên và có thể phân hủy sinh học này giúp giữ nước, kiểm soát cỏ dại và điều hòa nhiệt độ, tạo môi trường khỏe mạnh cho cây phát triển.',
    advantages:['Chất liệu bền vững','Ức chế cỏ dại','Giữ ẩm tốt','Điều hòa nhiệt độ','Kiểm soát xói mòn','Cải thiện độ thoáng khí','Tăng cường cấu trúc đất','Chống phân hủy nhanh','Bảo vệ khỏi hư hại do thiết bị cắt cỏ'],
    specs:[
      ['Đường kính','20 / 25 / 30 / 40 / 50 / 60cm'],
      ['Đường kính lỗ giữa','3 – 10cm'],
      ['Tùy chỉnh','Kích thước theo yêu cầu khách hàng'],
    ]
  },
  {
    id:10, slug:'coir-fiber-liner-roll', name:'Coir Fiber Liner Roll', tagline:'Cuộn lót xơ dừa cho chậu treo',
    img:'assets/p10-coir-fiber-liner-roll.jpg',
    short:'Cuộn lót liên tục từ sợi xơ dừa, dùng lót giỏ treo và chậu cây.',
    desc:'Coir Fiber Liner Roll là một cuộn dài liên tục làm từ sợi xơ dừa. Thường được dùng trong làm vườn, những cuộn này cung cấp lớp lót tự nhiên và có thể phân hủy sinh học cho giỏ treo và chậu cây. Cuộn lót xơ dừa giữ ẩm tuyệt vời và tạo môi trường thuận lợi cho cây phát triển, là lựa chọn phổ biến cho việc làm vườn bền vững và thân thiện môi trường.',
    advantages:['Chất liệu tự nhiên & bền vững','Khả năng phân hủy sinh học','Giữ nước tuyệt vời','Thoát nước tốt','Thúc đẩy phát triển bộ rễ','Ức chế cỏ dại','Điều hòa nhiệt độ','Giảm xói mòn đất','Độ bền cao, dùng lâu dài'],
    specs:[
      ['Chiều rộng','20 / 50 / 60 / 80 / 100 / 200cm'],
      ['Chiều dài','10m hoặc 20m'],
      ['Độ dày','3mm – 6mm – 10mm'],
      ['Tùy chỉnh','Kích thước theo yêu cầu khách hàng'],
    ]
  },
  {
    id:11, slug:'coir-net', name:'Coir Net', tagline:'Lưới xơ dừa chống xói mòn',
    img:'assets/p11-coir-net.jpg',
    short:'Lưới dạng mắt cáo từ xơ dừa, ổn định đất và chống xói mòn.',
    desc:'Coir Net là cấu trúc dạng lưới làm từ sợi xơ dừa. Được sử dụng trong làm vườn và kiểm soát xói mòn, những tấm lưới này cung cấp giải pháp tự nhiên và phân hủy sinh học để ổn định đất. Lưới xơ dừa giúp ngăn xói mòn bằng cách giữ đất tại chỗ trong khi vẫn cho phép thảm thực vật hình thành và phát triển — một giải pháp thân thiện môi trường thay thế cho vật liệu chống xói mòn tổng hợp.',
    advantages:['Tự nhiên & phân hủy sinh học','Giữ ẩm tốt','Điều hòa nhiệt độ','Bảo vệ hạt và đất khỏi dòng chảy mưa','Phân hủy sau 3–5 năm','Bảo vệ hạt khỏi chim, động vật, người đi lại','Kết cấu dệt thưa linh hoạt','Dễ dàng lắp đặt'],
    specs:[
      ['Kích thước','20m x 2m'],
      ['Kiểu dệt','Đơn-Đơn / Đôi-Đơn / Đôi-Đôi'],
      ['Đường kính dây','3.5 – 3.6mm'],
      ['Độ dày sợi','3–5m'],
      ['Khối lượng','200 / 400 / 700 / 900 gr/m²'],
    ]
  },
  {
    id:12, slug:'coir-shade-sail', name:'Coir Shade Sail', tagline:'Lưới che nắng xơ dừa',
    img:'assets/p12-coir-shade-sail.jpg',
    short:'Giải pháp che nắng bền vững 100% từ xơ dừa tự nhiên, thoáng khí.',
    desc:'Coir Shade Sail là giải pháp che nắng bền vững làm từ 100% sợi dừa tự nhiên. Được thiết kế để bảo vệ hiệu quả khỏi ánh nắng trong khi vẫn cho phép lưu thông không khí, sản phẩm giúp giảm tích tụ nhiệt và tạo không gian ngoài trời thoải mái. Bền, phân hủy sinh học và thân thiện môi trường, lưới che xơ dừa lý tưởng cho vườn, sân hiên, quán cà phê, khu nghỉ dưỡng, nhà kính và các dự án cảnh quan hướng đến vẻ đẹp tự nhiên.',
    advantages:['Giải pháp che nắng tự nhiên & thân thiện môi trường','Bền, chịu được thời tiết','Lưu thông không khí và thông gió tuyệt vời','Phân hủy sinh học & bền vững','Phù hợp cho vườn, sân hiên, quán cà phê, khu nghỉ dưỡng'],
    specs:[
      ['Kích thước','2x3m / 3x3m / 3x4m / 4x4m / 4x6m / 5x5m / 5x6m / 8x8m / 3x3x3m / 4x4x4m / 5x5x5m hoặc theo yêu cầu'],
      ['Hình dáng','Chữ nhật, Vuông, Tam giác'],
      ['Móc treo','Móc thép hoặc móc xơ dừa'],
      ['Khối lượng','650 – 700 gsm'],
    ]
  },
  {
    id:13, slug:'bamboo-stake', name:'Bamboo Stake', tagline:'Cọc tre làm giàn đỡ cây',
    img:'assets/p13-bamboo-stake.jpg',
    short:'Cọc tre mảnh, chắc chắn, hỗ trợ cây trồng đứng thẳng và chống gãy.',
    desc:'Bamboo Stake là một thanh dài mảnh làm từ tre, thường được dùng trong làm vườn và nghề trồng trọt. Những chiếc cọc này hỗ trợ cây trồng, giúp cây mọc thẳng đứng và ngăn ngừa việc bị uốn cong hoặc gãy. Nhẹ nhưng chắc chắn, cọc tre được ưa chuộng nhờ đặc tính tự nhiên và bền vững.',
    advantages:['Tính bền vững','Độ bền và chắc chắn','Dễ cắt và tạo hình','Kháng sâu bệnh và mục nát','Chi phí hợp lý','Trọng lượng nhẹ','Dễ lắp đặt','Có thể tái sử dụng','Đa dạng kích thước'],
    specs:[
      ['Chiều cao','50–100 / 120 / 150 / 200 / 300cm'],
      ['Đường kính','D8 – 18mm'],
      ['Tùy chỉnh','Kích thước và màu sắc theo yêu cầu'],
    ]
  },
];