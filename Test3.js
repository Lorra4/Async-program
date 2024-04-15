async function concurrentRequests() {
    try {
      const request1 = fetch('https://api.test.com/endpoint1');
      const request2 = fetch('https://api.test.com/endpoint2');
  
      const [response1, response2] = await Promise.all([request1, request2]);
  
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      console.log('Result 1:', data1);
      console.log('Result 2:', data2);
  
      // Additional logic with the combined results can be done here
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  concurrentRequests();

   //La fonction Promise.all() prend un tableau de promesses comme argument et renvoie une nouvelle promesse qui se résout lorsque toutes les promesses du tableau sont résolues. Dans ce cas, request1 et request2 sont des promesses représentant les appels d'API.

//En attendant Promise.all([request1, request2]), nous attendons que les deux demandes soient résolues. Les résultats sont ensuite stockés dans les variables réponse1 et réponse2. Nous pouvons ensuite utiliser la méthode json() pour extraire les données JSON des réponses.

//Enfin, nous enregistrons les résultats combinés à l'aide de console.log(). Vous pouvez effectuer un traitement ou une logique supplémentaire avec les résultats combinés selon vos besoins.

//N'oubliez pas de gérer les erreurs pouvant survenir lors des appels d'API à l'aide d'un bloc try-catch, comme indiqué dans la function.