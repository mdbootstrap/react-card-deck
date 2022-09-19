import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCardFooter,
} from "mdb-react-ui-kit";

export default function GridCards() {
  return (
    <>
      <MDBContainer className="mt-5" style={{ maxWidth: "900px" }}>
        <MDBRow className="row-cols-1 row-cols-md-2 g-4">
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className="mt-5" style={{ maxWidth: "900px" }}>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className="mt-5" style={{ maxWidth: "900px" }}>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>This is a short card.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className="mt-5 mb-5" style={{ maxWidth: "900px" }}>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
