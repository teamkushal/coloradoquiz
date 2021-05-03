import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent956Component } from './test-component956.component';

describe('TestComponent956Component', () => {
  let component: TestComponent956Component;
  let fixture: ComponentFixture<TestComponent956Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent956Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
