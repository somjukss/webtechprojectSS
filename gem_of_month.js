function gem_month() {
    var x = document.forms["months"]["mymonth"].value;
    var image = document.getElementById("image");
    var test = document.getElementById("box-stone");
    
    if (x == "01") {
        
        document.getElementById("topic").innerHTML = "เดือนมกราคม : โกเมน";
        image.src = "image/c-stone/01genet.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;คนที่เกิดเดือนมกราคม จะเป็นคนจริงจัง เก็บความลับเก่ง มีความเห็นอกเห็นใจต่อผู้อื่น เจ้าความคิด เป็นผู้กระตือรือร้น รักความก้าวหน้า แม้จะเป็นไปอย่างช้าๆก็ตาม เป็นคนหนักเอาเบาสู้และมักจะประสบความสำเร็จ แต่มักจะวิตกกังวล จึงส่งผลเสียต่อสุขภาพ และมักจะมีอาการเจ็บป่วยแบบผู้สูงอายุ เช่น ปวดข้อ ปวดเข่า ปวดหลัง เป็นต้น อัญมณีที่เชื่อกันว่าจะช่วยให้ผู้สวมใส่มีสุขภาพที่ดีจึงเป็นอัญมณีประจำราศีนี้ นั่นคือ โกเมน(Garnet) ที่นิยมกันมากคือ สีน้ำตาลแดง สีส้ม สีเขียว ความหมายคือ มีความสม่ำเสมอ มั่นคงเชื่อกันว่า ผู้ใดมีโกเมนไว้ในครอบครองจะทำให้แคล้วคลาด จากอันตราย มีอายุยืนยาวและเป็นสัญลักษณ์แห่งพลังทางเพศ"
        return false;
    }
    if (x == "02") {
        document.getElementById("topic").innerHTML = "เดือนกุมภาพันธ์ : แอเมทิสต์";
        image.src = "image/c-stone/02Amethyst.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;ชาวกุมภาพันธ์ รักอิสระ รักพวกพ้อง ชอบวางแผนสำหรับอนาคต มักไม่คิดถึงสิ่งที่ผ่านมาแล้ว ชอบการแสดงออก ทำอะไรตามความคิดของตัวเอง ฉลาดหลักแหลม มีความคิดก้าวหน้า อัญมณีประจำราศีคือแอเมทิสต์ (Amethyst) พลอยสีม่วง เป็นพลอยแห่งความมีสติ บอกถึง ความจริงใจและความซื่อสัตย์ ผู้ใดได้ครอบครองแอมะทิสต์จะช่วยให้รักษาจิตใจ ให้สงบและเข้มแข็ง เป็นเครื่องรางป้องกันฝันร้ายและโชคร้ายต่างๆ และช่วยคุ้มครองผู้ที่เดินทางอยู่เสมอ"
        return false;
    }
    if (x == "03") {
        document.getElementById("topic").innerHTML = "เดือนมีนาคม : อะความมารีน";
        image.src = "image/c-stone/03Aquamarine.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;คนเดือนนี้เป็นคนที่มีอารมณ์อ่อนไหวง่าย ชอบเสียสละ เห็นอกเห็นใจผู้อื่น ชอบทำงานที่ละเอียดอ่อน บาง คนอาจมีคุณลักษณะลึกลับ พลอยประจำเดือนมีนาคม คือ อความารีน (Aquamarine) พลอยที่มีตั้งแต่สีเขียวน้ำทะลจนถึงสีฟ้าเข้ม เป็นอัญมณีที่นำความสมบูรณ์มาให้ ช่วยให้จิตใจสงบ ถือเป็นอัญมณีนำโชคของชาวเรือและชาวทะเล ช่วยบรรเทาอาการเมาคลื่นและอุบัติภัยได้และยังเชื่อกันว่าถ้าสามีมอบอัญมณีชนิดนี้ ให้เป็นของขวัญวันแต่งงานแก่ภรรยาจะทำให้ชีวิตคู่ ยืนยาวและมีความสุข ดังนั้นอะความารีนสัญลักษณ์แห่งความสงบเยือกเย็น นอกจากอความารีนแล้วยังมี บลัดสโตน(Bloodstone) อาเมทิสต์ (Amethyst) ที่มีสีม่วง สีของราศีมีน หยก (Jade) มุกดาหาร (Moonstone)"
        return false;
    }
    if (x == "04") {
        document.getElementById("topic").innerHTML = "เดือนเมษายน : เพชร";
        image.src = "image/c-stone/04Diamond.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;อัญมณีคือ เพชร (Diamond) ซึ่งเป็นสัญลักษณ์แห่งชัยชนะและความสำเร็จผู้ใดมีเพชร ไว้ครอบครองจะทำให้ร่ำรวย มีอำนาจ เป็นที่เกรงขาม ชีวิตรุ่งเรือง และชนะศัตรูทุกมวล ซึ่งดูแล้วเหมาะกับนักริเริ่ม นักบุกเบิกที่แข็งแกร่งอย่างชาวเมษ ที่มีความทะเยอทะยาน มีลักษณะของความเป็นผู้นำ มีอารมณ์ร้อน หุนหันพลันแล่น หัวแข่งมีความเป็นตัวของตัวเองสูง แต่ก็เป็นคนผูกมิตรกับคนอื่นได้ง่าย ชอบการเปลี่ยนแปลง ไม่ชอบอยู่นิ่ง ชอบค้นคว้าหาคำตอบทุกสิ่งด้วยตัวเอง อัญมณีที่มีสีขาวใสอย่างพลอยเพทายขาว (White Zircon) ก็จัดเป็นอัญมณีประจำเดือนนี้เช่นกัน เนื่องจากสีขาวใสเทียบได้กับทารกเกิดใหม่ที่ยังบริสุทธิ์อยู่นั่นเอง"
        return false;
    }
    if (x == "05") {
        document.getElementById("topic").innerHTML = "เดือนพฤษภาคม : มรกต";
        image.src = "image/c-stone/05Emerald.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;เป็นคนเข้ากับคนอื่นได้ง่าย มีอารมณ์เยือกเย็น โกรธยาก แต่ถ้าโกรธแล้วรุนแรงมาก เป็นคนรักครอบครัว ขยัน ชอบบริการ เป็นศิลปินรักดนตรี มีจิตใจเข้มแข็ง มรกต (Emerald) เป็นอัญมณีประจำเดือนพฤษภาคม เป็นสัญลักษณ์ของความอุดมสมบูรณ์ ร่ำรวย ร่มเย็น เชื่อกันว่ารักษาโรคบิด และเป็นยาระบายได้ในความหมายทางด้านสรีระ มรกตเป็นแร่ธรรมชาติที่ช่วยบำรุงสายตา และในความหมายทางด้านพลังจิต มรกตส่งเสริมการมองเห็นภาพอนาคต ส่วนหยก (Jade) ทำให้มีสุขภาพแข็งแรง อายุยืนยาว ค้าขายรุ่งเรื่อง"
        return false;
    }
    if (x == "06") {
        document.getElementById("topic").innerHTML = "เดือนมิถุนายน : มุกดาหาร,<br> เจ้าสามสี, ไข่มุก";
        image.src = "image/c-stone/06Moonstone.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;สำหรับชาวราศีมิถุนเป็นคนที่มีสองบุคลิกในตัวเอง ถ้าภายนอกเป็นคนแข็งหรือหัวดื้อ ภายในอาจใจอ่อนอย่างมากๆ มีความคิดสร้างสรรค์ ไม่เห็นแก่ตัว มีความทรงจำดีอย่างน่าประหลาด Alexandrite หรือ”เจ้าสามสี”คืออัญมณีหลักของราศีนี้ เป็นพลอยที่สามารถเปลี่ยนสีได้ตามแสงที่ตกกระทบ เชื่อว่าสามารถกระตุ้นพลังงานและเพิ่มความมีชีวิตชีวาให้กับผู้สวมใส่ นอกจากนี้อัญมณีสีขาวซีด หรือขาวขุ่น ก็เป็นอัญมณีประจำราศีมิถุนเช่นกัน ได้แก่ มุกดาหาร เชื่อว่า ผู้ใดมีไว้เพื่อครอบครอง จะทำให้โชคดีเรื่องความรัก เป็นสัญลักษณ์ของความนุ่มนวลอ่อนโยน และขจัดพิษร้าย ป้องกันสัตว์ร้ายต่างๆ ไข่มุก เชื่อกันว่ารักษาสุขภาพและความเป็นหนุ่มสาวไว้ได้ (จึงมีผู้นำมาบริโภคด้วย) และไข่มุกยังเป็นลักษณะของความสง่างามและความบริสุทธิ์"
        return false;
    }
    if (x == "07") {
        document.getElementById("topic").innerHTML = "เดือนกรกฏาคม : ทับทิม";
        image.src = "image/c-stone/07Ruby.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;ทับทิม (Ruby) เป็นอัญมณีประจำเดือนกรกฏมาจากภาษาละตินคำว่า “Ruber” แปลว่า สีแดง จัดเป็นราชาหรือผู้นำแห่งอัญมณี เป็นเครื่องประดับแห่งเกียรติยศ มีอำนาจประหลาดในตัว ทำให้ผู้สวมใส่ประสบแต่สิ่งน่าพึงพอใจ เชื่อกันว่า ผู้ใดได้ครอบครองทับทิมจะทำให้มีอำนาจ สมหวังในเรื่องความรัก และชีวิตคู่จะมั่นคงยืนยาว อีกทั้งยังรักษาม้ามและตับได้ สปิเนล(Spinel) ก็ถูกนำมาใช้แทนทับทิมได้เช่นกัน โดยเฉพาะสปิเนลสีแดง ซึ่งหากดูเผินๆแล้วจะมีความคล้ายคลึงกับทับทิมมาก จะต่างตรงที่สปิเนลมีความวาว ความแข็ง และน้ำหนักน้อยกว่า แต่ราคาก็ต่ำกว่าเช่นกัน"
        return false;
    }
    if (x == "08") {
        document.getElementById("topic").innerHTML = "เดือนสิงหาคม : เพริดอต";
        image.src = "image/c-stone/08Peridot.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;คนที่เกิดเดือนสิงหาคม เป็นคนที่มีลักษณะเฉพาะตัว เป็นผู้วางเป้าหมายชีวิตด้วยตัวเอง สง่า เอาการเอางาน ซื่อสัตย์ กตัญญู กล้าหาญ เห็นอกเห็นใจผู้อื่น ทำหน้าที่ด้านการบริหารการปกครองได้ดี ไม่ย่อท้อต่ออุปสรรค Peridot มาจากภาษาฝรั่งเศส ดังนั้นที่ถูกจึงอ่านว่า “เพอริโดต์ เป็นอัญมณีประจำเดือนสิงหาคม เพริโดต์ถูกขุดพบครั้งแรกในเหมืองแห่งหนึ่งในสมัยอียิปต์โบราณ ชาวโรมันจะเรียกเพอริโดต์ ว่า “มรกตตอนกลางคืน(Evening emeraldมีคุณสมบัติในการขจัดความหดหู่ และความอิจฉา เหมาะที่จะนำมาใช้ในการสร้างเสริมพลังงานทางด้านจิตใจและตับ ทำให้จิตใจเข้มแข็งกล้าหาญ มีอำนาจทำให้ผู้สวมใส่มีอำนาจบารมียิ่งใหญ่"
        return false;
    }
    if (x == "09") {
        document.getElementById("topic").innerHTML = "เดือนกันยายน : ไพลิน";
        image.src = "image/c-stone/09Blue Sapphire.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;“ไพลิน” เป็นอัญมณีประจำเดือนกันยายน ที่รู้จักกันในฐานะอัญมณีสวรรค์ ตามประเพณีที่สืบทอดกันมาเชื่อว่า ไพลินเป็นตัวแทนของพระเจ้าที่พวกเขาเคารพและ ได้มอบให้กับพระเจ้าแผ่นดินและพระระดับสูงสุด เป็นเวลาหลายพันปีมาแล้ว ไพลินเป็นอัญมณีที่สื่อถึงความเมตตากรุณา และความเอื้อเฟื้อเผื่อแผ่ เชื่อว่าผู้ใดที่มีไพลินไว้ในครอบครอง จะทำให้เป็นที่รักใคร่เมตตา เป็นที่ศรัทธาของผู้อื่น ทำให้สมหวังในสิ่งที่ตั้งใจไว้ และจิตใจตั้งมั่นอยู่ในความดีงาม จึงเหมาะกับคนที่เกิดเดือนกันยายนที่เป็นคนที่รักความมีระเบียบ ทำงานอย่างมีระบบ คล่องแคล่ว หยิ่งในตัวเองและไม่เพิกเฉยต่อเหตุการณ์ใดๆ เป็นคนมีเสน่ห์ มักประสบความสำเร็จในหน้าที่การงาน"
        return false;
    }
    if (x == "10") {
        document.getElementById("topic").innerHTML = "เดือนตุลาคม : โอปอ, ทัวร์มาลีน";
        image.src = "image/c-stone/10Opal.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;คนที่เกิดเดือนตุลาคม เป็นคนเที่ยงธรรม รักสงบ ไม่เป็นคนก้าวร้าว เป็นคนสง่างาม มีเสน่ห์ จึงเหมาะกับ โอปอล (Opal) สัญลักษณ์แห่งความหวัง ความบริสุทธิ์ เป็นอัญมณีแห่งความรับรู้ทางจิตใจ จึงทำให้การรับรู้ต่อสิ่งรอบข้างสมบูรณ์ขึ้นผู้ใดได้ครอบครองโอปอล จะรู้เหตุล่วงหน้าว่าดีหรือร้ายอย่างไร และป้องกันภูติผีศาจ โดยเฉพาะโอปอลสีเข้ม หรือ แบล็กโอปอล และทัวร์มาลีนสีชมพู (Pink Tourmaline) คนโบราณเชื่อกันว่าทัวร์มาลีน จะนำโชคดีมาสู่เจ้าของ และยังสามารถรักษาโรคบางอย่างได้อีกด้วย"
        return false;
    }
    if (x == "11") {
        document.getElementById("topic").innerHTML = "เดือนพฤศจิกายน : บุษราคัม,<br> ซิทริน, โทแพซ";
        image.src = "image/c-stone/11Yellow Sapphire.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;คนที่เกิดเดือนพฤศจิกายน เป็นผู้มีความกล้าหาญ มีคารมคมคาย ทะเยอทะยาน มุ่งมั่นสู่เป้าหมายของตน แต่ก็สุภาพอ่อนโยน ทั้งในทางปฏิบัติและความรู้สึก จึงคู่กับ บุษราคัม บุษราคัม หรือ ซิทริน (Citrine) มีสีเหลืองทอง มีความสัมพันธ์กับดวงอาทิตย์ และยังส่งเสริมการตัดสินใจในทางที่ถูก ทั้งยังช่วยเพิ่มความสามารถในการติดต่อสื่อสารเพิ่มความกระปรี้กระเปร่า ให้กำลังใจและความเชื่อมั่น และ โทแพซ (Topaz) ที่พบในท้องตลาดจะมีสีฟ้า เป็นอัญมณีที่นำความโชคดีมาสู่เจ้าของ เป็นที่รักใคร่แก่ผู้พบเห็น ปกป้องคุ้มครองผู้ส่วมใส่ให้พ้นจากอันตราย ทำให้ชีวิตรุ่งเรืองและอุดมสมบูรณ์"
        return false;
    }
    if (x == "12") {
        document.getElementById("topic").innerHTML = "เดือนธันวาคม : เทอร์คอยซ์,<br> เพทาย";
        image.src = "image/c-stone/12Turquoise.jpg";
        test.style = "background-color:  rgba(192, 179, 137, 0.88);width: 53%;height: 110%;padding: 1vh;margin-bottom: 7%;clip-path: polygon(22% 0%, 78% 0%, 100% 30%, 100% 70%, 78% 100%, 22% 100%, 0% 70%, 0% 30%);";
        document.getElementById("c-text").innerHTML = "&emsp;&emsp;ชาวธันวาคม บุคคลิกจะหุนหันพลันแล่น ทำอะไรรวดเร็วเหมือนลูกธนู เป็นคนตรง พูดอย่างใจคิด ไม่กลัวใคร ตัดสินใจดี มองโลกในแง่ดี เทอร์ควอยส์ หินสีเขียวน้ำทะเล และ เพทายสีฟ้า ถูกจัดเป็นอัญมณีของราศีนี้ พลอยทั้งสองชนิดนี้ หมายถึง ความร่ำรวยและความมั่งคั่ง เทอร์ควอยส์ยังมีคุณสมบัติด้านความรักความเมตตา และช่วยเสริมสร้างสติปัญญา คนโบราณเชื่อว่าเทอร์คอยซ์เป็นหินแห่งความโชคดี และถูกนำไปใช้ในพิธีกรรมทางไสยศาสตร์ ถ้าแร่เทอร์คอยซ์เปลี่ยนสีจะเป็นการเตือนอันตรายของผู้สวมใส่"
        return false;
    }


}