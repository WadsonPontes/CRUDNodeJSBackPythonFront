import requests

class Usuario():
	def __init__(self, id, nome, classe, raca):
		self.id = id
		self.nome = nome
		self.classe = classe
		self.raca = raca
		pass
	pass

usuario = Usuario(None, 'João', 'Mago', 'Elfo')

def criar(entity):
	url = 'http://localhost:3333/criar'
	res = requests.post(url, json = entity.__dict__)

	print(res.json())
	return res.json()
	pass

def buscar(entity=None):
	url = 'http://localhost:3333/buscar'

	if entity:
		res = requests.get(url, params = entity.__dict__)
	else:
		res = requests.get(url)

	print(res.json())
	return res.json()
	pass

def atualizar(entity):
	url = 'http://localhost:3333/atualizar/' + str(entity.id)
	res = requests.put(url, json = entity.__dict__)

	print(res.json())
	return res.json()
	pass

def apagar(entity):
	url = 'http://localhost:3333/apagar/' + str(entity.id)
	res = requests.delete(url)

	print(res.json())
	return res.json()
	pass

def apagarTudo():
	url = 'http://localhost:3333/apagartudo'
	res = requests.delete(url)

	print(res.json())
	return res.json()
	pass

criar(usuario)