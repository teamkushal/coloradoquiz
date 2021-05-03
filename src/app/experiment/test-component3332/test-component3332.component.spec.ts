import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3332Component } from './test-component3332.component';

describe('TestComponent3332Component', () => {
  let component: TestComponent3332Component;
  let fixture: ComponentFixture<TestComponent3332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
