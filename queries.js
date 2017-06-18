const queries = `
query carOfTheWeek {
  carOfTheWeek {
    review
    maker {
    	name
  	}
    model {
      name
      price
      imageUrl
    }
  }
}

query model {
  model(id:100) {
    name
    price
    maker {
      name
    }
  }
}

query models {
  models {
    id
    name
    maker {
      id
      name
    }
  }
}


query makers {
  makers {
    id
    name
    models {
      id
      name
    }
  }
}

query maker {
  maker(id:10) {
    name
    models {
      name
      price
    }
  }
}
`;

export default queries;
