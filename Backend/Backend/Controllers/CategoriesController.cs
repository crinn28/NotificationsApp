using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class CategoriesController : Controller
    {
        static List<Category> categories = new List<Category> {
        new Category{Name="Course", Id="1"},
        new Category{ Name= "General", Id= "2"},
        new Category{ Name= "Laboratory", Id= "3"}
        };

        /// <summary>
        /// Get the whole collection of categories
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(categories);
        }

        /// <summary>
        /// Get the element with the given id
        /// </summary>
        [HttpGet("{id}", Name = "GetCategory")]
        public IActionResult GetCategory(string id)
        {
            foreach(Category cat in categories)
            {
                if(cat.Id == id)
                    return Ok(cat);
            }
            return BadRequest();
        }
        [HttpGet("name/{name}", Name = "GetCategoryByName")]
        public IActionResult GetCategoryByName(string name)
        {
            foreach (Category cat in categories)
            {
                if (cat.Name == name)
                    return Ok(cat);
            }
            return BadRequest();
        }
        /// <summary>
        /// Create a new category and add it to the category list
        /// </summary>
        [HttpPost]
        public IActionResult CreateCategory([FromBody] Category category)
        {
            categories.Add(category);
            return CreatedAtRoute("GetCategory", new { id = category.Id }, category);
        }

        /// <summary>
        /// Delete the category with the given id  
        /// </summary>
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(string id)
        {
            categories.RemoveAt(categories.FindIndex((category) => category.Id == id));
            return Ok(categories);
        }
    }
}
