import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1573Component } from './test-component1573.component';

describe('TestComponent1573Component', () => {
  let component: TestComponent1573Component;
  let fixture: ComponentFixture<TestComponent1573Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1573Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
