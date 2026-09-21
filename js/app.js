(function () {
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    var toast = document.getElementById('toast');
    var toastTimer = null;

    function showToast(message) {
        if (!toast) {
            return;
        }
        toast.textContent = message;
        toast.hidden = false;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.hidden = true;
        }, 2800);
    }

    var shareBtn = document.getElementById('btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', function () {
            var shareData = {
                title: 'Espoir Compagnie — Carte de visite',
                text: 'Services informatiques et digitaux à Kinshasa',
                url: window.location.href,
            };

            if (navigator.share) {
                navigator.share(shareData).catch(function () {});
                return;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(window.location.href).then(function () {
                    showToast('Lien copié dans le presse-papiers');
                }).catch(function () {
                    showToast('Copiez le lien depuis la barre d’adresse');
                });
                return;
            }

            showToast('Copiez le lien depuis la barre d’adresse');
        });
    }
})();
