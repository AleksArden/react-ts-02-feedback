import css from './Section.module.css';

type SectionProps = {
  title: string,
  children: React.ReactNode,
}

export const Section = ({ title, children }: SectionProps):JSX.Element => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};

