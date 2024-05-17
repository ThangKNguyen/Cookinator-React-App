import React from "react";

export default function About() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Why We Created This Food App</h1>
            <p style={styles.description}>
                Welcome to our food web app! We're passionate about bringing people together through the joy of food. Our journey began with a simple idea: to create a platform where food lovers from all walks of life can explore, discover, and share their culinary experiences.
            </p>
            <p style={styles.description}>
                We believe that food is more than just nourishment; it's a reflection of culture, heritage, and tradition. With our app, we aim to celebrate the rich diversity of cuisines from around the globe and foster a sense of community among food enthusiasts.
            </p>
            <p style={styles.description}>
                Whether you're looking for traditional recipes, innovative cooking techniques, or simply seeking inspiration for your next meal, our app has something for everyone. Join us on this delicious journey as we explore the world, one dish at a time.
            </p>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 600,
        margin: "0 auto",
        padding: 20,
        textAlign: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
    },
};
