type Props = {
  email: string;
  subject: string;
  body: string;
  children: any;
};

export const Mailto = ({ email, subject, body, children }: Props) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {children}
    </a>
  );
};
