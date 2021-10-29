import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';
import { motion } from 'framer-motion';
import CodeSandbox from '@uiw/react-codesandbox';
import SlidePage from '../layouts/SlidePage';
import Cover from './Cover';
import SpeakerNotes from './SpeakerNotes';
import Step from './Step';
import Steps from './Steps';
import Avatar from './Avatar';
import ReactIcon from './ReactIcon';

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props;
    const language = className.replace('language-', '');
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        {...props}
      />
    );
  },
  Cover,
  SlidePage,
  SpeakerNotes,
  Step,
  Steps,
  motion,
  Avatar,
  ReactIcon,
  CodeSandbox,
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);
