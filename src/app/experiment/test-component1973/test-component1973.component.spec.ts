import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1973Component } from './test-component1973.component';

describe('TestComponent1973Component', () => {
  let component: TestComponent1973Component;
  let fixture: ComponentFixture<TestComponent1973Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1973Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
