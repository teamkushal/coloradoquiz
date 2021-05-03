import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3537Component } from './test-component3537.component';

describe('TestComponent3537Component', () => {
  let component: TestComponent3537Component;
  let fixture: ComponentFixture<TestComponent3537Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3537Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
