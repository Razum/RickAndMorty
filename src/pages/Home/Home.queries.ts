import { useQuery } from 'graphql-hooks';

export const CHARACTERS_QUERY = `
query Query($page: Int, $name: String ) {
  characters(page: $page, filter: { name: $name }) {
    info {
      count
      pages
    }
    results {
      id
      name
      species
      status
      image
    }
  }
}
`;

export const useCharacters = (page: number, name: string) =>
    useQuery(CHARACTERS_QUERY, {
        variables: {
            page: page + 1,
            name
        },
        updateData: (prevData, data) => (!data ? prevData : data)
    });
