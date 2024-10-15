function soma(num1,num2){
    return num1+num2;

}

console.log(soma(2,3));

function multiplicação(num1,num2){
    return num1*num2;
}

console.log(multiplicação(6,6));

function areaquadrado(lado){
    return lado*lado;
}

console.log(areaquadrado(9));

function areatrapezio(num1, num2, num3) {
    return (num1 + num2) * num3 / 2;
}

console.log(areatrapezio(6,17,6));

let numero=parseInt(prompt('manda um numero'));
let numeoro1=parseInt(prompt('+1'));
let numero2=parseInt(prompt('+2'));

function media(x,y,z){
    return (x+y+z);
}


let i=0;
while(i<['andrew', 'caio', 'marina', 'mel', 'felipe_lin', 'joao', 'julia', 'felipe_mayer', 'arthur', 'monise', 'aaron', 'vinicius', 'maria', 'nicolas', 'luiz', 'lucas', 'izabela', 'giovana', 'danilo', 'lais', 'rhianne'].length){
console.log(i);
console.log(['andrew', 'caio', 'marina', 'mel', 'felipe_lin', 'joao', 'julia', 'felipe_mayer', 'arthur', 'monise', 'aaron', 'vinicius', 'maria', 'nicolas', 'luiz', 'lucas', 'izabela', 'giovana', 'danilo', 'lais', 'rhianne'][i]);
i+1;
}

for (let i=0; i=['andrew', 'caio', 'marina', 'mel', 'felipe_lin', 'joao', 'julia', 'felipe_mayer', 'arthur', 'monise', 'aaron', 'vinicius', 'maria', 'nicolas', 'luiz', 'lucas', 'izabela', 'giovana', 'danilo', 'lais', 'rhianne'].length;i++){
    console.log(i);
    console.log(['andrew', 'caio', 'marina', 'mel', 'felipe_lin', 'joao', 'julia', 'felipe_mayer', 'arthur', 'monise', 'aaron', 'vinicius', 'maria', 'nicolas', 'luiz', 'lucas', 'izabela', 'giovana', 'danilo', 'lais', 'rhianne'][i]);
}
let idade=18;
if(idade<18){
    console.log('ilegal dirijir')

}
else{
    console.log('ilegal dirijir')
}

function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className='cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao">
    <h3>categoria</h3>
    <div class="conteudo-cartao">
        <p>pergunta</p>
    </div>
    <div class="conteudo-cartao">
        <p>resposta</p>
    </div>
</div>
    `
    container.appendChild(cartao)
}