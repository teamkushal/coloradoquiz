import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent348Component } from './test-component348.component';

describe('TestComponent348Component', () => {
  let component: TestComponent348Component;
  let fixture: ComponentFixture<TestComponent348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent348Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
