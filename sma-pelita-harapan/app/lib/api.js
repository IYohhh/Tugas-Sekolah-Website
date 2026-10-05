export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function toUserMessage(status) {
  if (status === 404) return "Data yang dicari tidak ditemukan.";
  if (status >= 500) return "Server sedang bermasalah. Coba lagi nanti.";
  return "Gagal memuat data. Periksa koneksi lalu coba lagi.";
}


function normalizeList(json) {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  return [];
}

export async function getKegiatan() {
  const response = await fetch(`${API_BASE_URL}/api/kegiatan`, {

    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(toUserMessage(response.status));
  }

  const json = await response.json();
  return normalizeList(json);
}

export async function getKegiatanById(id) {
  const response = await fetch(`${API_BASE_URL}/api/kegiatan/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(toUserMessage(response.status));
  }

  return response.json();
}

export async function getGaleri() {
  const response = await fetch(`${API_BASE_URL}/api/galeri`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(toUserMessage(response.status));
  }

  const json = await response.json();
  return normalizeList(json);
}
