import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3628Component } from './test-component3628.component';

describe('TestComponent3628Component', () => {
  let component: TestComponent3628Component;
  let fixture: ComponentFixture<TestComponent3628Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3628Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
