export default function ProjectDescription({ data }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20 xl:mt-30 xl:px-10 xl:py-20">
      {data.title && (
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          {data.title}
        </h1>
      )}

      {data.byline && (
        <p className="text-center text-sm text-gray-500 mb-8">{data.byline}</p>
      )}

      {data.paragraphs && data.paragraphs.length > 0 && (
        <div className="space-y-4 text-gray-700 text-justify">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}

      {data.bulletPoints && data.bulletPoints.length > 0 && (
        <ul className="list-disc list-inside space-y-2 mt-6 text-gray-700">
          {data.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      {data.contact && (
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Persoana de contact:
          </h2>
          {data.contact.name && (
            <p className="text-lg font-medium text-gray-700">
              {data.contact.name}
            </p>
          )}
          {data.contact.website && (
            <p className="text-gray-600">
              <a
                href={data.contact.website}
                className="underline hover:text-blue-600"
              >
                {data.contact.website}
              </a>
            </p>
          )}
          {data.contact.email && (
            <p className="text-gray-600">{data.contact.email}</p>
          )}
          {data.contact.tel && (
            <p className="text-gray-600">Tel: {data.contact.tel}</p>
          )}
          {data.contact.fax && (
            <p className="text-gray-600">Fax: {data.contact.fax}</p>
          )}
        </div>
      )}
    </div>
  );
}
