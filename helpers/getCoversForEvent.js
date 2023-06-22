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
    // add images to event if there are images, from local and they have current name as event name (bileter name event - Vorobey)
    if (objCovers[Name]) {
      el.images = objCovers[Name];
      obj.push(el);
    }
    // add common images to event if when event was adding to local and user didn`n add images
    if (el.id && el.attributes.images.data === null) {
      el.attributes.images.data = objCovers["common"];
      // console.log(20, el);
      // obj.push(el);
    }
    // add images to event if when event was adding to local user added images
    if (el.id) {
      obj.push(el);
    }
    // add common images to event if no match from local and they don`t have current name as event name (bileter name event - Vorobey)
    if (Name && !!!el.images) {
      // console.log(123, !!!el.images);
      el.images = objCovers["common"];
      obj.push(el);
    }
    return obj;
  }, []);

  return arr;
};
