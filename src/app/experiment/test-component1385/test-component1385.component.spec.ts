import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1385Component } from './test-component1385.component';

describe('TestComponent1385Component', () => {
  let component: TestComponent1385Component;
  let fixture: ComponentFixture<TestComponent1385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1385Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
