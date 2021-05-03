import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1355Component } from './test-component1355.component';

describe('TestComponent1355Component', () => {
  let component: TestComponent1355Component;
  let fixture: ComponentFixture<TestComponent1355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1355Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
