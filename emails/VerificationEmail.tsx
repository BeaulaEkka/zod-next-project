import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

export const VerificationEmail = ({
  username,
  otp,
}: VerificationEmailProps) => (
  <Html>
    <Head>
      <title>Verification Code</title>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KF0mCnqEu92Fr1Mu4mxKKTU1kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>This is your verification Code.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {username},</Text>
        <Text style={paragraph}>
          Thank you for registering. Please use the following verification code
          to complete your registration:
        </Text>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Text>Please ignore this email, if you did not request this code.</Text>
        <Text style={paragraph}>
          Best,
          <br />
          Beaula Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>470 Xyz Straat Kralingen, Rotterdam, 1234XZ</Text>
      </Container>
    </Body>
  </Html>
);

VerificationEmail.PreviewProps = {
  username: "Beaula",
} as VerificationEmailProps;

export default VerificationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
