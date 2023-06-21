import { useQuery } from 'graphql-hooks';

export const CHARACTERS_QUERY = `
query Query($page: Int, $name: String ) {
  characters(page: $page, filter: { name: $name }) {
    info {
      count
    }
    results {
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
            page,
            name
        }
    });
