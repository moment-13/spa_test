<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterTodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'title' => 'required',
            'detail' => 'required',
            'due_date' => 'required|date',
            // priorityは1以上３未満しか許可しない
            'priority' => 'required|min:1|max:3',
            'image_path' => 'file|mimes:jpeg,jpg,png',
            'category_id' => 'required',
        ];
    }
}
