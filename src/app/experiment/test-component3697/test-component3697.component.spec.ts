import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3697Component } from './test-component3697.component';

describe('TestComponent3697Component', () => {
  let component: TestComponent3697Component;
  let fixture: ComponentFixture<TestComponent3697Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3697Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
