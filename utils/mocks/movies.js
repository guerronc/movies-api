const moviesMock = [
  {
    id: '28aa64d0-2cdc-4342-b2aa-092894fd90ed',
    title: 'TV Set, The',
    year: 1996,
    cover: 'http://dummyimage.com/245x128.bmp/cc0000/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 1945,
    contentRating: 'G',
    source:
      'http://tinyurl.com/sit/amet/consectetuer/adipiscing/elit/proin/interdum.json?volutpat=sollicitudin&quam=vitae&pede=consectetuer&lobortis=eget&ligula=rutrum&sit=at&amet=lorem&eleifend=integer&pede=tincidunt&libero=ante&quis=vel&orci=ipsum&nullam=praesent&molestie=blandit&nibh=lacinia&in=erat&lectus=vestibulum&pellentesque=sed&at=magna&nulla=at&suspendisse=nunc&potenti=commodo&cras=placerat&in=praesent&purus=blandit&eu=nam&magna=nulla&vulputate=integer&luctus=pede&cum=justo&sociis=lacinia&natoque=eget&penatibus=tincidunt&et=eget&magnis=tempus&dis=vel&parturient=pede&montes=morbi&nascetur=porttitor&ridiculus=lorem&mus=id&vivamus=ligula&vestibulum=suspendisse&sagittis=ornare&sapien=consequat&cum=lectus&sociis=in&natoque=est&penatibus=risus&et=auctor&magnis=sed&dis=tristique&parturient=in&montes=tempus&nascetur=sit&ridiculus=amet&mus=sem&etiam=fusce&vel=consequat&augue=nulla&vestibulum=nisl&rutrum=nunc&rutrum=nisl&neque=duis&aenean=bibendum&auctor=felis&gravida=sed&sem=interdum&praesent=venenatis&id=turpis&massa=enim&id=blandit&nisl=mi&venenatis=in&lacinia=porttitor&aenean=pede&sit=justo&amet=eu&justo=massa&morbi=donec&ut=dapibus&odio=duis&cras=at&mi=velit&pede=eu&malesuada=est&in=congue&imperdiet=elementum&et=in&commodo=hac&vulputate=habitasse&justo=platea&in=dictumst&blandit=morbi&ultrices=vestibulum&enim=velit&lorem=id&ipsum=pretium&dolor=iaculis&sit=diam',
    tags: ['Crime|Mystery|Thriller']
  },
  {
    id: 'adbe37f8-706d-4c4e-83ce-1f05c5f29b39',
    title: 'King of the Hill',
    year: 2011,
    cover: 'http://dummyimage.com/157x181.bmp/dddddd/000000',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1993,
    contentRating: 'PG-13',
    source:
      'https://abc.net.au/orci.json?justo=dolor&eu=sit&massa=amet&donec=consectetuer&dapibus=adipiscing&duis=elit&at=proin&velit=interdum&eu=mauris&est=non&congue=ligula&elementum=pellentesque&in=ultrices&hac=phasellus&habitasse=id&platea=sapien&dictumst=in&morbi=sapien&vestibulum=iaculis&velit=congue&id=vivamus&pretium=metus&iaculis=arcu&diam=adipiscing&erat=molestie&fermentum=hendrerit&justo=at&nec=vulputate&condimentum=vitae&neque=nisl&sapien=aenean&placerat=lectus&ante=pellentesque&nulla=eget&justo=nunc&aliquam=donec&quis=quis&turpis=orci&eget=eget&elit=orci&sodales=vehicula&scelerisque=condimentum&mauris=curabitur&sit=in&amet=libero&eros=ut&suspendisse=massa&accumsan=volutpat&tortor=convallis&quis=morbi&turpis=odio&sed=odio&ante=elementum&vivamus=eu&tortor=interdum&duis=eu&mattis=tincidunt&egestas=in&metus=leo&aenean=maecenas&fermentum=pulvinar&donec=lobortis&ut=est&mauris=phasellus&eget=sit&massa=amet&tempor=erat&convallis=nulla&nulla=tempus&neque=vivamus&libero=in&convallis=felis&eget=eu&eleifend=sapien&luctus=cursus&ultricies=vestibulum&eu=proin&nibh=eu&quisque=mi&id=nulla',
    tags: ['Comedy', 'Crime|Drama|Thriller', 'Comedy|Drama']
  },
  {
    id: 'fc629b13-c437-40fa-9ab0-fc8583abe262',
    title: 'Best Years of Our Lives, The',
    year: 1997,
    cover: 'http://dummyimage.com/238x116.png/cc0000/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1902,
    contentRating: 'NC-17',
    source:
      'https://webs.com/condimentum/id/luctus/nec/molestie.png?cursus=molestie&urna=lorem&ut=quisque&tellus=ut&nulla=erat&ut=curabitur&erat=gravida&id=nisi&mauris=at&vulputate=nibh&elementum=in&nullam=hac&varius=habitasse&nulla=platea&facilisi=dictumst&cras=aliquam&non=augue&velit=quam&nec=sollicitudin',
    tags: ['Drama', 'Comedy|Drama|Romance', 'Drama', 'Documentary']
  },
  {
    id: '5ba8260f-0659-45c3-9629-6b693663965e',
    title: 'Bloodsucking Pharaohs in Pittsburgh',
    year: 2010,
    cover: 'http://dummyimage.com/177x216.bmp/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 1942,
    contentRating: 'R',
    source:
      'http://google.co.jp/vulputate/nonummy/maecenas/tincidunt/lacus/at.html?dui=maecenas&vel=leo&sem=odio&sed=condimentum&sagittis=id&nam=luctus&congue=nec&risus=molestie&semper=sed&porta=justo&volutpat=pellentesque&quam=viverra&pede=pede&lobortis=ac&ligula=diam&sit=cras&amet=pellentesque&eleifend=volutpat&pede=dui&libero=maecenas&quis=tristique&orci=est&nullam=et&molestie=tempus&nibh=semper&in=est&lectus=quam&pellentesque=pharetra&at=magna&nulla=ac&suspendisse=consequat',
    tags: ['Drama']
  },
  {
    id: '9ea6bea8-951d-434a-99de-a3aa551fcd3f',
    title: 'Into the Woods',
    year: 1996,
    cover: 'http://dummyimage.com/123x119.bmp/dddddd/000000',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 2056,
    contentRating: 'NC-17',
    source:
      'https://clickbank.net/volutpat.js?sagittis=vel&sapien=lectus&cum=in&sociis=quam&natoque=fringilla&penatibus=rhoncus&et=mauris&magnis=enim&dis=leo&parturient=rhoncus&montes=sed&nascetur=vestibulum&ridiculus=sit&mus=amet&etiam=cursus&vel=id&augue=turpis&vestibulum=integer&rutrum=aliquet&rutrum=massa&neque=id&aenean=lobortis&auctor=convallis&gravida=tortor&sem=risus&praesent=dapibus&id=augue&massa=vel&id=accumsan&nisl=tellus&venenatis=nisi&lacinia=eu&aenean=orci&sit=mauris&amet=lacinia&justo=sapien&morbi=quis&ut=libero&odio=nullam&cras=sit&mi=amet&pede=turpis&malesuada=elementum&in=ligula&imperdiet=vehicula&et=consequat&commodo=morbi&vulputate=a&justo=ipsum&in=integer&blandit=a&ultrices=nibh&enim=in&lorem=quis&ipsum=justo&dolor=maecenas&sit=rhoncus&amet=aliquam&consectetuer=lacus&adipiscing=morbi&elit=quis&proin=tortor&interdum=id&mauris=nulla&non=ultrices&ligula=aliquet&pellentesque=maecenas&ultrices=leo&phasellus=odio&id=condimentum&sapien=id&in=luctus&sapien=nec&iaculis=molestie&congue=sed&vivamus=justo&metus=pellentesque',
    tags: ['Drama', 'Action|Comedy', 'Mystery|Thriller']
  },
  {
    id: '67238a2e-8f7c-4698-b7b0-919f433607a5',
    title: "Coal Miner's Daughter",
    year: 2005,
    cover: 'http://dummyimage.com/190x127.bmp/dddddd/000000',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1919,
    contentRating: 'G',
    source:
      'http://ucoz.ru/sit/amet/lobortis.jsp?ultrices=cras&posuere=mi&cubilia=pede&curae=malesuada&donec=in&pharetra=imperdiet&magna=et&vestibulum=commodo&aliquet=vulputate&ultrices=justo&erat=in&tortor=blandit&sollicitudin=ultrices&mi=enim&sit=lorem&amet=ipsum&lobortis=dolor&sapien=sit&sapien=amet&non=consectetuer&mi=adipiscing&integer=elit&ac=proin&neque=interdum&duis=mauris&bibendum=non&morbi=ligula&non=pellentesque&quam=ultrices&nec=phasellus&dui=id&luctus=sapien&rutrum=in&nulla=sapien&tellus=iaculis&in=congue&sagittis=vivamus&dui=metus&vel=arcu&nisl=adipiscing&duis=molestie&ac=hendrerit&nibh=at&fusce=vulputate&lacus=vitae',
    tags: ['Drama', 'Drama', 'Comedy', 'Comedy|Romance']
  },
  {
    id: '544d37a2-fc4f-4210-b820-4808e50b6864',
    title: 'History of the Eagles',
    year: 2011,
    cover: 'http://dummyimage.com/182x228.bmp/ff4444/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1922,
    contentRating: 'PG-13',
    source:
      'https://mozilla.com/tristique.js?mi=turpis&in=nec&porttitor=euismod&pede=scelerisque&justo=quam&eu=turpis&massa=adipiscing&donec=lorem&dapibus=vitae&duis=mattis&at=nibh&velit=ligula&eu=nec&est=sem&congue=duis&elementum=aliquam&in=convallis&hac=nunc&habitasse=proin&platea=at&dictumst=turpis&morbi=a&vestibulum=pede&velit=posuere&id=nonummy&pretium=integer&iaculis=non&diam=velit&erat=donec&fermentum=diam&justo=neque&nec=vestibulum&condimentum=eget&neque=vulputate&sapien=ut&placerat=ultrices&ante=vel&nulla=augue&justo=vestibulum&aliquam=ante&quis=ipsum',
    tags: ['Mystery|Romance|Western']
  },
  {
    id: 'cfdfb529-63b7-4883-9767-2a3eaa530140',
    title: 'Becky Sharp',
    year: 1994,
    cover: 'http://dummyimage.com/177x104.jpg/cc0000/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1934,
    contentRating: 'G',
    source:
      'http://senate.gov/mollis.js?aliquam=nulla&lacus=ac&morbi=enim&quis=in&tortor=tempor&id=turpis&nulla=nec&ultrices=euismod&aliquet=scelerisque&maecenas=quam&leo=turpis&odio=adipiscing&condimentum=lorem&id=vitae&luctus=mattis&nec=nibh&molestie=ligula&sed=nec&justo=sem&pellentesque=duis&viverra=aliquam&pede=convallis&ac=nunc&diam=proin&cras=at&pellentesque=turpis&volutpat=a&dui=pede&maecenas=posuere&tristique=nonummy&est=integer&et=non&tempus=velit&semper=donec&est=diam&quam=neque&pharetra=vestibulum&magna=eget&ac=vulputate&consequat=ut&metus=ultrices&sapien=vel',
    tags: ['Comedy|Drama|Horror|Sci-Fi']
  },
  {
    id: 'd95478af-ebf4-407c-901d-bc8de8591322',
    title: "Librarian: Return to King Solomon's Mines, The",
    year: 1999,
    cover: 'http://dummyimage.com/148x132.bmp/ff4444/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 2061,
    contentRating: 'PG',
    source:
      'https://tuttocitta.it/ac/nulla/sed/vel/enim/sit.jpg?platea=potenti&dictumst=in&aliquam=eleifend&augue=quam&quam=a&sollicitudin=odio&vitae=in&consectetuer=hac&eget=habitasse&rutrum=platea&at=dictumst&lorem=maecenas&integer=ut&tincidunt=massa&ante=quis&vel=augue&ipsum=luctus&praesent=tincidunt&blandit=nulla&lacinia=mollis&erat=molestie&vestibulum=lorem&sed=quisque&magna=ut&at=erat&nunc=curabitur&commodo=gravida&placerat=nisi&praesent=at&blandit=nibh&nam=in&nulla=hac&integer=habitasse&pede=platea&justo=dictumst&lacinia=aliquam&eget=augue&tincidunt=quam&eget=sollicitudin&tempus=vitae&vel=consectetuer&pede=eget',
    tags: ['Drama', 'Horror|Thriller', 'Comedy', 'Drama|War', 'Comedy|Drama']
  },
  {
    id: '19c2f93d-eb0f-4a59-a552-b01cb4fb117b',
    title: 'They Only Kill Their Masters',
    year: 1998,
    cover: 'http://dummyimage.com/146x231.png/dddddd/000000',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2044,
    contentRating: 'PG-13',
    source:
      'https://ucla.edu/urna/ut/tellus/nulla/ut.png?in=dui&hac=vel&habitasse=sem&platea=sed&dictumst=sagittis&morbi=nam&vestibulum=congue&velit=risus&id=semper&pretium=porta&iaculis=volutpat&diam=quam&erat=pede&fermentum=lobortis&justo=ligula&nec=sit&condimentum=amet&neque=eleifend&sapien=pede&placerat=libero&ante=quis&nulla=orci&justo=nullam&aliquam=molestie&quis=nibh&turpis=in&eget=lectus&elit=pellentesque&sodales=at&scelerisque=nulla&mauris=suspendisse&sit=potenti&amet=cras&eros=in',
    tags: ['Comedy', 'Drama|Romance', 'Drama']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMocks {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMocks };
