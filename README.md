https://api.thegraph.com/subgraphs/name/yotaunbllynala/deltaneutralperp/graphql?query=%7B%0A++%23+Find+2+deposits+which+was+processed+after+02%2F11%2F2022%0A++deposits%28first%3A+2%2C+where%3A+%7Bts_gt%3A1662077361%7D%29+%7B%0A++++id%0A++++ts%0A++++userAddress%0A++++depositAmount%0A++%7D%0A++%23+find+2+withdrawals+from+the+user+0x74ac0ed4890c802c74617553810dad56ba84281e%0A++withdrawals%28first%3A+2+where%3A+%7BuserAddress%3A+%220x74ac0ed4890c802c74617553810dad56ba84281e%22%7D%29+%7B%0A++++id%0A++++ts%0A++++userAddress%0A++++wthdrawAmount%0A++%7D%0A++%23+find+5+last+adjust+events+where+position+is+opening+and+adjust+amount+is+greater+than+300%24%0A++positionAdjusts%28first%3A+5%2C+orderDirection%3A+desc%2C+where%3A+%7BisIncrease%3A+true%2CtotalAmount_gt%3A+300000000%7D%29+%7B%0A++++id%0A++++ts%0A++++isIncrease%0A++++totalAmount%0A++++usdtAmount%0A++++ethAmount%0A++%7D%0A%7D

Subgraph test
```{
  # Find 2 deposits which was processed after 02/11/2022
  deposits(first: 2, where: {ts_gt:1662077361}) {
    id
    ts
    userAddress
    depositAmount
  }
  # find 2 withdrawals from the user 0x74ac0ed4890c802c74617553810dad56ba84281e
  withdrawals(first: 2 where: {userAddress: "0x74ac0ed4890c802c74617553810dad56ba84281e"}) {
    id
    ts
    userAddress
    wthdrawAmount
  }
  # find 5 last adjust events where position is opening and adjust amount is greater than 300$
  positionAdjusts(first: 5, orderDirection: desc, where: {isIncrease: true,totalAmount_gt: 300000000}) {
    id
    ts
    isIncrease
    totalAmount
    usdtAmount
    ethAmount
  }
}```
