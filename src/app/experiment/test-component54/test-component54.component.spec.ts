import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent54Component } from './test-component54.component';

describe('TestComponent54Component', () => {
  let component: TestComponent54Component;
  let fixture: ComponentFixture<TestComponent54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
