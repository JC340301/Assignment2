// JavaScript Document

function subTotal() {
		var bw1 = document.getElementById('q1').value;	
		var bwI1 = document.getElementById('price1').value;
		var result1 = document.getElementById('result1');	
		var sub1 = bw1 * bwI1;
		result1.value = sub1.toFixed(2);	
		
		var bw2 = document.getElementById('q2').value;	
		var bwI2 = document.getElementById('price2').value;
		var result2 = document.getElementById('result2');	
		var sub2 = bw2 * bwI2;
		result2.value = sub2.toFixed(2);
		
		var bw3 = document.getElementById('q3').value;	
		var bwI3 = document.getElementById('price3').value;
		var result3 = document.getElementById('result3');	
		var sub3 = bw3 * bwI3;
		result3.value = sub3.toFixed(2);
		
		var bw = document.getElementById('q4').value;	
		var bwI = document.getElementById('price4').value;
		var result4 = document.getElementById('result4');	
		var sub4 = bw * bwI;
		result4.value = sub4.toFixed(2);
		
		var bw = document.getElementById('q5').value;	
		var bwI = document.getElementById('price5').value;
		var result5 = document.getElementById('result5');	
		var sub5 = bw * bwI;
		result5.value = sub5.toFixed(2);
		
		var bw = document.getElementById('q6').value;	
		var bwI = document.getElementById('price6').value;
		var result6 = document.getElementById('result6');	
		var sub6 = bw * bwI;
		result6.value = sub6.toFixed(2);
		
		var bw = document.getElementById('q7').value;	
		var bwI = document.getElementById('price7').value;
		var result7 = document.getElementById('result7');	
		var sub7 = bw * bwI;
		result7.value = sub7.toFixed(2);
		
		var bw = document.getElementById('q8').value;	
		var bwI = document.getElementById('price8').value;
		var result8 = document.getElementById('result8');	
		var sub8 = bw * bwI;
		result8.value = sub8.toFixed(2);
		
		var bw = document.getElementById('q9').value;	
		var bwI = document.getElementById('price9').value;
		var result9 = document.getElementById('result9');	
		var sub9 = bw * bwI;
		result9.value = sub9.toFixed(2);
		
		var bw = document.getElementById('q10').value;	
		var bwI = document.getElementById('price10').value;
		var result10 = document.getElementById('result10');	
		var sub10 = bw * bwI;
		result10.value = sub10.toFixed(2);
		
		var bw = document.getElementById('q11').value;	
		var bwI = document.getElementById('price11').value;
		var result11 = document.getElementById('result11');	
		var sub11 = bw * bwI;
		result11.value = sub11.toFixed(2);
		
		var bw = document.getElementById('q12').value;	
		var bwI = document.getElementById('price12').value;
		var result12 = document.getElementById('result12');	
		var sub12 = bw * bwI;
		result12.value = sub12.toFixed(2);
		
		var bw = document.getElementById('q13').value;	
		var bwI = document.getElementById('price13').value;
		var result13 = document.getElementById('result13');	
		var sub13 = bw * bwI;
		result13.value = sub13.toFixed(2);
		
		var bw = document.getElementById('q14').value;	
		var bwI = document.getElementById('price14').value;
		var result14 = document.getElementById('result14');	
		var sub14 = bw * bwI;
		result14.value = sub14.toFixed(2);
		
		var bw = document.getElementById('q15').value;	
		var bwI = document.getElementById('price15').value;
		var result15 = document.getElementById('result15');	
		var sub15 = bw * bwI;
		result15.value = sub15.toFixed(2);
		
		var bw = document.getElementById('q16').value;	
		var bwI = document.getElementById('price16').value;
		var result16 = document.getElementById('result16');	
		var sub16 = bw * bwI;
		result16.value = sub16.toFixed(2);
		
		//total of all the items selected in the order form
		var total = document.getElementById('total');
        var sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + sub13 + sub14 + sub15 + sub16;
        total.value = sum;
 }
