# H

## Hard Fork (fr : Fourche dure)

Une mise à niveau du protocole d’une blockchain qui n’est pas rétrocompatible et qui exige que les participants adoptent les nouvelles règles pour rester sur la même chaîne. Si aucun consensus n’est atteint, un hard fork peut entraîner une séparation permanente en plusieurs blockchains distinctes, comme cela s’est produit avec Bitcoin et Bitcoin Cash.

→ [About hard forks — Cardano Docs](https://docs.cardano.org/about-cardano/evolution/about-hard-forks)

## Hard Fork Combinator (fr : Combinateur de fourche dure)

Le Hard Fork Combinator est le mécanisme propre à Cardano qui permet de combiner plusieurs versions du protocole au sein d’une seule blockchain. Il permet des transitions fluides entre les ères, par exemple de Byron à Shelley ou de Shelley à Allegra, sans provoquer de fragmentation du réseau ni d’interruption.

## Hard Fork Initiation (fr : Initiation d’une fourche dure)

Un type d’action de gouvernance défini par la CIP-1694, qui programme et déclenche une fourche dure de Cardano au moyen d’un vote sur la chaîne.

→ [CIP-1694 — Spécification officielle](https://cips.cardano.org/cip/CIP-1694)

## Hash Function (fr : Fonction de hachage)

Un algorithme cryptographique qui convertit des données d’entrée de taille quelconque en une sortie de taille fixe appelée _hash_ (empreinte). Dans les blockchains, les fonctions de hachage servent à sécuriser les données, à relier les blocs entre eux et à vérifier les transactions. Même de petites modifications des données d’entrée produisent des empreintes très différentes. Cardano utilise principalement les fonctions de hachage cryptographiques Blake2b et SHA-256.

## Hashing (fr : Hachage)

Le processus consistant à appliquer une fonction de hachage cryptographique à des données d’entrée pour générer une sortie de taille fixe appelée _hash_ (empreinte). Dans les blockchains, le hachage sécurise les transactions et les blocs, garantit l’intégrité des données et rend pratiquement impossible la modification de données passées sans que celle-ci soit détectée.

## Hash Rate (fr : Taux de hachage)

La mesure de la puissance de calcul utilisée dans les blockchains fondées sur la preuve de travail (_Proof of Work_, PoW), comme Bitcoin, pour résoudre des énigmes cryptographiques et sécuriser le réseau.

## Haskell

Un langage de programmation fonctionnel reconnu pour son système de types fort et son approche fondée sur des principes mathématiques. Le protocole central de Cardano est largement implémenté en Haskell afin de favoriser un haut niveau d’assurance et de fiabilité dans les applications blockchain.

→ [Site officiel de Haskell](https://www.haskell.org/)

## Hierarchical Deterministic Wallets (HD Wallets) (fr : Portefeuilles hiérarchiques déterministes)

Les portefeuilles hiérarchiques déterministes génèrent un arbre structuré de clés privées et publiques à partir d’une seule phrase de récupération. Cela permet aux utilisateurs de gérer plusieurs adresses de manière sécurisée et pratique, puisque toutes les clés et adresses peuvent être restaurées à partir de la phrase de récupération d’origine.

## Hot Wallet (fr : Portefeuille connecté)

Un portefeuille connecté à Internet, qui facilite les transactions fréquentes, mais qui est davantage exposé aux risques de sécurité. Les portefeuilles mobiles, de bureau ou accessibles sur le Web qui conservent des clés privées dans un environnement connecté en sont des exemples.

## Hybrid Blockchain (fr : Blockchain hybride)

Une blockchain hybride combine des éléments de blockchains publiques sans permission et de blockchains privées avec permission. Elle permet de rendre certaines données ou fonctions ouvertes et transparentes, tout en réservant d’autres éléments aux participants autorisés. Ce modèle est souvent utilisé pour concilier transparence, efficacité et confidentialité dans les cas d’usage des entreprises ou des consortiums.

## Hydra

Une solution de mise à l’échelle de couche 2 conçue pour Cardano, qui vise à augmenter le débit et l’efficacité en traitant les transactions hors chaîne dans des unités appelées _Hydra Heads_. Ces têtes Hydra permettent des transactions rapides et peu coûteuses, tout en assurant le règlement final sur la chaîne principale de Cardano. Elles peuvent notamment prendre en charge des applications telles que les micropaiements et les interactions en temps réel.

→ [Documentation officielle du protocole Hydra](https://hydra.family/head-protocol/)

## Hydra Head (fr : Tête Hydra)

Une tête Hydra est un mini-registre hors chaîne du protocole de couche 2 Hydra de Cardano, dans lequel un petit groupe de participants peut traiter des transactions rapidement et à faible coût. L’état final de la tête peut ensuite être réglé de manière sécurisée sur la chaîne principale de Cardano.

→ [Hydra Head Protocol — Documentation officielle](https://hydra.family/head-protocol/)
