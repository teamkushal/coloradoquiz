import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1538Component } from './test-component1538.component';

describe('TestComponent1538Component', () => {
  let component: TestComponent1538Component;
  let fixture: ComponentFixture<TestComponent1538Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1538Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
