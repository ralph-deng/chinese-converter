from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import opencc

app = FastAPI()

origins = [
  'http://localhost:8001'
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

@app.get('/api/{lang}/{text}')
async def handle_api(lang: str, text: str):
  if lang == 'tc':
    converter = opencc.OpenCC('t2s.json')
  elif lang == 'sc':
    converter = opencc.OpenCC('s2t.json')  
  else:
    return {'converted': ''}
  converted = converter.convert(text)
  return {'converted': converted}