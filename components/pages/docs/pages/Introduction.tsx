import React from 'react';
import { DocContent } from '../DocContent';

export function Introduction() {
  const content = (
    <>
      <p>
        Welcome to Formify - the AI-powered form builder that helps you create, manage, and analyze forms with ease. This documentation will guide you through everything you need to know to make the most of our platform.
      </p>

      <h2>What is Formify?</h2>
      <p>
        Formify is a comprehensive form building platform that combines the power of artificial intelligence with intuitive design tools to help you create engaging forms, surveys, and questionnaires. Whether you're collecting customer feedback, conducting market research, or managing job applications, Formify provides the tools you need to succeed.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>AI-powered form generation and analysis</li>
        <li>Drag-and-drop form builder</li>
        <li>Advanced logic and conditional branching</li>
        <li>Real-time analytics and insights</li>
        <li>Multiple distribution channels</li>
        <li>Enterprise-grade security</li>
        <li>Extensive API and integration options</li>
      </ul>

      <h2>Who is it for?</h2>
      <p>
        Formify is designed for:
      </p>
      <ul>
        <li>Businesses collecting customer feedback</li>
        <li>HR teams managing recruitment processes</li>
        <li>Researchers conducting surveys</li>
        <li>Marketing teams gathering market insights</li>
        <li>Organizations requiring secure data collection</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To begin using Formify:
      </p>
      <ol>
        <li>Sign up for an account</li>
        <li>Choose your subscription plan</li>
        <li>Create your first form using AI or templates</li>
        <li>Share your form and collect responses</li>
        <li>Analyze results with our powerful dashboard</li>
      </ol>

      <h2>Platform Requirements</h2>
      <p>
        Formify is a cloud-based solution that works in any modern web browser. There's no software to install or maintain. We recommend using:
      </p>
      <ul>
        <li>Chrome (latest version)</li>
        <li>Firefox (latest version)</li>
        <li>Safari (latest version)</li>
        <li>Edge (latest version)</li>
      </ul>
    </>
  );

  return (
    <DocContent
      title="Introduction to Formify"
      description="Learn about Formify's powerful form building and data collection platform"
      lastUpdated="2024-02-20"
      content={content}
      nextPage={{
        title: "Quick Start Guide",
        href: "/docs/quickstart"
      }}
      relatedDocs={[
        {
          title: "Core Concepts",
          href: "/docs/concepts"
        },
        {
          title: "Subscriptions Guide",
          href: "/docs/subscriptions"
        }
      ]}
    />
  );
}