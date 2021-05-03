import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3846Component } from './test-component3846.component';

describe('TestComponent3846Component', () => {
  let component: TestComponent3846Component;
  let fixture: ComponentFixture<TestComponent3846Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3846Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
