module.exports = (list = [], covers = []) => {
  const objCovers = {};
  covers.forEach((el) => {
    const {
      attributes: {
        images: { data: images },
        name,
      },
    } = el;
    objCovers[name] = images;
  });

  const arr = list.reduce((obj = [], el) => {
    const { Name = "" } = el;
    // adding images to event if there are images,
    // from local (collection covers) and they have current name as event name
    // (bileter name event - Vorobey)
    if (objCovers[Name]) {
      el.images = objCovers[Name];
      obj.push(el);
    }
    // adding common images (collection covers[object COMMON])
    // to event if when event was adding to local and user didn`n add images
    if (el.id && el.attributes.images.data === null) {
      el.attributes.images.data = objCovers["common"];
      // console.log(20, el);
      // obj.push(el);
    }
    // adding images to event if event was adding to local user added images
    if (el.id) {
      obj.push(el);
    }
    // adding common images to event if no matches
    // from local and they don`t have current
    // name as event name (bileter name event - Vorobey)
    if (Name && !!!el.images) {
      // console.log(123, !!!el.images);
      el.images = objCovers["common"];
      obj.push(el);
    }
    return obj;
  }, []);

  return arr;
};
