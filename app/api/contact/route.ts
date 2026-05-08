import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALERT_EMAIL = "contato@indico.net.br";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const name = body.name || "Não informado";
        const email = body.email || "Não informado";
        const type = body.type || "Formulário do site";
        const message = body.message || "Sem mensagem";

        const { data, error } = await resend.emails.send({
            from: "Site INDICO <contato@indico.net.br>",
            to: [ALERT_EMAIL],
            subject: `Novo formulário recebido - ${type}`,
            replyTo: email !== "Não informado" ? email : undefined,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Novo envio de formulário</h2>

          <p><strong>Tipo:</strong> ${type}</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>

          <hr />

          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Erro Resend:", error);

            return NextResponse.json(
                { success: false, message: "Erro ao enviar e-mail.", error },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "E-mail enviado com sucesso.",
            data,
        });
    } catch (error) {
        console.error("Erro geral:", error);

        return NextResponse.json(
            { success: false, message: "Erro ao processar formulário." },
            { status: 500 }
        );
    }
}