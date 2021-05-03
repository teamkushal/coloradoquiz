import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1022Component } from './test-component1022.component';

describe('TestComponent1022Component', () => {
  let component: TestComponent1022Component;
  let fixture: ComponentFixture<TestComponent1022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
