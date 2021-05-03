import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent405Component } from './test-component405.component';

describe('TestComponent405Component', () => {
  let component: TestComponent405Component;
  let fixture: ComponentFixture<TestComponent405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
