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

export const Application = {
  application_name: [
    {
      required: true,
      message: "Mohon isi nama aplikasi anda",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "Mohon isi deskripsi aplikasi anda",
      trigger: "blur",
    },
  ],
};

export const Device = {
  device_name: [
    {
      required: true,
      message: "Mohon isi nama perangkat anda",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "Mohon isi deskripsi perangkat anda",
      trigger: "blur",
    },
  ],
  type: [
    {
      required: true,
      message: "Mohon isi tipe perangkat anda",
      trigger: "blur",
    },
  ],
};

export const Module = {
  module_name: [
    {
      required: true,
      message: "Mohon isi nama modul anda",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "Mohon isi deskripsi modul anda",
      trigger: "blur",
    },
  ],
  type: [
    {
      required: true,
      message: "Mohon isi tipe modul anda",
      trigger: "blur",
    },
  ],
};

export const Command = {
  command: [
    {
      required: true,
      message: "Mohon isi perintah anda",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "Mohon isi deskripsi perintah anda",
      trigger: "blur",
    },
  ],
  type: [
    {
      required: true,
      message: "Mohon isi tipe perintah anda",
      trigger: "blur",
    },
  ],
  // status: [
  //   {
  //     required: true,
  //     message: "Mohon isi status perintah anda",
  //     trigger: "blur",
  //   },
  // ],
};

export const TasmotaCommand = {
  tasmotaCommand: [
    {
      required: true,
      message: "Mohon isi perintah tasmota anda",
      trigger: "blur",
    },
  ],
  tasmotaTopic: [
    {
      required: true,
      message: "Mohon isi topik tasmota anda",
      trigger: "blur",
    },
  ],
};
