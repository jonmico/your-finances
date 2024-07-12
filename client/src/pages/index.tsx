import styled from 'styled-components';

const StyledIndex = styled.div`
  grid-column: 1 / -1;
`;

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export default function Index() {
  return (
    <StyledIndex>
      <PageContent>
        <h1>This is the Index Page</h1>
        <p>Here will be some generic info about the site</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          laboriosam voluptatum quia? Natus eius aliquid recusandae possimus.
          Dolores incidunt reprehenderit cupiditate id dolor illo. Vero ipsam
          recusandae fugit expedita in. Tempora esse asperiores, vitae adipisci,
          mollitia at quia similique quasi, autem laudantium nam cupiditate
          laboriosam accusamus ipsam iure. Corporis non beatae qui quo nihil
          accusamus ipsum facilis maxime nostrum repellendus? Suscipit quaerat
          numquam quae earum esse? Sed alias earum neque ad. Optio ab debitis
          tempora ea. Obcaecati, recusandae. Quidem delectus eum accusamus
          assumenda optio animi ut iusto repudiandae quia tenetur?
        </p>
      </PageContent>
    </StyledIndex>
  );
}
