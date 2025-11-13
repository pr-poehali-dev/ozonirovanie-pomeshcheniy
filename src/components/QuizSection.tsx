import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const QuizSection = () => {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const problems = [
    { id: "insects", label: "Насекомые", icon: "Bug" },
    { id: "smell", label: "Запах", icon: "Wind" },
    { id: "mold", label: "Плесень", icon: "ShieldAlert" },
    { id: "other", label: "Другое", icon: "HelpCircle" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="pt-8 pb-8 px-6 md:px-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Icon name="Calculator" size={14} className="mr-1" />
                  Быстрый расчет
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ответьте на 4 вопроса
                </h2>
                <p className="text-lg text-muted-foreground">
                  Мы отправим расчет стоимости на любой удобный контакт
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">1. Какая у вас проблема?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {problems.map((problem) => (
                      <button
                        key={problem.id}
                        onClick={() => setSelectedProblem(problem.id)}
                        className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                          selectedProblem === problem.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Icon 
                            name={problem.icon as any} 
                            size={32} 
                            className={selectedProblem === problem.id ? 'text-primary' : 'text-muted-foreground'}
                          />
                          <span className={`font-medium ${
                            selectedProblem === problem.id ? 'text-primary' : 'text-foreground'
                          }`}>
                            {problem.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-center text-muted-foreground mb-4">
                    или
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full text-lg"
                  >
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Задайте свой вопрос в чате прямо сейчас
                  </Button>
                </div>

                {selectedProblem && (
                  <div className="pt-4 animate-fade-in">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-lg"
                    >
                      Продолжить расчет
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Icon name="Lock" size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                Ваши данные в безопасности и не будут переданы третьим лицам
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
