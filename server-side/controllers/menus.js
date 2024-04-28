var data = {
  mata: [
    {
      id: 0,
      title: "Mata",
      imagePath: "images/menus/eye.jpeg",
      desc: "Diperlukan oleh manusia dalam mengirim rangsangan untuk dikirim ke otak",
      markerPath: `images/markers/Eye.png`,
    },
  ],
  hidung: [
    {
      id: 1,
      title: "Hidung",
      imagePath: "images/menus/nose.jpeg",
      desc: "Mempunyai tiga fungsi, yaitu alat pernafasan, mencium bau dan menyaring udara.",
      markerPath: `images/markers/Nose.png`,
    },
  ],
  telinga: [
    {
      id: 2,
      title: "Telinga",
      imagePath: "images/menus/ear.jpeg",
      desc: "Untuk mengetahui berbagai macam getaran bunyi sekaligus sebagai penjaga keseimbangan.",
      markerPath: `images/markers/Ear.png`,
    },
  ],
  lidah: [
    {
      id: 3,
      title: "Lidah",
      imagePath: "images/menus/tongue.jpeg",
      desc: "Sebagai perasa, memudahkan proses pengunyahan dan pembentuk huruf.",
      markerPath: `images/markers/Tongue.png`,
    },
  ],
  kulit: [
    {
      id: 4,
      title: "Kulit",
      imagePath: "images/menus/skin.jpeg",
      desc: "Bisa dijadikan sebagai pelindung tubuh manusia dari berbagai macam gangguan dan juga sebagai tempat untuk mengeluarkan kringat.",
      markerPath: `images/markers/Skin.png`,
    },
  ],
};

function returnJson(data, statusCode = 200) {
  return {
    status: true,
    statusCode,
    data,
  };
}

exports.list = function (req, res) {
  res.status(200).json(returnJson(data, 200));
};
