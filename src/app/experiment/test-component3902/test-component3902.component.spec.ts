import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3902Component } from './test-component3902.component';

describe('TestComponent3902Component', () => {
  let component: TestComponent3902Component;
  let fixture: ComponentFixture<TestComponent3902Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3902Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
