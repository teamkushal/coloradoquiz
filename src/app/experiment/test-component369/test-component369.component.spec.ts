import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent369Component } from './test-component369.component';

describe('TestComponent369Component', () => {
  let component: TestComponent369Component;
  let fixture: ComponentFixture<TestComponent369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent369Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
