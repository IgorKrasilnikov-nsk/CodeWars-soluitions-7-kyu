/*
In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). 
Each of this triplets is translated into an amino-acid during a translation process to create proteins.

Input
In a single strand of DNA you find 3 Reading frames, take for example the following input sequence:
AGGTGACACCGCAAGCCTTATATTAGC

Output
For the output we are going to take the combinations and show them in the following manner:

Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C

For frame 1 split all of them in groups of three starting by the first base (letter).
For frame 2 split all of them in groups of three starting by the second base (letter) but having the first base (letter) at the beggining.
For frame 3 split all of them in groups of three starting by the third letter, but having the first and second bases (letters) at the beginning in the same order.

Series
1.Decompose single strand DNA into 3 reading frames
2.Decompose double strand DNA into 6 reading frames
3.Translate DNA to protein in 6 frames
*/

var decomposeSingleStrand= function( singleStrand){
  let frame1 = singleStrand.match(/.{3}/g);
  let frame2 = singleStrand.slice(0,1) +' '+ singleStrand.slice(1).match(/.{1,3}/g);
  let frame3 = singleStrand.slice(0,2) +' '+ singleStrand.slice(2).match(/.{1,3}/g);
  return (`Frame 1: ${frame1}\nFrame 2: ${frame2}\nFrame 3: ${frame3}`).replace(/[,]+/g, ' ');
}
