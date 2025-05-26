import os

def clear_console():
    sistem_operasi = os.name
    if sistem_operasi == "posix":
        os.system("clear")
    elif sistem_operasi == "nt":
        os.system("cls")

Footwear = {
    "1": ("NIKE P-6000", 1429000, ["39", "40", "41", "42", "43", "44"]),
    "2": ("SALOMON Xt-6 Gtx", 3799000, ["39", "40", "41", "42", "43", "44", "45"]),
    "3": ("CLARKS WALLABEE", 2999000, ["38", "39", "40", "41", "42", "43"]),
    "4": ("NIKE W ZOOM VOMERO 5", 2489000, ["36", "37", "38", "39", "40", "41"]),
}

Apparel = {
    "1": ("PUMA X KIDSUPER W TEE", 799000, ["S", "M", "L", "XL", "XXL"]),
    "2": ("NEW BALANCE BOYLSTON TWILL TROUSER", 1499000, ["28", "30", "32", "34", "36"]),
    "3": ("ADIDAS EQT MET WB", 2600000, ["S", "M", "L", "XL"]),
    "4": ("NIKE AS M NK CLUB FT OVERSIZED CREW", 849000, ["S", "M", "L", "XL", "XXL"]),
}

Accessories = {
    "1": ("ADIDAS SHOPPER BALI", 700000, ["One Size"]),
    "2": ("CARHARTT WIP BIG TIME KEYCHAIN", 390000, ["One Size"]),
    "3": ("NIKE U NK CLUB CAP AB ACG P", 399000, ["One Size"]),
    "4": ("ADIDAS AC ROUND BAG", 450000, ["One Size"]),
}

New_Arrival = {
    "1": ("UN CLOUD 6 M", 2500000, ["39", "40", "41", "42", "43", "44"]),
    "2": ("PUMA MOSTRO OG PRIME", 1889000, ["38", "39", "40", "41", "42", "43"]),
    "3": ("ADIDAS HANDBALL SPEZIAL", 1700000, ["39", "40", "41", "42", "43", "44"]),
    "4": ("SALOMON XA PRO 3D", 2699000, ["40", "41", "42", "43", "44", "45"]),
}

metode_pembayaran = {
    "1": "Qris",
    "2": "Bank",
}

# Kode diskon yang tersedia
kode_diskon = {
    "brocks10": 10,  # diskon 10%
}

daftar_pesanan = []
diskon_aktif = None
persentase_diskon = 0

def tampilkan_ukuran_dan_pilih(ukuran_tersedia):
    """Menampilkan pilihan ukuran dan mengembalikan ukuran yang dipilih"""
    print("\nUkuran yang tersedia:")
    for i, ukuran in enumerate(ukuran_tersedia, 1):
        print(f"{i}. {ukuran}")
    
    while True:
        try:
            pilih_ukuran = input("\nPilih ukuran (masukkan nomor): ")
            index = int(pilih_ukuran) - 1
            if 0 <= index < len(ukuran_tersedia):
                return ukuran_tersedia[index]
            else:
                print("Nomor tidak valid. Silakan pilih nomor yang tersedia.")
        except ValueError:
            print("Masukkan nomor yang valid.")

def hitung_total_dan_diskon(total_harga):
    """Menghitung total setelah diskon"""
    if diskon_aktif:
        potongan = total_harga * (persentase_diskon / 100)
        total_setelah_diskon = total_harga - potongan
        return total_setelah_diskon, potongan
    return total_harga, 0

def proses_kategori(kategori, nama_kategori):
    """Fungsi untuk memproses pemilihan item dalam kategori"""
    print(f"{nama_kategori}:")
    for key, (nama, harga, ukuran) in kategori.items():
        print(f"{key}. {nama} - Rp{harga:,}")
    
    pilih = input("\nMau apa? (Masukkan nomor) ")
    if pilih in kategori:
        item = kategori[pilih]
        nama_item, harga_item, ukuran_tersedia = item
        
        print(f"\nAnda memilih: {nama_item}")
        ukuran_dipilih = tampilkan_ukuran_dan_pilih(ukuran_tersedia)
        
        daftar_pesanan.append((nama_item, harga_item, ukuran_dipilih))
        print(f"\n'{nama_item}' ukuran '{ukuran_dipilih}' berhasil ditambahkan ke pesanan.")
    else:
        print("Pilihan tidak valid.")
    input("\nTekan Enter untuk melanjutkan...")

while True:
    clear_console()
    print("===== BrockS ITEM =====")
    print("===========================")
    print("1. Footwear")
    print("2. Apparel")
    print("3. Accessories")
    print("4. New Arrival")
    print("5. Kode Diskon")
    print("6. Metode Pembayaran")
    print("7. Struk Pembayaran")

    User_Pilihan = input("\nMasukkan Pilihan: ")

    clear_console()
    print("\n=============================\n")

    if User_Pilihan == "1":
        proses_kategori(Footwear, "Footwear")

    elif User_Pilihan == "2":
        proses_kategori(Apparel, "Apparel")

    elif User_Pilihan == "3":
        proses_kategori(Accessories, "Accessories")

    elif User_Pilihan == "4":
        proses_kategori(New_Arrival, "New Arrival")

    elif User_Pilihan == "5":
        print("===== KODE DISKON =====")
        if diskon_aktif:
            print(f"Kode diskon aktif: {diskon_aktif} ({persentase_diskon}% OFF)")
            hapus = input("Ingin menghapus kode diskon? (y/n): ").lower()
            if hapus == 'y':
                diskon_aktif = None
                persentase_diskon = 0
                print("Kode diskon berhasil dihapus.")
        else:
            print("Masukkan kode diskon untuk mendapatkan potongan harga!")
            kode_input = input("Kode diskon: ").lower().strip()
            
            if kode_input in kode_diskon:
                diskon_aktif = kode_input
                persentase_diskon = kode_diskon[kode_input]
                print(f"✅ Kode diskon '{kode_input}' berhasil diterapkan!")
                print(f"Anda mendapat diskon {persentase_diskon}%")
            else:
                print("❌ Kode diskon tidak valid.")
        
        input("\nTekan Enter untuk melanjutkan...")

    elif User_Pilihan == "6":
        print("Metode Pembayaran:")
        for key, metode in metode_pembayaran.items():
            print(f"{key}. {metode}")
        pilih_metode = input("\nBayar pake apa? (Masukkan nomor) ")
        if pilih_metode in metode_pembayaran:
            metode = metode_pembayaran[pilih_metode]
        else:
            print("Pilihan metode pembayaran tidak valid.")
            input("\nTekan Enter untuk melanjutkan...")
            continue

        clear_console()
        print("====== Struk Pembayaran ======")
        total_harga = 0
        if not daftar_pesanan:
            print("Anda belum memesan apapun.")
        else:
            for i, (nama, harga, ukuran) in enumerate(daftar_pesanan, start=1):
                print(f"{i}. {nama} (Ukuran: {ukuran}) - Rp{harga:,}")
                total_harga += harga
            print("----------------------------")
            print(f"Subtotal: Rp{total_harga:,}")
            
            # Hitung diskon jika ada
            total_setelah_diskon, potongan = hitung_total_dan_diskon(total_harga)
            if diskon_aktif:
                print(f"Diskon ({diskon_aktif} - {persentase_diskon}%): -Rp{potongan:,.0f}")
                print("----------------------------")
                print(f"Total Pembayaran: Rp{total_setelah_diskon:,.0f}")
            else:
                print(f"Total Pembayaran: Rp{total_harga:,}")
            
            print(f"Metode Pembayaran: {metode}")
        print("=============================")
        input("\nTekan Enter untuk melanjutkan...")

    elif User_Pilihan == "7":
        clear_console()
        print("======== Struk Akhir ========")
        total_harga = 0
        if not daftar_pesanan:
            print("Anda belum memesan apapun.")
        else:
            for i, (nama, harga, ukuran) in enumerate(daftar_pesanan, start=1):
                print(f"{i}. {nama} (Ukuran: {ukuran}) - Rp{harga:,}")
                total_harga += harga
            print("----------------------------")
            print(f"Subtotal: Rp{total_harga:,}")
            
            # Hitung diskon jika ada
            total_setelah_diskon, potongan = hitung_total_dan_diskon(total_harga)
            if diskon_aktif:
                print(f"Diskon ({diskon_aktif} - {persentase_diskon}%): -Rp{potongan:,.0f}")
                print("----------------------------")
                print(f"Total Pembayaran: Rp{total_setelah_diskon:,.0f}")
            else:
                print(f"Total Pembayaran: Rp{total_harga:,}")
                
        print("=============================")
        print("Terima kasih sudah berbelanja di BrockS!")
        break

    else:
        print("Pilihan tidak valid, silakan coba lagi.")
        input("\nTekan Enter untuk melanjutkan...")

print("\nProgram berakhir.")