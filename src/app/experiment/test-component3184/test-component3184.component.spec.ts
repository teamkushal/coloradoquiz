import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3184Component } from './test-component3184.component';

describe('TestComponent3184Component', () => {
  let component: TestComponent3184Component;
  let fixture: ComponentFixture<TestComponent3184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
