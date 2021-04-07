export async function getBirds(isbn: string) {
  const response = await fetch(`https://some-random-api.ml/img/birb`, {
    mode: 'cors',
  });
  const bird = await response.json();
  return bird['link'];
}
