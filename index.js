
    function createAndReleaseObjects() {
    
    let objects = [];

  
    for (let i = 0; i < 1000000; i++) {
        objects.push({ index: i, data: `This is object number ${i}` });
    }

    console.log("✅ Created 1,000,000 objects.");

  
    console.log("Example object:", objects[123456]);

    
    objects = null;

   
    console.log("🧹 References cleared. Waiting for garbage collection...");
}

