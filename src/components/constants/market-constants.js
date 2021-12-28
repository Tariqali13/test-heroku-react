import Fakerator from 'fakerator'
export const latestTransactions = () => {
    const fakerator = Fakerator();
  return [
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      },
      {
          buyer_name: fakerator.names.name(),
          seller_name: fakerator.names.name(),
          price: fakerator.random.number(0.00002, 100000),
      }
  ]
}

export const hunderedTreads = () => {
    const fakerator = Fakerator();
    return [
        {
            buyer_name: fakerator.names.name(),
            seller_name: fakerator.names.name(),
            price: fakerator.random.number(0.00002, 100000),
            data_units: fakerator.random.number(1, 100),
            status: fakerator.random.boolean(),
            activity: fakerator.random.arrayElement(['Sell', 'Buy']),
            type: fakerator.random.arrayElement(['Personal Data', 'Complex Data']),
            destination: fakerator.random.arrayElement(['Internal', 'USA', 'UK', 'Italy', 'JAPAN']),
            classification: fakerator.random.arrayElement(['Top Secret']),
        },
    ]
}


export const topBuyers = () => {
    const fakerator = Fakerator();
    return [
        {
            buyer_name: fakerator.names.name(),
            price: fakerator.random.number(0.00002, 100000),
            data_units: fakerator.random.number(1, 100),
            status: fakerator.random.boolean(),
            type: fakerator.random.arrayElement(['Personal Data', 'Complex Data']),
        },
    ]
}


export const topSellers = () => {
    const fakerator = Fakerator();
    return [
        {
            seller_name: fakerator.names.name(),
            price: fakerator.random.number(0.00002, 100000),
            data_units: fakerator.random.number(1, 100),
            status: fakerator.random.boolean(),
            type: fakerator.random.arrayElement(['Personal Data', 'Complex Data']),
        },
    ]
}