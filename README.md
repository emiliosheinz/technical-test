# Teste técnico

A seguir você encontrará instruções para realizar este teste técnico. Caso haja qualquer dúvida durante o processo envie um e-mail para [emilio.heinzmann@cwi.com.br](mailto:emilio.heinzmann@cwi.com.br)

## Técnologias
É preferível que você use as tecnologias listadas a baixo para resolver os problemas propostos pelo nosso time, são elas que usamos em 90% do nosso tempo: 
- ReactJS
- TypeScript
- NextJS
- Alguma ferramenta de estilização da sua escolha

> "😪 Ahhh, nunca usei TypeScript, essa vaga não é pra mim!"

Calma lá! Não tem problema nenhum. Estamos buscando pessoas que saibam resolver problemas. Nesse caso tu pode utilizar o que tu tem domínio que a gente vai avaliar da mesma forma 😉

## Como enviar a solução para nós

1. Faça um [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) desse repositório.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) o seu fork na sua máquina.
3. Desenvolva a solução do problema.
4. Suba o código escrito no repositório.
5. Envie o link do repositório para nós. // TODO: Verificar como isso pode ser feito

## O será avaliado
- Qualidade do código
- Componentização
- Fidelidade ao layout

## O que iremos disponibilizar
- Layout para todas as telas e estados da aplicação
- Uma API para consulta dos dados necessários para desenvolvimento do desafio

## O desafio

O objetivo desse desafio é criar uma pequena lojinha de [NFTs](https://www.google.com/search?q=O+que+%C3%A9+um+NFT%3F) onde teremos uma listagem dos NFTs disponíveis e a possibilidade de adicioná-los a uma carteira.

**Requisitos do software:**
- Ao acessar a home da aplicação o usuário deve ver uma listagem dos NFTs disponíveis para compra.
- Enquanto os NFTs estão sendo buscados da API um loader deve ser exibido.
- Caso ocorra algum erro ao buscar os NFTs um feedback deve ser dado ao usuário.
- O usuário pode adicionar um NFT a sua carteira. 
- Um NFT não podem ser adicionado mais de uma vez a carteira do usuário.
- Na listagem, cada NFT deve apresentar uma imagem, a coleção a qual ele pertence, o seu ID e o seu preço.
- No topo de todas as telas deve ser apresentado um Header. 
- O Header deve apresentar o Logo da loja e um link de acesso a carteira com um contador da quantidade de itens presentes nela.
- Ao clicar no logo da loja o usuário deve ser redirecionado para a Home. 
- Ao clicar na carteira o usuário deve ser redirecionado para a sua carteira.
- Quando a quantidade de itens na carteira do usuário for atualizada o contador no header deve ser atualizado também.
- Ao acessar a sua carteira o usuário deve visualizar os NFTs adicionados a ela.
- Na listagem de NFTs da carteira, cada NFT deve apresentar uma imagem, a coleção a qual ele pertence, seu ID, preço e um botão para removê-lo da carteira. 
- Ao pressionar o botão de remover o NFT da carteira o NFT deve ser removido e a listagem atualizada.
- A carteira deve também apresentar um resumo dos NFTs que estão sendo comprados.
- O resumo deve apresentar ID, preço em Ether e em Reais de cada NFT.
- O resumo deve apresentar o valor total, em Ether e Reais, da soma de todos os NFTs presentes na carteira.
- Ao recaregar qualquer página os itens presentes na carteira do usuário devem ser persistidos.