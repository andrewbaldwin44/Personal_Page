export function paginate(page, limit, model) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return model.slice(startIndex, endIndex);
}

export function countPages(model, limit) {
  return Math.ceil(model.length / limit);
}
