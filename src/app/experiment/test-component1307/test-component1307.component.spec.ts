import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1307Component } from './test-component1307.component';

describe('TestComponent1307Component', () => {
  let component: TestComponent1307Component;
  let fixture: ComponentFixture<TestComponent1307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
