// // let f_data;
// // $(document).ready(() => {
// //     let data = {reportId: 'Kolkata-EPS-780'};
// //     fetch('/get_selected_reportdata', {method: 'POST', body: JSON.stringify(data)}).then(response => {
// //             if(response.ok){
// //                 return response.json();
// //             }
// //             throw new Error('Request Failed');
// //     }, networkError => {
// //         console.log(networkError);
// //     }).then(jsonArr => {
// //         f_data = jsonArr;
// //         console.log(jsonArr);
// //     })
// // });


// var generateData = function(amount) {
//   var result = [];
//   var data = {
//     coin: "100",
//     game_group: "GameGroup",
//     game_name: "XPTO2",
//     game_version: "25",
//     machine: "20485861",
//     vlt: "0"
//   };
//   for (var i = 0; i < amount; i += 1) {
//     data.id = (i + 1).toString();
//     result.push(Object.assign({}, data));
//   }
//   return result;
// };
//
// function createHeaders(keys) {
//   var result = [];
//   for (var i = 0; i < keys.length; i += 1) {
//     result.push({
//       id: keys[i],
//       name: keys[i],
//       prompt: keys[i],
//       width: 65,
//       align: "center",
//       padding: 0
//     });
//   }
//   return result;
// }
//
// var headers = createHeaders([
//   "id",
//   "coin",
//   "game_group",
//   "game_name",
//   "game_version",
//   "machine",
//   "vlt"
// ]);
//
$("#export_btn").click(function(){
		// $('table').tableExport({type:'excel',
         //                mso: {fileFormat:'xmlss',
         //                      worksheetName: ['Table 1','Table 2', 'Table 3']}});
    $('table').tableExport({type:'pdf'});
})


