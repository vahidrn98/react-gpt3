import os

def get_input(string):

    return input(string)

def parse_input(string):

    return string.split(" ")

def ask(config,question,config_name,approval_case):

    answer = get_input(question)
    if(answer=="yes"):
        config[config_name] = approval_case

def make_component(name):
    return 'import "./'+name+'.css";\n\nfunction '+name+'() {\n return (\n <div></div>\n);}\nexport default '+name+';'

def make_root(file,name):
    file.write('export * from "./'+name+'"') 

def create_files(config,names):

    for name in names:
        try:
            os.mkdir(name)
            file = open(name+"/"+name+"."+config["file_extension"],"w")
            component_content = make_component(name)
            file.write(component_content)

            open(name+"/"+name+".css","w")

            if(config["include_stories"]):
                open(name+"/"+name+".stories."+config["file_extension"],"w")

            if(config["include_tests"]):
                open(name+"/"+name+".test."+config["file_extension"],"w")
            
            if(config["using_sass"]):
                open(name+"/"+name+".module.scss","w")

            if(config["separate_types"]):
                open(name+"/"+name+".types."+config["file_extension"],"w")
            
            if(config["root_file"]):
                root = open(name+"/"+"index."+config["file_extension"],"w")
                make_root(root,name)
        except:
            continue
        



if __name__ == '__main__':

    names = get_input("Please enter component names with capital letter seperated by space: ")
    component_names = parse_input(names)

    config = {
    "file_extension" : "js",
    "include_stories" : False,
    "include_tests" : False,
    "using_sass" : False,
    "root_file" : False,
    "separate_types" : False,
    }

    # ask(config,"Are you using TypeScript? ","file_extension","ts")
    ask(config,"Are you using stories? ","include_stories",True)
    ask(config,"Are you using tests? ","include_tests",True)
    ask(config,"Are you using sass? ","using_sass",True)
    ask(config,"Should I create a root file? ","root_file",True)
    ask(config,"Should I create separate type files? ","separate_types",True)

    create_files(config,component_names)