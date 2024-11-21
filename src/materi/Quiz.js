// import React, { useState } from 'react';
// import './Quiz.css';

// function Quiz() {
//   const questions = [
//     {
//       question: "Apa yang dimaksud dengan reaksi redoks?",
//       options: [
//         "Reaksi yang melibatkan perpindahan elektron",
//         "Reaksi yang hanya melibatkan perpindahan proton",
//         "Reaksi yang menghasilkan energi",
//         "Reaksi yang melibatkan gas",
//       ],
//       answer: "Reaksi yang melibatkan perpindahan elektron",
//       explanation: "Reaksi redoks melibatkan perpindahan elektron antara dua zat, satu teroksidasi dan satu lagi tereduksi.",
//     },
//     {
//       question: "Apa yang dimaksud dengan elektrolisis?",
//       options: [
//         "Proses kimia yang menghasilkan arus listrik",
//         "Proses pemisahan senyawa dengan listrik",
//         "Reaksi spontan dalam sel galvani",
//         "Proses oksidasi tanpa reduksi",
//       ],
//       answer: "Proses pemisahan senyawa dengan listrik",
//       explanation: "Elektrolisis adalah proses pemisahan senyawa kimia dengan menggunakan arus listrik.",
//     },
//     {
//       question: "Apa itu entalpi?",
//       options: [
//         "Jumlah panas dalam reaksi kimia pada tekanan tetap",
//         "Jumlah panas dalam reaksi kimia pada volume tetap",
//         "Jumlah energi kinetik dalam reaksi kimia",
//         "Jumlah energi potensial dalam reaksi kimia",
//       ],
//       answer: "Jumlah panas dalam reaksi kimia pada tekanan tetap",
//       explanation: "Entalpi adalah jumlah panas yang ada dalam suatu sistem pada tekanan tetap.",
//     },
//     {
//       question: "Apa itu katalis?",
//       options: [
//         "Zat yang memperlambat reaksi kimia",
//         "Zat yang mempercepat reaksi kimia tanpa habis bereaksi",
//         "Zat yang mengubah hasil reaksi kimia",
//         "Zat yang hanya bereaksi dengan air",
//       ],
//       answer: "Zat yang mempercepat reaksi kimia tanpa habis bereaksi",
//       explanation: "Katalis adalah zat yang mempercepat reaksi kimia tanpa habis dalam reaksi tersebut.",
//     },
//     {
//       question: "Apa yang dimaksud dengan hukum kekekalan massa?",
//       options: [
//         "Jumlah massa sebelum dan sesudah reaksi adalah sama",
//         "Jumlah energi sebelum dan sesudah reaksi adalah sama",
//         "Jumlah zat sebelum dan sesudah reaksi adalah sama",
//         "Jumlah volume sebelum dan sesudah reaksi adalah sama",
//       ],
//       answer: "Jumlah massa sebelum dan sesudah reaksi adalah sama",
//       explanation: "Hukum kekekalan massa menyatakan bahwa massa zat sebelum dan sesudah reaksi kimia adalah tetap.",
//     },
//     {
//       question: "Apa itu larutan elektrolit?",
//       options: [
//         "Larutan yang dapat menghantarkan listrik",
//         "Larutan yang tidak dapat menghantarkan listrik",
//         "Larutan yang mengandung alkohol",
//         "Larutan yang mengandung protein",
//       ],
//       answer: "Larutan yang dapat menghantarkan listrik",
//       explanation: "Larutan elektrolit adalah larutan yang dapat menghantarkan listrik karena adanya ion-ion yang bergerak bebas.",
//     },
//     {
//       question: "Apa yang dimaksud dengan pH larutan?",
//       options: [
//         "Tingkat keasaman atau kebasaan larutan",
//         "Konsentrasi ion hidrogen dalam larutan",
//         "Jumlah ion dalam larutan",
//         "Tingkat oksidasi dalam larutan",
//       ],
//       answer: "Tingkat keasaman atau kebasaan larutan",
//       explanation: "pH adalah ukuran konsentrasi ion hidrogen dalam larutan, menunjukkan tingkat keasaman atau kebasaan larutan.",
//     },
//     {
//       question: "Apa itu isotop?",
//       options: [
//         "Atom yang memiliki jumlah neutron berbeda tetapi proton sama",
//         "Atom yang memiliki jumlah elektron berbeda tetapi neutron sama",
//         "Atom yang memiliki jumlah proton berbeda tetapi elektron sama",
//         "Atom yang memiliki jumlah proton dan neutron berbeda",
//       ],
//       answer: "Atom yang memiliki jumlah neutron berbeda tetapi proton sama",
//       explanation: "Isotop adalah atom dari unsur yang sama yang memiliki jumlah neutron berbeda tetapi jumlah proton yang sama.",
//     },
//     {
//       question: "Apa yang dimaksud dengan reaksi eksoterm?",
//       options: [
//         "Reaksi yang melepaskan panas",
//         "Reaksi yang menyerap panas",
//         "Reaksi yang terjadi pada suhu rendah",
//         "Reaksi yang menghasilkan cahaya",
//       ],
//       answer: "Reaksi yang melepaskan panas",
//       explanation: "Reaksi eksoterm adalah reaksi yang melepaskan panas ke lingkungan.",
//     },
//     {
//       question: "Apa itu molekul?",
//       options: [
//         "Gabungan dua atau lebih atom yang terikat secara kimia",
//         "Atom tunggal yang memiliki muatan",
//         "Zat yang tidak bisa dipecah menjadi zat yang lebih sederhana",
//         "Unit terkecil dari unsur yang tidak bisa bereaksi",
//       ],
//       answer: "Gabungan dua atau lebih atom yang terikat secara kimia",
//       explanation: "Molekul adalah gabungan dua atau lebih atom yang terikat secara kimia.",
//     },
//     {
//       question: "Apa yang dimaksud dengan larutan hipotonik?",
//       options: [
//         "Larutan dengan konsentrasi zat terlarut lebih rendah daripada larutan lain",
//         "Larutan dengan konsentrasi zat terlarut lebih tinggi daripada larutan lain",
//         "Larutan yang memiliki tekanan osmosis lebih tinggi",
//         "Larutan yang mengandung protein",
//       ],
//       answer: "Larutan dengan konsentrasi zat terlarut lebih rendah daripada larutan lain",
//       explanation: "Larutan hipotonik adalah larutan dengan konsentrasi zat terlarut lebih rendah dibandingkan larutan lainnya.",
//     },
//     {
//       question: "Apa yang dimaksud dengan hukum gas ideal?",
//       options: [
//         "Hubungan antara tekanan, volume, dan suhu gas ideal",
//         "Hubungan antara tekanan dan volume gas pada suhu tetap",
//         "Hubungan antara volume dan suhu gas pada tekanan tetap",
//         "Hubungan antara tekanan dan suhu gas pada volume tetap",
//       ],
//       answer: "Hubungan antara tekanan, volume, dan suhu gas ideal",
//       explanation: "Hukum gas ideal adalah persamaan yang menghubungkan tekanan, volume, dan suhu gas ideal.",
//     },
//     {
//       question: "Apa itu oksidasi?",
//       options: [
//         "Proses kehilangan elektron oleh zat",
//         "Proses penambahan elektron oleh zat",
//         "Proses penghilangan air dari senyawa",
//         "Proses pembentukan senyawa baru",
//       ],
//       answer: "Proses kehilangan elektron oleh zat",
//       explanation: "Oksidasi adalah proses kehilangan elektron oleh suatu zat.",
//     },
//     {
//       question: "Apa yang dimaksud dengan katalisis heterogen?",
//       options: [
//         "Katalisis yang melibatkan katalis dalam fase berbeda dengan reaktan",
//         "Katalisis yang melibatkan katalis dalam fase yang sama dengan reaktan",
//         "Katalisis yang menghasilkan produk yang sama",
//         "Katalisis yang tidak melibatkan katalis",
//       ],
//       answer: "Katalisis yang melibatkan katalis dalam fase berbeda dengan reaktan",
//       explanation: "Katalisis heterogen melibatkan katalis yang berada dalam fase berbeda dengan reaktan.",
//     },
//     {
//       question: "Apa itu gas mulia?",
//       options: [
//         "Unsur yang sangat reaktif",
//         "Unsur yang memiliki tingkat reaktivitas sangat rendah",
//         "Unsur yang hanya bereaksi dengan oksigen",
//         "Unsur yang selalu berbentuk padat",
//       ],
//       answer: "Unsur yang memiliki tingkat reaktivitas sangat rendah",
//       explanation: "Gas mulia adalah unsur yang memiliki tingkat reaktivitas kimia sangat rendah.",
//     },
//     {
//       question: "Apa yang dimaksud dengan penyangga asam?",
//       options: [
//         "Larutan yang menjaga pH tetap asam",
//         "Larutan yang menjaga pH tetap netral",
//         "Larutan yang menjaga pH tetap basa",
//         "Larutan yang tidak mempengaruhi pH",
//       ],
//       answer: "Larutan yang menjaga pH tetap asam",
//       explanation: "Penyangga asam adalah larutan yang mempertahankan pH tetap asam.",
//     },
//     {
//       question: "Apa yang dimaksud dengan titik leleh?",
//       options: [
//         "Suhu di mana zat berubah dari padat ke cair",
//         "Suhu di mana zat berubah dari cair ke padat",
//         "Suhu di mana zat berubah dari cair ke gas",
//         "Suhu di mana zat berubah dari gas ke cair",
//       ],
//       answer: "Suhu di mana zat berubah dari padat ke cair",
//       explanation: "Titik leleh adalah suhu di mana zat berubah dari padat menjadi cair.",
//     }
//   ];  


//   return (
//     <div className="quiz-container">
      
//     </div>
//   );
// }

// export default Quiz;
