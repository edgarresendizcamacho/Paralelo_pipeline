describe("Bienvenido al curso de cypress sección 1", () =>{
    
    //require('cypress-xpath')
    // or
    //require('cypress-iframe')
    
        //OpenCypress|Set*only*
        it("Mi primer test -> Hola Mundo", () => {
            cy.log("Hola Mundo")
            cy.wait(1500)
        })

        it("Segundo test -> entrar a un iframe", () =>{

            cy.visit("https://integras3qa.lennken.com/Default.aspx")
            cy.get("#ctl00_cphContenido_oLogin_UserName").should("be.visible").type("0000333")
            cy.get("#ctl00_cphContenido_oLogin_Password").should("be.visible").type("$000333$")
            
            cy.get("#ctl00_cphContenido_oLogin_LoginButton").should("be.visible").click()  
            cy.get("#ctl00_cphPrincipal_repeaterModulo_ctl02_lnkModulo").should("be.visible").click()  
            cy.get("#ctl00_cphToolbar_linkChangePwd").should("be.visible").click()  
            
            //buscar por algun atributo el control
            //cy.get("[value='Cambiar']").should("be.visible").click()  

            //buscar por xpath (recuerda que se tiene que agregar la libreria require('cypress-xpath') )
            //cy.frameLoaded('#dialog-body')
            //cy.iframe().find("#ctl00_cphPrincipal_txtUserNamePasswordLast").should("be.visible").type("Hola")
            //cy.iframe().find("#ctl00_cphPrincipal_txtUserNamePassword").should("be.visible").type("adios")
            //cy.iframe().find("#ctl00_cphPrincipal_Button1").should("be.visible").click()
            //cy.iframe().wait(1500)
            

        })

        it.only("Segundo test -> entrar a opcion de busqueda", () =>{

            cy.visit("https://integras3qa.lennken.com/Default.aspx")
            cy.wait(4000)
            cy.get("#ctl00_cphContenido_oLogin_UserName").should("be.visible").type("0000333")
            cy.get("#ctl00_cphContenido_oLogin_Password").should("be.visible").type("$000033$")
            
            cy.get("#ctl00_cphContenido_oLogin_LoginButton").should("be.visible").click()  
            cy.get("#ctl00_cphPrincipal_repeaterModulo_ctl02_lnkModulo").should("be.visible").click()  
            
            //buscar por algun atributo el control
            cy.get(":nth-child(3) > .rmRootLink > .rmText").should("be.visible").click()  
            cy.get(".rmSelected > .rmSlide > .rmVertical > .rmItem > .rmLink").should("be.visible").click()
            
            
            cy.get("#ctl00_cphPrincipal_txtNonomina").should("be.visible").type("0001147")
            cy.get("#ctl00_cphPrincipal_txtNombre").should("be.visible").type("MONICA ARACELI")
            cy.wait(1000)  
            cy.get("#ctl00_cphPrincipal_bttnBuscar").should("be.visible").click()
                        
            //selecctor por contains


        })

        


}) //Cierre de describe