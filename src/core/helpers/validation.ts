export const Authentication = {
  username: [
    {
      required: true,
      message: "Mohon isi username anda",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Mohon isi password anda",
      trigger: "blur",
    },
  ],
};

export const PersonalInformation = {
  name: [
    {
      required: true,
      message: "Mohon isi nama anda",
      trigger: "blur",
    },
    { min: 3, message: "Panjang nama minimal 3 karakter", trigger: "blur" },
  ],
  company: [
    {
      required: true,
      message: "Mohon isi nama instansi/sekolah anda",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "Mohon isi email anda",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Mohon isi email yang valid",
      trigger: "blur",
    },
  ],
  phone_number: [
    {
      required: true,
      message: "Mohon isi nomor telepon anda",
      trigger: "blur",
    },
    {
      min: 6,
      max: 15,
      message: "Panjang nomor telepon min 5 karakter dan maks 15",
      trigger: "blur",
    },
  ],
  gender: [
    {
      required: true,
      message: "Mohon isi jenis kelamin anda",
      trigger: "blur",
    },
  ],
};

export const PaymentInformation = {
  name: [
    {
      required: true,
      message: "Mohon isi nama anda",
      trigger: "blur",
    },
    { min: 3, message: "Panjang nama minimal 3 karakter", trigger: "blur" },
  ],
  email: [
    {
      required: true,
      message: "Mohon isi email anda",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Mohon isi email yang valid",
      trigger: "blur",
    },
  ],
  address_1: [
    {
      required: true,
      message: "Mohon isi alamat utama anda",
      trigger: "blur",
    },
  ],
  zip: [
    {
      required: true,
      message: "Mohon isi kode pos anda",
      trigger: "blur",
    },
  ],
  city: [
    {
      required: true,
      message: "Mohon isi kota anda",
      trigger: "blur",
    },
  ],
  country: [
    {
      required: true,
      message: "Mohon isi negara anda",
      trigger: "blur",
    },
  ],
  referral_token: [
    {
      required: true,
      message: "Mohon isi token referal anda",
      trigger: "blur",
    },
  ],
};
