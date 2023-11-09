<script>
	import { Container, Heading, Hr, Html, Text } from 'svelte-email';

    export let verificationCode = ""

    const verificationCodeStyle = {
        fontWeight: "bold"
    }
</script>

<Html>
    <Text>Šis ir tavs verifikācijas kods, kurš beidzas pēc 10 minūtēm:</Text> <Hr />
    <Container>
        <Heading as="h3" style={verificationCodeStyle}>Tests: {verificationCode}</Heading>
    </Container>
</Html>