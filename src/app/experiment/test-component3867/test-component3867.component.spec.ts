import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3867Component } from './test-component3867.component';

describe('TestComponent3867Component', () => {
  let component: TestComponent3867Component;
  let fixture: ComponentFixture<TestComponent3867Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3867Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
