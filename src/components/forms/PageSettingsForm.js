'use client'

import React from 'react'
import RadioTogglers from '../formItems/radioTogglers'
import Image from 'next/image'
import SubmitButton from '../buttons/SubmitButton'
import { savePageSettings } from '@/actions/pageActions'
import toast from 'react-hot-toast'

export default function PageSettingsForm({ page, user }) {

  const saveBaseSettings = async (formData) => {  
    const result = await savePageSettings(formData) 
      if (result) {
      toast.success('guardadito!')
    }   
  }

  return (
    <div>
      <form action={saveBaseSettings}>
        <div className='bg-slate-200 h-32 flex items-center justify-center'>
          <RadioTogglers
            selected="color"
            options={[
              { value: 'color', label: 'Color' },
              { value: 'image', label: 'Image' },
            ]}
            onChange={() => { }}
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className='rounded-full relative -mt-8 border-4 border-white shadow-lg'
            src={user?.image}
            alt={'avatar'}
            height={128} width={128}
          />
        </div>
        <div className='p-4'>
          <label
            className='input-label'
            htmlFor='nameIn'
          >
            Nombre para mostrar
          </label>
          <input
            type='text' id='nameIn' placeholder='AuronPlay'
            name='displayName'
            defaultValue={page.displayName}
          />
          <label
            className='input-label'
            htmlFor='locationIn'
          >
            Pais
          </label>
          <input
            type='text' id='locationIn' placeholder='Argentina'
            name='location'
            defaultValue={page.location}
          />
          <label
            className='input-label'
            htmlFor='bioIn'
          >
            Descripcion
          </label>
          <textarea
            type='text' id='bioIn' placeholder='Soy genial'
            name='bio'
            defaultValue={page.bio}
          />
          <div className='max-w-xs mx-auto mt-4'> 
            <SubmitButton>
              <span>Save</span>
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  )
}
