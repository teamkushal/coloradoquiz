import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent326Component } from './test-component326.component';

describe('TestComponent326Component', () => {
  let component: TestComponent326Component;
  let fixture: ComponentFixture<TestComponent326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent326Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
