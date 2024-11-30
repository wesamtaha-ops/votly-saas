import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface DocContentProps {
  title: string;
  description?: string;
  lastUpdated?: string;
  content: React.ReactNode;
  nextPage?: {
    title: string;
    href: string;
  };
  relatedDocs?: Array<{
    title: string;
    href: string;
  }>;
}

export function DocContent({ 
  title, 
  description, 
  lastUpdated, 
  content,
  nextPage,
  relatedDocs 
}: DocContentProps) {
  return (
    <article className="prose prose-indigo max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-500 mb-4">{description}</p>
        )}
        {lastUpdated && (
          <p className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>

      <div className="mt-8">{content}</div>

      <hr className="my-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nextPage && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Next Page</h3>
            <Link
              to={nextPage.href}
              className="flex items-center text-indigo-600 hover:text-indigo-500"
            >
              {nextPage.title}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}

        {relatedDocs && relatedDocs.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Related Docs</h3>
            <ul className="space-y-2">
              {relatedDocs.map((doc) => (
                <li key={doc.href}>
                  <Link
                    to={doc.href}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    {doc.title}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}