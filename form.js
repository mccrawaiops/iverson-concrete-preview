(function(){var f=document.getElementById('quote');if(!f)return;var TEL='+19704202769',EM='IversonCustom@gmail.com',btn='sms';
f.querySelectorAll('button[type=submit]').forEach(function(b){b.addEventListener('click',function(){btn=b.value;});});
f.addEventListener('submit',function(e){e.preventDefault();var d={};['name','phone','town','project','size','details'].forEach(function(k){d[k]=(f.elements[k].value||'').trim();});
var err=f.querySelector('.err');if(!d.name||!d.phone||!d.town||!d.project){err.hidden=false;return;}err.hidden=true;
var lines=['Hi Nick, I would like a free concrete estimate.','Name: '+d.name,'Phone: '+d.phone,'Town: '+d.town,'Project: '+d.project];
if(d.size)lines.push('Size: '+d.size);if(d.details)lines.push('Details: '+d.details);var body=encodeURIComponent(lines.join('\n'));
location.href=btn==='email'?'mailto:'+EM+'?subject='+encodeURIComponent('Free Estimate Request - '+d.town)+'&body='+body:'sms:'+TEL+'?&body='+body;});})();
