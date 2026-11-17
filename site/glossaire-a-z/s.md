# S

## SanchoNet

Le réseau de test de Cardano consacré à la gouvernance CIP-1694, où de nouvelles fonctionnalités et de nouveaux outils de gouvernance peuvent être testés.

## Saturation

Désigne le point auquel un pool de staking Cardano atteint la taille optimale pour la distribution des récompenses. La délégation à des pools sursaturés réduit les rendements, encourageant ainsi la répartition de la mise entre plusieurs pools.

## Scam (fr : Arnaque)

Un stratagème frauduleux conçu pour voler des fonds ou des informations personnelles, souvent en exploitant la confiance des utilisateurs ou leur manque de connaissances.

## Scalability (fr : Évolutivité)

Désigne la capacité d’un réseau blockchain à gérer des volumes de transactions croissants sans sacrifier la vitesse, la sécurité ou la décentralisation.

## Script Context (fr : Contexte du script)

Dans Cardano, les informations fournies à un contrat intelligent Plutus pendant son exécution, notamment les détails de la transaction. Ces informations garantissent que les contrats évaluent les conditions de manière déterministe.

## Scripting Layer (fr : Couche de scripts)

Désigne le composant comprenant le langage de programmation Plutus, dans lequel les contrats intelligents sont définis et exécutés.

## Securitization (fr : Titrisation)

La titrisation est le processus de conversion d’un actif en instrument financier négociable, souvent en regroupant cet actif dans une entité juridique dédiée et en émettant des titres de créance ou des parts correspondantes.

## Security (fr : Sécurité)

Dans les blockchains, la sécurité désigne les mesures qui protègent le réseau contre les attaques, la fraude ou les accès non autorisés. La sécurité d’une blockchain repose sur des techniques cryptographiques, des mécanismes de consensus et une architecture réseau visant à garantir l’intégrité des données et la résilience du système.

## Security Token (fr : Jeton financier)

Désigne un type de jeton représentant une participation dans un instrument financier ou un actif réglementé, comme des actions ou des obligations.

## Seed (fr : Graine cryptographique)

Une graine, ou phrase de récupération, est une séquence de mots qui encode les informations nécessaires à la récupération d’un portefeuille blockchain. Elle sert de clé maîtresse à partir de laquelle sont dérivées les clés privées et les adresses. Toute personne ayant accès à cette graine peut contrôler les jetons du portefeuille.

## Seed Phrase (fr : Phrase de récupération)

Une séquence de mots, généralement composée de 15 ou 24 mots sur Cardano, et parfois de 12 ou 27 mots, qui permet de restaurer un portefeuille compatible.

## Settlement Layer (fr : Couche de règlement)

Désigne le composant dans lequel se trouvent la fonction de registre et les règles correspondantes, permettant d’effectuer des transactions en ada. Il utilise le modèle eUTXO, dans lequel les transactions sont représentées par des entrées et des sorties.

## Sharding (fr : Partitionnement en fragments)

Une technique d’évolutivité dans laquelle une blockchain est divisée en partitions plus petites, appelées _shards_, qui traitent les transactions en parallèle. Cardano n’utilise pas le sharding et privilégie plutôt des solutions comme Hydra et les Input Endorsers.

## Shelley

La deuxième ère du développement de Cardano, axée sur la décentralisation. Shelley a introduit les pools de staking, la délégation et les récompenses de staking, faisant passer le réseau d’une production fédérée des blocs à une production assurée par la communauté.

## Sidechain (fr : Chaîne latérale)

Une blockchain distincte reliée à la chaîne principale, qui permet d’ajouter des fonctionnalités ou d’expérimenter de nouvelles possibilités sans affecter le réseau principal.

## Slashing (fr : Pénalité de mise)

Un mécanisme de pénalité utilisé dans certaines blockchains à preuve d’enjeu, dans lequel les validateurs qui se comportent de manière incorrecte perdent une partie de leur mise. Cardano n’utilise pas le slashing.

## Slot (fr : Créneau)

Un intervalle de temps fixe pendant lequel un bloc peut être produit. Les créneaux sont regroupés en époques, et des responsables de créneau sont sélectionnés pour créer des blocs pendant les créneaux qui leur sont attribués.

## Slot Leader (fr : Responsable de créneau)

Le pool de staking choisi par le protocole Ouroboros pour produire un bloc pendant un créneau donné. Sa sélection repose sur la distribution de la mise et sur un mécanisme d’aléa vérifiable.

## Smart Contract (fr : Contrat intelligent)

Un code autonome déployé sur une blockchain, qui exécute automatiquement des actions lorsque les conditions programmées sont remplies. Sur Cardano, les contrats intelligents sont écrits en Plutus et exécutés dans le modèle eUTXO étendu.

## SMASH

Un service hors chaîne qui regroupe les métadonnées des pools de staking afin que les portefeuilles puissent les découvrir et les explorer.

## Soft Fork (fr : Fourche souple)

Une modification du protocole blockchain compatible avec les versions antérieures : les nœuds mis à jour appliquent les nouvelles règles, tandis que les anciens nœuds peuvent encore reconnaître les blocs. Les fourches souples nécessitent généralement qu’une majorité des nœuds soit mise à jour pour être effectives.

## Spending Password (fr : Mot de passe de dépense)

Un mot de passe utilisé par un portefeuille pour chiffrer la clé privée, ajoutant ainsi une couche de sécurité.

## Stablecoin (fr : Cryptomonnaie stable)

Un jeton conçu pour maintenir une valeur stable en étant rattaché à une référence externe, comme une monnaie fiduciaire ou un panier d’actifs.

## Stake Address (fr : Adresse de staking)

L’adresse de staking au format Bech32, généralement commençant par `stake1`, qui permet la délégation et la réception des récompenses de staking, séparément de l’adresse de paiement.

## Stake Address Deposit (fr : Dépôt d’enregistrement d’une adresse de staking)

Le montant remboursable d’ada bloqué lorsqu’un portefeuille enregistre une adresse de staking afin de pouvoir déléguer ou gagner des récompenses.

## Stake Delegation (fr : Délégation de mise)

Le processus par lequel les détenteurs d’ada attribuent leur mise à un pool de staking sans transférer la propriété de leurs jetons. Cela leur permet de participer à la sécurisation du réseau Cardano et de gagner des récompenses, tandis que l’opérateur du pool utilise la mise déléguée pour augmenter ses chances de produire des blocs.

## Stake Majority Attack (fr : Attaque par majorité de mise)

Une attaque dans laquelle une seule partie contrôle plus de la moitié de la mise engagée en ada et peut réécrire l’historique récent ou censurer des transactions.

## Stake Pool (fr : Pool de staking)

Une ressource collective dans une blockchain à preuve d’enjeu, dans laquelle les mises de plusieurs participants sont regroupées afin d’augmenter les chances de produire de nouveaux blocs et de gagner des récompenses. Les pools sont gérés par des opérateurs qui exploitent l’infrastructure nécessaire et distribuent les récompenses proportionnellement aux délégants, après déduction des frais liés aux coûts opérationnels.

## Stake Pool Deposit (fr : Dépôt d’enregistrement d’un pool de staking)

Le montant remboursable d’ada requis pour enregistrer un nouveau pool de staking. La définition source indique actuellement 500 ada sur le réseau principal.

## Stake Pool Operator (SPO) (fr : Opérateur de pool de staking)

La personne ou l’organisation responsable de la gestion d’un pool de staking. Les SPO veillent à la disponibilité, aux performances et à la fiabilité des nœuds, et partagent les récompenses générées par le pool avec les délégants.

## Stake Snapshot (fr : Instantané de la mise)

Une capture de la délégation de chaque compte à la frontière entre deux époques. Elle représente la mise que le protocole prend effectivement en compte.

## Stake-Bleeding Attack (fr : Attaque par érosion de la mise)

Une attaque à long terme dans laquelle une chaîne minoritaire érode progressivement la mise de la chaîne honnête afin de faire passer la participation vers sa propre chaîne.

## Staking (fr : Mise en jeu)

Le processus de participation au consensus d’une blockchain à preuve d’enjeu en engageant des jetons pour contribuer à la sécurité du réseau et à la validation des transactions, généralement en échange de récompenses. Sur Cardano, les détenteurs d’ada peuvent exploiter un pool de staking ou déléguer leur mise à un pool existant.

## Style Guide (fr : Guide de style)

Le guide de style éditorial définit les conventions de rédaction, les normes orthographiques et la terminologie à utiliser dans les contenus de Cardano.

## Sybil Attack (fr : Attaque Sybil)

Une attaque dans laquelle un acteur malveillant crée de nombreuses identités fictives afin d’obtenir une influence disproportionnée sur un réseau. Cardano atténue les attaques Sybil grâce à son modèle de staking, dans lequel l’influence est liée aux avoirs en ada.
