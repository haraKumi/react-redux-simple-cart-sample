/**
 * Mocking client-server processing
 */
const TIMEOUT = 100

const _items = [
  {
    "id": "7730",
    "img": {
      "alt": "thumbnail_25%_OFF_Rent_a_&quot;Maricar&quot;_Go_Kart_around_Tokyo_from_Roppongi",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1476346270/vlmwj2no6kmdv6ywhnuf.jpg"
    },
    "title": "25% OFF Rent a Maricar Go Kart around Tokyo from Roppongi",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 1,
      "unit": "hour"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 5333,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 4000,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1476346270/vlmwj2no6kmdv6ywhnuf.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1476346270/vlmwj2no6kmdv6ywhnuf.jpg"
      }
    }
  },
  {
    "id": "10",
    "img": {
      "alt": "thumbnail_10%_OFF_Private_Tokyo_Tsukiji_Fish_Market_Tour__Enjoy_Sushi",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1355845015/vwvfo7ql93rgu1teztew.jpg"
    },
    "title": "10% OFF Private Tokyo Tsukiji Fish Market Tour  Enjoy Sushi",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 2.5,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 13333,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 7000,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1355845009/skotydix2bvsnxz3qgba.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1355845015/vwvfo7ql93rgu1teztew.jpg"
      }
    }
  },
  {
    "id": "3852",
    "img": {
      "alt": "thumbnail_30%_OFF_Burlesque_Tokyo's_Grand_Show!",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1441092924/wcbtqnm3f7dmjkpoxopd.jpg"
    },
    "title": "30% OFF Burlesque Tokyo's Grand Show!",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 1.5,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 12857,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 9000,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1441092939/vff08lb0stptxq0ebnvd.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1441092924/wcbtqnm3f7dmjkpoxopd.jpg"
      }
    }
  },
  {
    "id": "3257",
    "img": {
      "alt": "thumbnail_10%_OFF_Oiran-Za_Traditional_Japanese_New_Cabaret_Show",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1466565615/ptwodymisc4yqdctbymc.jpg"
    },
    "title": "10% OFF Oiran-Za Traditional Japanese New Cabaret Show",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 2.5,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 5555,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 5000,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1426749604/twh7zy49bhqi4kcla0wi.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1466565615/ptwodymisc4yqdctbymc.jpg"
      }
    }
  },
  {
    "id": "3088",
    "img": {
      "alt": "thumbnail_10%_OFF_Tour_all_the_popular_places_in_Tokyo_with_a_local!",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1449879428/ec1cann8wjzepjcjs8si.jpg"
    },
    "title": "10% OFF Tour all the popular places in Tokyo with a local!",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 5,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 11111,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 8000,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1477363944/szx9dkngyjhaigg4njix.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1449879428/ec1cann8wjzepjcjs8si.jpg"
      }
    }
  },
  {
    "id": "2387",
    "img": {
      "alt": "thumbnail_50%_OFF_Make_Your_Own_Pearl_Necklace_in_Ueno",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1421123617/urxntpito4xrut5gz9pi.jpg"
    },
    "title": "10% OFF Tour all the popular places in Tokyo with a local!",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 1,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 5000,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 2500,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1421123592/gxidszrbgonjltrpjatd.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1421123617/urxntpito4xrut5gz9pi.jpg"
      }
    }
  },
  {
    "id": "7838",
    "img": {
      "alt": "thumbnail_80%_OFF_Learn_traditional_culture_at_the_Paper_Factory,Tokyo",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1477929340/ydqhqqbyepy0dtpfqflg.jpg"
    },
    "title": "80% OFF Learn traditional culture at the Paper Factory,Tokyo",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 2,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 14000,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 2800,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1477929363/hbl47owdednzjwpsihuw.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1477929340/ydqhqqbyepy0dtpfqflg.jpg"
      }
    }
  },
  {
    "id": "7755",
    "img": {
      "alt": "thumbnail_20%_OFF_Visit_Mt._Fuji_&amp;_Hakone:_One_Day_Tour_[Only_on_Sat]",
      "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_156,w_220/v1476770574/bs1radyfhhs8fydgoin9.jpg"
    },
    "title": "20% OFF Visit Mt. Fuji Hakone: One Day Tour [Only on Sat]",
    "location": {
      "name": "tokyo"
    },
    "duration": {
      "number": 11,
      "unit": "hours"
    },
    "priceInfo": {
      "beforeDiscount": {
        "price": 15000,
        "currency": "JPY"
      },
      "afterDiscount": {
        "price": 12000,
        "currency": "JPY"
      }
    },
    "detailInfo": {
      "img": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_pad,f_auto,fl_keep_iptc,h_387,w_580/v1476770574/bs1radyfhhs8fydgoin9.jpg"
      },
      "visual": {
        "src": "https://res.cloudinary.com/hstcxjula/image/upload/b_black,c_fill,f_auto,fl_keep_iptc,h_470,q_15,w_1280/v1476770574/bs1radyfhhs8fydgoin9.jpg"
      }
    }
  }
]


export default {
  getItems: (cb, timeout) => setTimeout(() => cb(_items), timeout || TIMEOUT),
}
