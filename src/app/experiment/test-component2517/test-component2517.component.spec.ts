import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2517Component } from './test-component2517.component';

describe('TestComponent2517Component', () => {
  let component: TestComponent2517Component;
  let fixture: ComponentFixture<TestComponent2517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2517Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
