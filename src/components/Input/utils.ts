export function checkValidation(type: string) {
  if (type === "email") {
    return {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: "Enter correct email",
    };
  }
}
