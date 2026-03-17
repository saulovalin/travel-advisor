"use client";

export default function List({ places, isLoading, type, setType, rating, setRating }: any) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-extrabold text-sky-950 tracking-tighter">
        Descubra lugares incríveis
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-white/80">
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-sky-700 uppercase mb-1">O que buscar?</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-stone-200 bg-white py-2 px-3 rounded-lg text-sm"
          >
            <option value="restaurants">Restaurantes</option>
            <option value="hotels">Hotéis</option>
            <option value="attractions">Atrações</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1">Avaliação mínima</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border border-stone-200 bg-white py-2 px-3 rounded-lg text-sm">
            <option value="">Todas</option>
            <option value="3">⭐⭐⭐+ (3.0)</option>
            <option value="4">⭐⭐⭐⭐+ (4.0)</option>
            <option value="4.5">⭐⭐⭐⭐⭐ (4.5)</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sky-700"></div>
        </div>
      ) : (
        <div className="space-y-6 pb-6">
          {places?.map((place: any, index: number) => (
            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-50 overflow-hidden cursor-pointer flex flex-col group">

              <div className="h-48 w-full bg-stone-100 relative overflow-hidden border-b border-stone-100">
                {place.photo?.images?.large?.url ? (
                  <img
                    src={place.photo.images.large.url}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400 font-medium">
                    Sem imagem disponível
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-bold text-xl text-sky-950 mb-1 line-clamp-1 tracking-tight">{place.name}</h3>

                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 shadow-inner">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold text-amber-900">
                      {place.rating || 'N/A'}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    {place.num_reviews} avaliações
                  </span>
                </div>

                {place.address && (
                  <div className="flex items-start text-sky-800 text-sm pt-2 border-t border-stone-100">
                    <svg className="w-4 h-4 mr-1.5 shrink-0 mt-0.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-2">{place.address}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}