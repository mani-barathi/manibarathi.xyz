import PageContainer from "../layout/PageContainer";

export default function PageNotFound404() {
  return (
    <PageContainer
      title="404 - Manibarathi"
      description="The page you are looking for does not exist. How you got here is a mystery."
    >
      <div className="flex-grow flex flex-col justify-center items-center select-none">
        <h1 className="text-6xl sm:text-8xl font-md text-gray-600">404</h1>
        <h3 className="my-3 text-xl sm:text-3xl font-md text-gray-500">
          UH OH! You're lost.
        </h3>
        <p className="text-gray-500 max-w-md text-center">
          The page you are looking for does not exist. How you got here is a
          mystery.
        </p>
      </div>
    </PageContainer>
  );
}
