import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBContainer,
  MDBCardFooter,
} from "mdb-react-ui-kit";

export default function CardGroupWithFooters() {
  return (
    <MDBContainer className="mt-3">
      <MDBCardGroup>
        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardFooter>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/042.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardFooter>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/043.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardFooter>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
}
