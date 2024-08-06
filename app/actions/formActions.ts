'use server';

export const createAccount = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const email = form.email.value;
  const password = form.password.value;
  const passwordConfirmation = form.passwordConfirmation.value;
  const country = form.country.value;

  const data = await fetch("/api/users", {method: "POST", body: JSON.stringify(
    {firstName,
    lastName,
    email,
    country,
    password})
  }).then((res) => res.json());

  console.log(data);

};